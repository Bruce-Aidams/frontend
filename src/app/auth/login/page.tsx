"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [twoFactorCode, setTwoFactorCode] = useState("");
    const [twoFactorRequired, setTwoFactorRequired] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post('/login', { email, password });

            if (res.data.two_factor_required) {
                setTwoFactorRequired(true);
                toast.info("Two-factor authentication required.");
                return;
            }

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            toast.success("Welcome back, " + res.data.user.name + "!");

            if (res.data.user.role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/dashboard');
            }
        } catch (err) {
            const error = err as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
            let errorMessage = "Login failed";

            if (error.response?.data?.errors) {
                const firstErrorKey = Object.keys(error.response.data.errors)[0];
                errorMessage = error.response.data.errors[firstErrorKey][0];
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }

            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f9] dark:bg-gray-950 p-4">
            <div className="w-full max-w-[400px] space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">CloudTech</h1>
                </div>

                <Card className="sneat-card border-none shadow-xl dark:bg-gray-900">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-xl font-bold">Welcome to CloudTech! 👋</CardTitle>
                        <CardDescription>Please sign-in to your account and start the adventure</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!twoFactorRequired ? (
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            type="email"
                                            placeholder="enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Password</label>
                                        <Link href="/auth/forgot-password" title="Forgot Password?" className="text-[10px] font-bold text-primary hover:underline">Forgot Password?</Link>
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                                        <PasswordInput
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/20 mt-4 transition-all active:scale-[0.98]">
                                    {loading ? "Signing in..." : "Sign In"}
                                    {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                                </Button>
                            </form>
                        ) : (
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                setLoading(true);
                                try {
                                    const res = await api.post('/verify-2fa', { email, code: twoFactorCode });
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('user', JSON.stringify(res.data.user));
                                    toast.success("Verified! Welcome " + res.data.user.name);
                                    router.push(res.data.user.role === 'admin' ? '/admin' : '/dashboard');
                                } catch (err: any) {
                                    toast.error(err.response?.data?.message || "Verification failed");
                                } finally {
                                    setLoading(false);
                                }
                            }} className="space-y-4 animate-in slide-in-from-right duration-300">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Verification Code</label>
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            type="text"
                                            placeholder="6-digit code"
                                            value={twoFactorCode}
                                            onChange={(e) => setTwoFactorCode(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800"
                                        />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground italic">Check your email for the simulated code.</p>
                                </div>

                                <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/20 mt-4">
                                    {loading ? "Verifying..." : "Verify & Continue"}
                                </Button>

                                <button
                                    type="button"
                                    onClick={() => setTwoFactorRequired(false)}
                                    className="w-full text-xs font-bold text-muted-foreground hover:text-primary transition-colors py-2"
                                >
                                    Back to login
                                </button>
                            </form>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                        <p className="text-sm text-center text-muted-foreground">
                            New on our platform?{" "}
                            <Link href="/auth/register" className="text-primary font-bold hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </CardFooter>
                </Card>

                <p className="text-center text-[10px] text-muted-foreground px-8 leading-relaxed">
                    By continuing, you agree to CloudTech&apos;s <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
            </div>
        </div>
    );
}
