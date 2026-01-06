"use client";

import { motion } from "framer-motion";
import { Hammer, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 overflow-hidden relative">
            {/* Animated Background */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl w-full text-center space-y-8 relative z-10"
            >
                <div className="flex justify-center">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200 dark:ring-slate-800"
                        >
                            <Hammer className="w-20 h-20 text-primary" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-2xl shadow-lg ring-4 ring-white dark:ring-slate-950"
                        >
                            <Clock className="w-6 h-6" />
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
                        Under Maintenance
                    </h1>
                    <p className="text-xl text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
                        We're currently performing some scheduled upgrades to improve your experience. We'll be back online shortly.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <ShieldAlert className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">Safe & Secure</span>
                    </div>
                </div>

                <div className="pt-8">
                    <Button asChild variant="outline" className="h-12 px-8 rounded-2xl font-black uppercase tracking-widest text-xs border-white/20 hover:bg-white/10">
                        <Link href="/auth/login">Admin Login</Link>
                    </Button>
                </div>

                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 pt-12">
                    &copy; {new Date().getFullYear()} CloudTech &bull; Better Every Day
                </p>
            </motion.div>
        </div>
    );
}
