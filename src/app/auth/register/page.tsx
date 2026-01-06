"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { PasswordStrength } from "@/components/ui/password-strength";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { User, Mail, Smartphone, Lock, UserPlus, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Basic Phone Validation (Ghana)
        const phoneRegex = /^(\+233|0)(2|5)\d{8}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Invalid Ghana phone number. Must start with 02, 05 or +233");
            setLoading(false);
            return;
        }

        if (password !== passwordConfirmation) {
            toast.error("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const res = await api.post('/register', {
                name,
                email,
                phone,
                password,
                password_confirmation: passwordConfirmation,
                referral_code: referralCode || undefined
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            toast.success("Account created successfully! Welcome to CloudTech.");
            router.push('/dashboard');
        } catch (err) {
            const error = err as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
            let errorMessage = "Registration failed";

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
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f9] dark:bg-gray-950 p-4 py-12">
            <div className="w-full max-w-[450px] space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">CloudTech</h1>
                </div>

                <Card className="sneat-card border-none shadow-xl dark:bg-gray-900">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-xl font-bold text-center">Adventure starts here 🚀</CardTitle>
                        <CardDescription className="text-center">Make your data bundle management easy and fun!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="054XXXXXXX"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                                        <PasswordInput
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                        <PasswordStrength password={password} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Confirm</label>
                                    <div className="relative">
                                        <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                                        <PasswordInput
                                            placeholder="••••••••"
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            required
                                            className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Referral Code (Optional)</label>
                                <div className="relative">
                                    <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="If you were referred, enter code here"
                                        value={referralCode}
                                        onChange={(e) => setReferralCode(e.target.value)}
                                        className="h-11 pl-10 bg-gray-50/50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-800 transition-all outline-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <input type="checkbox" id="terms" required className="rounded border-gray-300 text-primary focus:ring-primary" />
                                <label htmlFor="terms" className="text-[10px] text-muted-foreground">
                                    I agree to{" "}
                                    <Link href="#" className="text-primary font-bold hover:underline">privacy policy & terms</Link>
                                </label>
                            </div>

                            <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/20 mt-2 transition-all active:scale-[0.98]">
                                {loading ? "Creating Account..." : "Sign Up"}
                                {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                        <p className="text-sm text-center text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="text-primary font-bold hover:underline">
                                Sign in instead
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
