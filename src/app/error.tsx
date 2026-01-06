"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Home, Ghost } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global Error Boundary:", error);
    }, [error]);

    const is403 = error.message?.includes("403") || (error as any).status === 403;

    return (
        <div className="min-h-screen bg-[#F8F9FA] dark:bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="relative"
                >
                    <div className="w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                        {is403 ? (
                            <Ghost className="w-16 h-16 text-red-500 animate-bounce" />
                        ) : (
                            <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse" />
                        )}
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-500/5 blur-3xl rounded-full" />
                </motion.div>

                <div className="space-y-3">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-black tracking-tight text-slate-900 dark:text-white"
                    >
                        {is403 ? "Access Denied" : "Something went wrong!"}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm mx-auto"
                    >
                        {is403
                            ? "Oops! It seems you don't have permission to access this page. Please contact your administrator if you think this is a mistake."
                            : "We encountered an unexpected error while processing your request. Our team has been notified."}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() => reset()}
                        className="w-full sm:w-auto px-8 h-12 rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all font-bold group"
                    >
                        <RefreshCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="w-full sm:w-auto px-8 h-12 rounded-xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold"
                    >
                        <Link href="/dashboard">
                            <Home className="w-4 h-4 mr-2" />
                            Go Dashboard
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-12 text-xs text-slate-400 dark:text-slate-600 font-mono"
                >
                    Error ID: {error.digest || "ERR_GLOBAL_BOUNDARY"}
                </motion.div>
            </div>
        </div>
    );
}
