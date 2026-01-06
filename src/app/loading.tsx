"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] dark:bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 mb-8">
                {/* Outer spin */}
                <motion.div
                    className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner spin */}
                <motion.div
                    className="absolute inset-2 border-4 border-indigo-500/10 border-b-indigo-500 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                {/* Center dot */}
                <motion.div
                    className="absolute inset-[38%] bg-primary rounded-lg"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="space-y-2 text-center">
                <motion.h3
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >
                    Loading CloudTech...
                </motion.h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    Preparing your secure dashboard
                </p>
            </div>

            {/* Simulated progress bar */}
            <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-8 overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    animate={{
                        x: ["-100%", "100%"]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </div>
    );
}
