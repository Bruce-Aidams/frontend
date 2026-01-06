"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axios";
import { toast } from "sonner";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function PaymentCallbackPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { clearCart } = useCart();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState("Verifying payment...");

    const reference = searchParams.get('reference') || searchParams.get('trxref');

    useEffect(() => {
        if (!reference) {
            setStatus('error');
            setMessage("No payment reference found.");
            return;
        }

        const verifyPayment = async () => {
            try {
                // Pass all query parameters to the backend verification endpoint
                const res = await api.get(`/paystack/verify?${searchParams.toString()}`);
                if (res.data.message) {
                    setStatus('success');
                    setMessage(res.data.message);
                    toast.success(res.data.message);

                    // Clear cart for bundle purchases
                    clearCart();

                    setTimeout(() => {
                        router.push(res.data.redirect_url || '/dashboard/wallet');
                    }, 3000);
                }
            } catch (err: any) {
                setStatus('error');
                const errorMsg = err.response?.data?.message || "Verification failed.";
                setMessage(errorMsg);
                toast.error(errorMsg);
            }
        };

        verifyPayment();
    }, [reference, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800"
            >
                {status === 'loading' && (
                    <div className="space-y-6">
                        <div className="relative w-20 h-20 mx-auto">
                            <Loader2 className="w-20 h-20 text-primary animate-spin" />
                            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-black tracking-tight">Verifying Payment</h2>
                        <p className="text-muted-foreground font-medium italic">Please don't close this page while we confirm your transaction...</p>
                    </div>
                )}

                {status === 'success' && (
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">Payment Successful!</h2>
                        <p className="text-muted-foreground font-medium">{message}</p>
                        <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] animate-pulse">Redirecting you back...</p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="space-y-6">
                        <div className="w-20 h-20 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
                            <XCircle className="w-12 h-12 text-rose-600 dark:text-rose-400" />
                        </div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">Verification Error</h2>
                        <p className="text-muted-foreground font-medium">{message}</p>
                        <button
                            onClick={() => router.push('/dashboard/wallet')}
                            className="w-full h-14 bg-slate-900 dark:bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            Return to Wallet
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
