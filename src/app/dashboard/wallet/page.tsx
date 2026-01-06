"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";

import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wallet, ArrowDownRight, ArrowUpRight, ArrowRight, History, CreditCard, ShieldCheck, Landmark, Upload, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const PaystackPaymentProvider = dynamic(() => import('@/components/payment/PaystackPaymentProvider'), { ssr: false });

import { Pagination } from "@/components/ui/pagination-custom";

interface Transaction {
    id: number;
    reference: string;
    type: string;
    amount: number;
    description?: string;
    status: string;
    created_at: string;
}

export default function WalletPage() {
    const router = useRouter();
    const [balance, setBalance] = useState(0);

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [amount, setAmount] = useState("");
    const [manualAmount, setManualAmount] = useState("");
    const [proofFile, setProofFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [pageLoading, setPageLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [publicSettings, setPublicSettings] = useState<any>(null);

    useEffect(() => {
        const fetchWallet = async (page = 1) => {
            setLoading(true);
            try {
                // Add cache-busting timestamp to prevent stale data
                const res = await api.get<{ balance: number; transactions: { data: Transaction[], last_page: number } }>(`/wallet?page=${page}&_t=${Date.now()}`);
                setBalance(res.data.balance);
                setTransactions(res.data.transactions.data);
                setTotalPages(res.data.transactions.last_page);
            } catch (e) {
                console.error(e);
            } finally {
                setPageLoading(false);
                setLoading(false);
            }
        };

        const fetchSettings = async () => {
            try {
                const res = await api.get('/settings/public');
                setPublicSettings(res.data);
            } catch (e) {
                console.error("Failed to fetch settings", e);
            }
        };

        fetchWallet(currentPage);
        fetchSettings();
    }, [currentPage]);

    useEffect(() => {
        router.refresh(); // Invalidate Next.js client cache on mount
    }, [router]);

    const chargeInfo = useMemo(() => {
        if (!publicSettings || !amount || isNaN(parseFloat(amount))) return { amount: 0, total: 0 };
        const base = parseFloat(amount);
        const type = publicSettings.charge_type;
        const value = parseFloat(publicSettings.charge_value || "0");
        let charge = 0;
        if (type === 'percentage') {
            charge = base * (value / 100);
        } else {
            charge = value;
        }
        return { amount: charge, total: base + charge };
    }, [publicSettings, amount]);

    const config: any = {
        reference: (new Date()).getTime().toString(),
        email: JSON.parse(localStorage.getItem('user') || '{}').email,
        amount: Math.round(chargeInfo.total * 100), // Paystack needs amount in Pesewas (kobo/cents equivalent)
        publicKey: publicSettings?.paystack_public || '',
        currency: 'GHS',
    };

    // config moved inside the provider wrapper

    const onSuccess = (reference: any) => {
        // Redirect to callback for verification
        const search = new URLSearchParams(reference).toString();
        router.push(`/dashboard/wallet/callback?${search}`);
    };

    const onClose = () => {
        toast.info("Payment cancelled.");
    };

    const handleManualDeposit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!proofFile) {
            toast.error("Please upload proof of payment.");
            return;
        }

        setUploading(true);
        const loadingToast = toast.loading("Submitting your deposit request...");

        try {
            const formData = new FormData();
            formData.append('amount', manualAmount);
            formData.append('proof_image', proofFile);

            await api.post('/deposits', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            toast.success("Deposit request submitted successfully! Pending admin approval.", { id: loadingToast });
            setManualAmount("");
            setProofFile(null);
            // Optionally refresh transactions or status
        } catch (error: any) {
            const message = error.response?.data?.message || "Failed to submit deposit request.";
            toast.error(message, { id: loadingToast });
        } finally {
            setUploading(false);
        }
    };



    if (pageLoading) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-muted-foreground font-medium animate-pulse">Loading wallet information...</p>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen max-w-full overflow-x-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-10 relative z-10"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">My Wallet</h2>
                        <p className="text-muted-foreground font-medium">Manage your funds and view transaction history.</p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <Card className="border-none bg-primary text-primary-foreground overflow-hidden relative shadow-2xl shadow-primary/30 rounded-[2.5rem] group min-h-[250px]">

                        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                            <Wallet className="w-64 h-64" />
                        </div>
                        <CardHeader className="pt-10 px-10">
                            <CardTitle className="text-xs font-black uppercase tracking-[0.3em] opacity-70">Total Net Balance</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 px-10 pb-12">
                            <div className="text-5xl sm:text-7xl font-black tracking-tighter drop-shadow-sm">GHS {Number(balance).toFixed(2)}</div>

                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md w-fit px-5 py-2 rounded-2xl border border-white/10 shadow-lg">
                                <ShieldCheck className="w-4 h-4 text-sky-300" />
                                <span className="text-[10px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/20 dark:ring-slate-800/50 rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-xl dark:bg-slate-900/40">
                        <CardHeader className="pt-10 px-10">
                            <CardTitle className="text-2xl font-black tracking-tight text-slate-800 dark:text-slate-100">Add Funds</CardTitle>
                            <CardDescription className="font-bold text-slate-500/80">Refill your balance instantly via Paystack</CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 pb-10">
                            <Tabs defaultValue="instant" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-8 h-12 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                                    <TabsTrigger value="instant" className="rounded-lg font-bold transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">
                                        <CreditCard className="w-4 h-4 mr-2" /> Instant
                                    </TabsTrigger>
                                    <TabsTrigger value="manual" className="rounded-lg font-bold transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">
                                        <Landmark className="w-4 h-4 mr-2" /> Manual
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="instant">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="amount" className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-1">Amount to Credit</Label>
                                            <div className="relative group">
                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400 group-focus-within:text-primary transition-colors">GHS</span>
                                                <Input
                                                    id="amount"
                                                    type="number"
                                                    placeholder="0.00"
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                    required
                                                    min={publicSettings?.min_payment || "1"}
                                                    max={publicSettings?.max_payment || "100000"}
                                                    className="h-16 pl-16 text-2xl font-black bg-slate-50 dark:bg-slate-900 border-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl transition-all"
                                                />
                                            </div>
                                            {publicSettings && (
                                                <div className="flex flex-col gap-2 px-1">
                                                    <div className="flex justify-between">
                                                        <p className={cn(
                                                            "text-[10px] font-bold italic",
                                                            (amount && (parseFloat(amount) < publicSettings.min_payment || parseFloat(amount) > publicSettings.max_payment))
                                                                ? "text-rose-500 animate-pulse"
                                                                : "text-muted-foreground"
                                                        )}>
                                                            Min: GHS {publicSettings.min_payment} | Max: GHS {publicSettings.max_payment}
                                                        </p>
                                                        {amount && parseFloat(amount) > 0 && (
                                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">
                                                                Valid Amount
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Paystack Test Mode Helper */}
                                                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 p-3 rounded-xl flex items-start gap-3 mt-2">
                                                        <ShieldCheck className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">Test Mode Active</p>
                                                            <p className="text-[10px] font-medium text-amber-600/80 leading-relaxed">
                                                                For testing, use the number <span className="font-bold underline">0551234567</span> with any 6-digit PIN. Non-test numbers will be declined by Paystack.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                        <AnimatePresence>
                                            {chargeInfo.amount > 0 && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="p-6 bg-primary/5 rounded-3xl space-y-3 border border-primary/10 backdrop-blur-sm"
                                                >
                                                    <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em]">
                                                        <span className="text-slate-500">Gateway Fee</span>
                                                        <span className="text-primary">+ GHS {chargeInfo.amount.toFixed(2)}</span>
                                                    </div>
                                                    <div className="flex justify-between items-end pt-4 border-t border-primary/10">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pb-1">Total Debit</span>
                                                        <span className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tighter">GHS {chargeInfo.total?.toFixed(2)}</span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <PaystackPaymentProvider config={config}>
                                            {(initializePayment) => (
                                                <Button
                                                    type="button"
                                                    disabled={loading || !amount || parseFloat(amount) < (publicSettings?.min_payment || 1) || parseFloat(amount) > (publicSettings?.max_payment || 100000)}
                                                    onClick={() => {

                                                        if (!publicSettings?.paystack_public) {
                                                            toast.error("Payment system not configured correctly. Please contact support.");
                                                            return;
                                                        }
                                                        initializePayment({ onSuccess, onClose });
                                                    }}
                                                    className="w-full h-14 shadow-xl shadow-primary/20 rounded-2xl font-black text-lg hover:translate-y-[-2px] transition-all"
                                                >
                                                    {loading ? (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                            Wait...
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <CreditCard className="w-5 h-5 mr-2" />
                                                            Continue to Payment
                                                        </>
                                                    )}
                                                </Button>
                                            )}
                                        </PaystackPaymentProvider>
                                    </div>
                                </TabsContent>

                                <TabsContent value="manual">
                                    <form onSubmit={handleManualDeposit} className="space-y-6">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Bank Details</h4>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Bank Name</p>
                                                    <p className="font-bold">{publicSettings?.bank_name || 'N/A'}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Account Name</p>
                                                    <p className="font-bold">{publicSettings?.bank_account_name || 'N/A'}</p>
                                                </div>
                                                <div className="col-span-2 space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
                                                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Account Number</p>
                                                    <p className="font-mono text-lg font-black tracking-widest text-primary">{publicSettings?.bank_account_number || 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="manualAmount" className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-1">Amount Sent</Label>
                                            <div className="relative group">
                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-slate-400 group-focus-within:text-primary transition-colors">GHS</span>
                                                <Input
                                                    id="manualAmount"
                                                    type="number"
                                                    placeholder="0.00"
                                                    value={manualAmount}
                                                    onChange={(e) => setManualAmount(e.target.value)}
                                                    required
                                                    className="h-16 pl-16 text-2xl font-black bg-slate-50 dark:bg-slate-900 border-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-2xl transition-all"
                                                />
                                            </div>
                                            {publicSettings && (
                                                <p className={cn(
                                                    "text-[10px] font-bold italic px-1 mt-1",
                                                    (manualAmount && (parseFloat(manualAmount) < publicSettings.min_payment || parseFloat(manualAmount) > publicSettings.max_payment))
                                                        ? "text-rose-500 animate-pulse"
                                                        : "text-muted-foreground"
                                                )}>
                                                    Minimum: GHS {publicSettings.min_payment}
                                                </p>
                                            )}
                                        </div>


                                        <div className="space-y-2">
                                            <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground pl-1">Proof of Transfer</Label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => setProofFile(e.target.files?.[0] || null)}
                                                    className="hidden"
                                                    id="proof-upload"
                                                    required
                                                />
                                                <label
                                                    htmlFor="proof-upload"
                                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl hover:border-primary transition-colors cursor-pointer bg-slate-50/50 dark:bg-slate-900/30"
                                                >
                                                    {proofFile ? (
                                                        <div className="flex items-center gap-2 text-primary font-bold">
                                                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                                            {proofFile.name}
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-2 text-slate-400">
                                                            <Upload className="w-8 h-8 opacity-50" />
                                                            <p className="text-[10px] font-black uppercase tracking-widest">Tap to upload proof</p>
                                                        </div>
                                                    )}
                                                </label>
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={uploading || !manualAmount || parseFloat(manualAmount) < (publicSettings?.min_payment || 1)}
                                            className="w-full h-14 shadow-xl shadow-primary/20 rounded-2xl font-black text-lg"
                                        >
                                            {uploading ? "Submitting..." : "Submit Proof"}
                                        </Button>

                                    </form>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/20 dark:ring-slate-800/50 rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-xl dark:bg-slate-900/40">
                    <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8 bg-white/30 dark:bg-slate-900/30 border-b border-white/20 dark:border-slate-800/50">
                        <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <History className="w-5 h-5" />
                            </div>
                            Transaction Logs
                        </CardTitle>
                        <Button asChild variant="ghost" size="sm" className="font-black uppercase tracking-widest text-[10px] hover:bg-primary/10 rounded-xl">
                            <Link href="/dashboard/transactions">Extended History <ArrowRight className="w-3 h-3 ml-2" /></Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left border-collapse">
                                <thead className="text-[10px] text-muted-foreground uppercase bg-slate-50/30 dark:bg-slate-800/30 border-b border-white/20 dark:border-slate-800/50">
                                    <tr>
                                        <th className="px-8 py-5 font-black tracking-widest">Type</th>
                                        <th className="px-8 py-5 font-black tracking-widest hidden sm:table-cell">Reference ID</th>
                                        <th className="px-8 py-5 font-black tracking-widest">Details</th>
                                        <th className="px-8 py-5 font-black tracking-widest text-right">Value</th>
                                        <th className="px-8 py-5 font-black tracking-widest text-right hidden md:table-cell">Timestamp</th>
                                    </tr>

                                </thead>
                                <tbody className="divide-y divide-slate-100/50 dark:divide-slate-800/50">
                                    {transactions.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-8 py-32 text-center">
                                                <div className="flex flex-col items-center gap-4 opacity-20">
                                                    <History className="w-20 h-20" />
                                                    <p className="font-black uppercase tracking-[0.2em] text-sm">Quiet as a mouse</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : transactions.slice(0, 5).map((trx) => (
                                        <tr key={trx.id} className="hover:bg-primary/[0.02] transition-colors group/row">
                                            <td className="px-8 py-6">
                                                <div className={cn(
                                                    "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover/row:scale-110 shadow-sm",
                                                    trx.type === 'credit' ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                                                )}>
                                                    {trx.type === 'credit' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 hidden sm:table-cell">
                                                <p className="font-mono text-xs font-black text-slate-400 tracking-tighter group-hover/row:text-primary transition-colors uppercase">{trx.reference.split('-')[0]}</p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="font-black text-slate-800 dark:text-slate-200 tracking-tight">{trx.description || (trx.type === 'credit' ? 'Inward Transfer' : 'Bundle Settlement')}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse",
                                                        trx.status === 'success' ? "bg-emerald-500" : trx.status === 'pending' ? "bg-amber-500" : "bg-rose-500"
                                                    )} />
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{trx.status}</p>
                                                </div>
                                                <p className="text-[10px] font-bold text-slate-400 mt-1 md:hidden">
                                                    {new Date(trx.created_at).toLocaleDateString()}
                                                </p>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <span className={cn(
                                                    "font-black text-sm sm:text-xl tracking-tighter",
                                                    trx.type === 'credit' ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"
                                                )}>
                                                    {trx.type === 'credit' ? '+' : '-'} ₵{Number(trx.amount).toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right hidden md:table-cell">
                                                <p className="font-bold text-slate-400 text-sm">{new Date(trx.created_at).toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">{new Date(trx.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            isLoading={loading}
                        />
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
