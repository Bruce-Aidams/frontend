"use client";

import { useState } from "react";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";
import { Mail, ArrowLeft, Send } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await api.post('/forgot-password', { email });
            toast.success(res.data.message);
            setSubmitted(true);

            // For development simulation, we'll log the token to the console as well
            if (res.data.debug_token) {
                console.log("Password Reset Token:", res.data.debug_token);
                toast.info("Debug: Token logged to console");
            }
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f9] dark:bg-gray-950 p-4">
            <div className="w-full max-w-[400px] space-y-6 animate-in fade-in zoom-in duration-500">
                <Card className="sneat-card border-none shadow-xl dark:bg-gray-900">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-xl font-bold">Forgot Password? 🔒</CardTitle>
                        <CardDescription>
                            Enter your email and we&apos;ll send you instructions to reset your password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {submitted ? (
                            <div className="text-center space-y-4 py-4">
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-sm">
                                    A password reset link has been sent to your email. Please check your inbox.
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    If you don&apos;t see the email, check your spam folder.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
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

                                <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-bold shadow-lg shadow-primary/20 mt-4 transition-all">
                                    {loading ? "Sending..." : "Send Reset Link"}
                                    {!loading && <Send className="w-4 h-4 ml-2" />}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                        <Link href="/auth/login" className="flex items-center gap-2 text-sm text-primary font-bold hover:underline mx-auto">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
