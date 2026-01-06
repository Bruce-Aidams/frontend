"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { Lock, Mail, CheckCircle2, ArrowRight } from "lucide-react";

function ResetPasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const tokenParam = searchParams.get("token");
        const emailParam = searchParams.get("email");
        if (tokenParam) setToken(tokenParam);
        if (emailParam) setEmail(emailParam);
    }, [searchParams]);

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await api.post('/reset-password', {
                email,
                token,
                password,
                password_confirmation: passwordConfirmation
            });
            toast.success("Password reset successfully!");
            setSuccess(true);
            setTimeout(() => {
                router.push('/auth/login');
            }, 3000);
        } catch (err) {
            const error = err as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
            let errorMessage = "Password reset failed";

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

    if (success) {
        return (
            <Card className="sneat-card border-none shadow-xl dark:bg-gray-900 text-center animate-in zoom-in duration-300">
                <CardContent className="pt-10 pb-10 space-y-4">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">Password Reset!</CardTitle>
                    <CardDescription>
                        Your password has been successfully updated.
                        Redirection to login in 3 seconds...
                    </CardDescription>
                    <Button onClick={() => router.push('/auth/login')} className="bg-green-600 hover:bg-green-700 text-white mt-4">
                        Login Now
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="sneat-card border-none shadow-xl dark:bg-gray-900">
            <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-xl font-bold">New Password 🔒</CardTitle>
                <CardDescription>
                    Create a new strong password for your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleReset} className="space-y-4">
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
                                className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">New Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                            <PasswordInput
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-11 pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                            <PasswordInput
                                placeholder="••••••••"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                required
                                className="h-11 pl-10"
                            />
                        </div>
                    </div>

                    <Button type="submit" disabled={loading || !token} className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/20 mt-4 transition-all">
                        {loading ? "Resetting..." : "Reset Password"}
                        {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>

                    {!token && (
                        <p className="text-[10px] text-destructive text-center font-bold">
                            Missing reset token. Please request a new link.
                        </p>
                    )}
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                <Link href="/auth/login" className="text-sm text-primary font-bold hover:underline mx-auto">
                    Return to Login
                </Link>
            </CardFooter>
        </Card>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f9] dark:bg-gray-950 p-4">
            <div className="w-full max-w-[400px] space-y-6 animate-in fade-in zoom-in duration-500">
                <Suspense fallback={<div>Loading...</div>}>
                    <ResetPasswordForm />
                </Suspense>
            </div>
        </div>
    );
}
