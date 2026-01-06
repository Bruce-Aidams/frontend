"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Lock } from "lucide-react";

export function ClientSideAdminGuard({ children }: { children: React.ReactNode }) {
    const [status, setStatus] = useState<"loading" | "authorized" | "unauthorized">("loading");
    const router = useRouter();

    useEffect(() => {
        const checkAuth = () => {
            const userStr = localStorage.getItem("user");
            if (!userStr) {
                setStatus("unauthorized");
                router.push("/auth/login?error=Session expired. Please login again.");
                return;
            }

            try {
                const user = JSON.parse(userStr);
                if (user.role?.toLowerCase() === "admin") {
                    setStatus("authorized");
                } else {
                    setStatus("unauthorized");
                    router.push("/dashboard?error=Unauthorized access. Admin only.");
                }
            } catch (e) {
                setStatus("unauthorized");
                router.push("/auth/login");
            }
        };

        const timer = setTimeout(checkAuth, 500); // Small delay to ensure hydration
        return () => clearTimeout(timer);
    }, [router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"
                >
                    <Lock className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="text-slate-500 font-medium animate-pulse">Verifying Admin Access...</p>
            </div>
        );
    }

    if (status === "unauthorized") {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <ShieldAlert className="w-16 h-16 text-red-500 mx-auto" />
                    <h2 className="text-2xl font-bold">Access Denied</h2>
                    <p className="text-slate-500">Redirecting you to a safe area...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
