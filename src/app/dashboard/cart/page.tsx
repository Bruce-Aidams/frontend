"use client";

import { useEffect, useState, useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingCart, Trash2, Edit2, CheckCircle2, Wallet, ArrowRight, User, Smartphone, Package, CreditCard, Info, AlertCircle, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const PaystackPaymentProvider = dynamic(() => import('@/components/payment/PaystackPaymentProvider'), { ssr: false });

import { cn } from "@/lib/utils";
import Link from "next/link";
import { AxiosError } from "axios";

const getNetworkBranding = (network: string) => {
    const n = network?.toUpperCase() || "";
    if (n.includes("MTN")) return { color: "#ffcc00", secondary: "#000", bg: "bg-yellow-400/10", border: "border-yellow-400" };
    if (n.includes("VODA") || n.includes("TELECEL")) return { color: "#e60000", secondary: "#fff", bg: "bg-red-600/10", border: "border-red-600" };
    if (n.includes("AIRTEL") || n.includes("TIGO")) return { color: "#ee1c25", secondary: "#fff", bg: "bg-red-500/10", border: "border-red-500" };
    return { color: "#4f46e5", secondary: "#fff", bg: "bg-indigo-600/10", border: "border-indigo-600" };
};

export default function CartPage() {
    const { cartItems, removeFromCart, updateCartItem, clearCart, totalAmount } = useCart();
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editPhone, setEditPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [publicSettings, setPublicSettings] = useState<any>(null);

    const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'paystack'>('wallet');
    const [paystackConfig, setPaystackConfig] = useState<any>(null);

    // config handled by PaystackPaymentProvider

    // useEffect logic for initializePaystack removed as it's now handled by the provider state

    useEffect(() => {
        api.get('/settings/public')
            .then(res => setPublicSettings(res.data))
            .catch(err => console.error("Failed to load settings", err));
    }, []);

    const chargeInfo = useMemo(() => {
        if (!publicSettings) return { type: 'percentage', value: 0, amount: 0 };
        const type = publicSettings.charge_type;
        const value = parseFloat(publicSettings.charge_value || "0");
        let amount = 0;
        if (type === 'percentage') {
            amount = totalAmount * (value / 100);
        } else {
            amount = value;
        }
        return { type, value, amount: paymentMethod === 'paystack' ? amount : 0 };
    }, [publicSettings, totalAmount, paymentMethod]);

    const grandTotal = totalAmount + chargeInfo.amount;

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;
        setLoading(true);
        const loadingToast = toast.loading("Processing your request...");

        try {
            const res = await api.post('/orders/bulk', {
                items: cartItems.map(item => ({
                    bundle_id: item.bundle_id,
                    recipient_phone: item.recipient_phone
                })),
                payment_method: paymentMethod
            });

            if (res.data.payment_method === 'paystack') {
                if (!publicSettings?.paystack_public) {
                    toast.error("Payment system not configured correctly. Please contact support.", { id: loadingToast });
                    setLoading(false);
                    return;
                }
                const orderIds = res.data.orders.map((o: any) => o.id);

                const config: any = {
                    reference: 'BULK-' + (new Date()).getTime().toString(),
                    email: JSON.parse(localStorage.getItem('user') || '{}').email,
                    amount: Math.round((res.data.total_amount + chargeInfo.amount) * 100),
                    publicKey: publicSettings?.paystack_public || '',
                    currency: 'GHS',
                    metadata: { order_ids: orderIds }
                };

                setPaystackConfig(config);
                toast.dismiss(loadingToast);

                // We need to wait for state update or use nested logic.
                // Since hooks can't be called conditionally, we'll use a side effect or a button component.
                // Actually, let's just use window.location as fallback if we can't easily trigger the hook here.
                // OR we can define the hook and pass the config dynamically.

                // Let's refactor to use a "PaystackTrigger" approach.
            } else {
                toast.success("All orders placed successfully!", { id: loadingToast });
                clearCart();
                router.push('/dashboard/orders');
            }
        } catch (err) {
            const e = err as AxiosError<{ message: string }>;
            toast.error(e.response?.data?.message || "Checkout failed. Please check your balance.", { id: loadingToast });
        } finally {
            setLoading(false);
        }
    };

    const startEditing = (id: string, currentPhone: string) => {
        setEditingId(id);
        setEditPhone(currentPhone);
    };

    const saveEdit = (id: string) => {
        updateCartItem(id, { recipient_phone: editPhone });
        setEditingId(null);
        toast.success("Phone number updated.");
    };

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-32 h-32 bg-primary/5 rounded-full flex items-center justify-center text-primary/20 relative">
                    <ShoppingCart className="w-16 h-16" />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-primary/10 rounded-full"
                    />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">Your cart is empty</h2>
                    <p className="text-muted-foreground max-w-sm mx-auto">Discover our amazing data bundles and start shopping for yourself and loved ones.</p>
                </div>
                <Button asChild className="rounded-2xl px-10 h-14 text-lg font-bold shadow-primary/20 shadow-xl hover:translate-y-[-2px] transition-transform">
                    <Link href="/dashboard/orders/new">Start Shopping <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10 relative z-10"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <ShoppingCart className="w-4 h-4" />
                            </div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Checkout</h2>
                        </div>
                        <p className="text-muted-foreground font-medium pl-10">You have {cartItems.length} bundles in your cart.</p>
                    </div>
                    <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-bold">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Empty Cart
                    </Button>
                </div>

                <div className="grid gap-8 lg:grid-cols-12 items-start">
                    <div className="lg:col-span-8 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {cartItems.map((item) => {
                                const branding = getNetworkBranding(item.network);
                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group overflow-hidden bg-white/40 backdrop-blur-xl dark:bg-slate-900/40 ring-1 ring-white/20 dark:ring-slate-800/50 rounded-3xl">
                                            <div className={cn("absolute left-0 top-0 w-2 h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500", branding.bg)} style={{ backgroundColor: branding.color }} />
                                            <CardContent className="p-8">
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                                                    <div className="flex items-center gap-8">
                                                        <div className={cn("w-20 h-20 rounded-[2.5rem] flex items-center justify-center relative shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-500", branding.bg)}>
                                                            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: branding.color }} />
                                                            <Package className="w-10 h-10 relative z-10" style={{ color: branding.color }} />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h3 className="font-black text-2xl tracking-tight text-slate-800 dark:text-slate-100">{item.bundle_name}</h3>
                                                            <div className="flex items-center gap-2">
                                                                <span className={cn("px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-sm")} style={{ backgroundColor: branding.color }}>
                                                                    {item.network}
                                                                </span>
                                                            </div>

                                                            <div className="mt-4 flex items-center gap-4">
                                                                <div className="w-8 h-8 bg-white/50 dark:bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400 border border-white/20 dark:border-slate-700">
                                                                    <Smartphone className="w-4 h-4" />
                                                                </div>
                                                                {editingId === item.id ? (
                                                                    <div className="flex items-center gap-3">
                                                                        <Input
                                                                            value={editPhone}
                                                                            onChange={(e) => setEditPhone(e.target.value)}
                                                                            className="h-10 w-48 bg-white/80 dark:bg-slate-800/80 border-primary font-black shadow-inner rounded-xl backdrop-blur-sm"
                                                                            autoFocus
                                                                        />
                                                                        <Button size="icon" variant="ghost" className="h-10 w-10 text-green-600 hover:bg-green-50 rounded-xl" onClick={() => saveEdit(item.id)}>
                                                                            <CheckCircle2 className="w-6 h-6" />
                                                                        </Button>
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex items-center gap-3 group/phone">
                                                                        <span className="text-lg font-black text-slate-600 dark:text-slate-400 tracking-tight">{item.recipient_phone}</span>
                                                                        <button onClick={() => startEditing(item.id, item.recipient_phone)} className="opacity-0 group-hover/phone:opacity-100 text-primary transition-all p-2 hover:bg-primary/10 rounded-xl">
                                                                            <Edit2 className="w-4 h-4" />
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-8 border-t sm:border-t-0 pt-6 sm:pt-0 border-slate-100/50 dark:border-slate-800/50">
                                                        <div className="text-right">
                                                            <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-[0.3em] font-black opacity-60">Price</p>
                                                            <p className="text-3xl font-black text-primary tracking-tighter">GHS {Number(item.price).toFixed(2)}</p>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="h-12 w-12 text-slate-300 hover:text-red-500 hover:bg-red-50/50 rounded-2xl transition-all duration-300 hover:rotate-12"
                                                        >
                                                            <Trash2 className="w-6 h-6" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                        {/* Payment Method Selector */}
                        <Card className="sneat-card border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden bg-white/80 backdrop-blur-md dark:bg-slate-900/80">
                            <CardHeader className="pb-3 px-6">
                                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                                    <CreditCard className="w-3 h-3" /> Select Payment Method
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 pb-6 space-y-3">
                                <button
                                    onClick={() => setPaymentMethod('wallet')}
                                    className={cn(
                                        "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300",
                                        paymentMethod === 'wallet'
                                            ? "border-primary bg-primary/5 shadow-[0_0_20px_-5px_rgba(var(--primary),0.2)]"
                                            : "border-slate-100 dark:border-slate-800 hover:border-slate-200"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all", paymentMethod === 'wallet' ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-slate-100 dark:bg-slate-800 text-slate-400")}>
                                            <Wallet className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-extrabold text-sm">Main Wallet</p>
                                            <p className="text-[10px] font-bold text-muted-foreground mt-0.5">Fast & Zero Fees</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'wallet' && (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <CheckCircle2 className="w-6 h-6 text-primary fill-primary/10" />
                                        </motion.div>
                                    )}
                                </button>

                                <button
                                    onClick={() => setPaymentMethod('paystack')}
                                    className={cn(
                                        "w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300",
                                        paymentMethod === 'paystack'
                                            ? "border-[#09a5db] bg-[#09a5db]/5 shadow-[0_0_20px_-5px_rgba(9,165,219,0.2)]"
                                            : "border-slate-100 dark:border-slate-800 hover:border-slate-200"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-all", paymentMethod === 'paystack' ? "bg-[#09a5db] text-white shadow-lg shadow-[#09a5db]/30" : "bg-slate-100 dark:bg-slate-800 text-slate-400")}>
                                            <CreditCard className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-extrabold text-sm">Online Payment</p>
                                            <p className="text-[10px] font-bold text-muted-foreground mt-0.5">Card / MoMo / Bank</p>
                                        </div>
                                    </div>
                                    {paymentMethod === 'paystack' && (
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                            <CheckCircle2 className="w-6 h-6 text-[#09a5db] fill-[#09a5db]/10" />
                                        </motion.div>
                                    )}
                                </button>
                            </CardContent>
                        </Card>

                        <Card className="sneat-card border-none bg-slate-900 dark:bg-primary text-white overflow-hidden relative shadow-2xl shadow-primary/20 rounded-[2rem]">
                            <div className="absolute right-[-20px] top-[-20px] opacity-10 blur-xl">
                                <ShoppingCart className="w-60 h-60" />
                            </div>
                            <CardHeader className="relative z-10 px-8 pt-8">
                                <CardTitle className="text-xs font-black uppercase tracking-[0.25em] opacity-60">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8 px-8 pb-8 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="opacity-60 font-bold">Items ({cartItems.length})</span>
                                        <span className="font-bold tracking-tight">GHS {totalAmount.toFixed(2)}</span>
                                    </div>

                                    {chargeInfo.amount > 0 && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="flex justify-between items-center text-sm overflow-hidden">
                                            <div className="flex items-center gap-1.5 opacity-60 font-bold">
                                                Processing Fee
                                                <div className="group relative">
                                                    <Info className="w-3 h-3 cursor-help text-sky-400" />
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-2xl z-50">
                                                        Fee applied by the payment gateway ({chargeInfo.type === 'percentage' ? `${chargeInfo.value}%` : `GHS ${chargeInfo.value}`}).
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="font-bold tracking-tight text-sky-400">+ GHS {chargeInfo.amount.toFixed(2)}</span>
                                        </motion.div>
                                    )}

                                    <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                        <span className="opacity-60 pb-1 text-xs font-black uppercase tracking-widest">Total to Pay</span>
                                        <div className="text-right">
                                            <p className="text-4xl font-black tracking-tighter leading-none">GHS {grandTotal.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    disabled={loading}
                                    onClick={handleCheckout}
                                    className={cn(
                                        "w-full h-16 transition-all shadow-2xl rounded-2xl font-black text-lg group",
                                        paymentMethod === 'paystack'
                                            ? "bg-[#09a5db] hover:bg-[#0894c5] text-white shadow-[#09a5db]/30"
                                            : "bg-white text-slate-900 hover:bg-slate-50 shadow-white/10"
                                    )}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 border-4 border-current border-t-transparent rounded-full animate-spin" />
                                            Processing...
                                        </div>
                                    ) : (
                                        <>
                                            {paymentMethod === 'paystack' ? "Purchase with Paystack" : "Complete Order"}
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 border border-white/5">
                                        <ShieldCheck className="w-4 h-4 text-green-400" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Secure SSL Encrypted</span>
                                    </div>
                                    <p className="text-[10px] text-center opacity-40 px-4 leading-relaxed font-medium">
                                        By clicking the button above, you agree to our terms of service and refund policy.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Link href="/dashboard/orders/new" className="block group">
                            <div className="p-6 rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-primary/30 hover:bg-primary/5 transition-all text-center">
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <Package className="w-6 h-6" />
                                </div>
                                <h4 className="font-black text-sm text-slate-800 dark:text-slate-100 uppercase tracking-tight">Need more data?</h4>
                                <p className="text-[10px] font-bold text-muted-foreground mt-1">Keep adding bundles to your cart</p>
                            </div>
                        </Link>
                    </div>
                    {paystackConfig && (
                        <PaystackPaymentProvider config={paystackConfig}>
                            {(initialize) => {
                                // Trigger immediately since paystackConfig was just set
                                initialize({
                                    onSuccess: (reference: any) => {
                                        const search = new URLSearchParams(reference).toString();
                                        router.push(`/dashboard/wallet/callback?${search}`);
                                    },
                                    onClose: () => {
                                        toast.info("Payment window closed.");
                                        setPaystackConfig(null);
                                    }
                                });
                                return null;
                            }}
                        </PaystackPaymentProvider>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
