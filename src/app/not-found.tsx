"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#F8F9FA] dark:bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Animated Background blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="max-w-lg w-full text-center space-y-12 relative z-10">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="text-[180px] font-black leading-none text-slate-200 dark:text-slate-900 select-none">
                        404
                    </div>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            rotate: [0, 5, -5, 0],
                            y: [0, -10, 0]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700">
                            <Search className="w-12 h-12 text-primary" />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-slate-900 dark:text-white"
                    >
                        Page Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500 dark:text-slate-400 text-lg max-w-sm mx-auto leading-relaxed"
                    >
                        The page you're looking for doesn't exist or has been moved to a new URL.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button
                        variant="default"
                        size="lg"
                        onClick={() => router.back()}
                        className="w-full sm:w-auto px-8 h-14 rounded-2xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all font-bold group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="w-full sm:w-auto px-8 h-14 rounded-2xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-bold"
                    >
                        <Link href="/dashboard">
                            <Home className="w-4 h-4 mr-2" />
                            Home Page
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
