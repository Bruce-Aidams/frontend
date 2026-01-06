"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowUpRight, History, Users, Wallet, Landmark, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Pagination } from "@/components/ui/pagination-custom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CommissionsPage() {
    const [balance, setBalance] = useState(0);
    const [commissions, setCommissions] = useState([]);
    const [payouts, setPayouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [payoutForm, setPayoutForm] = useState({
        amount: '',
        bank_name: '',
        account_number: '',
        account_name: '',
    });

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const fetchData = async (page = 1) => {
        setLoading(true);
        try {
            const userRes = await api.get('/user/me');
            setBalance(userRes.data.commission_balance || 0);

            const commRes = await api.get(`/referrals?page=${page}`);
            setCommissions(commRes.data.commissions?.data || []);
            setTotalPages(commRes.data.commissions?.last_page || 1);

            const payoutRes = await api.get('/payouts');
            setPayouts(payoutRes.data.data || []);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handlePayoutSubmit = async (e: any) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await api.post('/payouts', payoutForm);
            toast.success("Payout request submitted!");
            setPayoutForm({ amount: '', bank_name: '', account_number: '', account_name: '' });
            fetchData(currentPage);
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to submit payout request.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading && currentPage === 1) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">Affiliate Center</h2>
                    <p className="text-muted-foreground font-medium">Earn commissions by referring friends and family.</p>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="h-14 px-8 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            <Landmark className="w-5 h-5 mr-2" />
                            Withdraw Funds
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black tracking-tight">Withdraw Earnings</DialogTitle>
                            <DialogDescription className="font-bold">
                                Available Balance: <span className="text-primary">GHS {Number(balance).toFixed(2)}</span>
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handlePayoutSubmit} className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="amount" className="font-black uppercase text-[10px] tracking-widest pl-1">Amount to Withdraw</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    step="0.01"
                                    placeholder="0.00"
                                    value={payoutForm.amount}
                                    onChange={(e) => setPayoutForm({ ...payoutForm, amount: e.target.value })}
                                    className="h-12 rounded-xl border-slate-100 dark:border-slate-800"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bank_name" className="font-black uppercase text-[10px] tracking-widest pl-1">Bank / Mobile Money Name</Label>
                                <Input
                                    id="bank_name"
                                    placeholder="e.g. MTN MoMo, GCB Bank"
                                    value={payoutForm.bank_name}
                                    onChange={(e) => setPayoutForm({ ...payoutForm, bank_name: e.target.value })}
                                    className="h-12 rounded-xl border-slate-100 dark:border-slate-800"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="account_number" className="font-black uppercase text-[10px] tracking-widest pl-1">Account Number / Phone</Label>
                                <Input
                                    id="account_number"
                                    placeholder="024XXXXXXX"
                                    value={payoutForm.account_number}
                                    onChange={(e) => setPayoutForm({ ...payoutForm, account_number: e.target.value })}
                                    className="h-12 rounded-xl border-slate-100 dark:border-slate-800"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="account_name" className="font-black uppercase text-[10px] tracking-widest pl-1">Account Holder Name</Label>
                                <Input
                                    id="account_name"
                                    placeholder="Full Name"
                                    value={payoutForm.account_name}
                                    onChange={(e) => setPayoutForm({ ...payoutForm, account_name: e.target.value })}
                                    className="h-12 rounded-xl border-slate-100 dark:border-slate-800"
                                    required
                                />
                            </div>
                            <DialogFooter className="pt-4">
                                <Button type="submit" className="w-full h-12 rounded-xl font-black" disabled={submitting}>
                                    {submitting ? "Processing..." : "Submit Withdrawal Request"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none bg-primary text-primary-foreground rounded-[2rem] shadow-xl relative overflow-hidden group">
                    <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <DollarSign className="w-32 h-32" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] opacity-70">Commission Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black tracking-tighter">GHS {Number(balance).toFixed(2)}</div>
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none rounded-[2rem] shadow-sm relative overflow-hidden group">
                    <CardHeader>
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Total Earned</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black tracking-tighter text-slate-800 dark:text-slate-100">GHS {commissions.reduce((acc: any, curr: any) => acc + Number(curr.amount), 0).toFixed(2)}</div>
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none rounded-[2rem] shadow-sm relative overflow-hidden group">
                    <CardHeader>
                        <CardTitle className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Active Referrals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black tracking-tighter text-slate-800 dark:text-slate-100">{commissions.length} Users</div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <Card className="sneat-card border-none rounded-[2.5rem] overflow-hidden">
                    <CardHeader className="p-8 border-b border-white/10">
                        <CardTitle className="text-lg font-black tracking-tight flex items-center gap-2">
                            <History className="w-5 h-5 text-primary" /> Recent Commissions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-slate-50/50 dark:bg-slate-900/50 border-b border-white/10">
                                    <tr>
                                        <th className="px-6 py-4">From</th>
                                        <th className="px-6 py-4">Amount</th>
                                        <th className="px-6 py-4 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {commissions.length === 0 ? (
                                        <tr><td colSpan={3} className="px-6 py-12 text-center text-muted-foreground opacity-30 italic">No commissions yet.</td></tr>
                                    ) : commissions.map((comm: any) => (
                                        <tr key={comm.id} className="hover:bg-primary/5 transition-colors">
                                            <td className="px-6 py-4 font-bold">{comm.referred_user?.name || "Order #" + comm.order_id}</td>
                                            <td className="px-6 py-4 font-black text-emerald-600">+ GHS {Number(comm.amount).toFixed(2)}</td>
                                            <td className="px-6 py-4 text-right text-xs opacity-60">{new Date(comm.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none rounded-[2.5rem] overflow-hidden">
                    <CardHeader className="p-8 border-b border-white/10">
                        <CardTitle className="text-lg font-black tracking-tight flex items-center gap-2">
                            <Landmark className="w-5 h-5 text-primary" /> Payout History
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-slate-50/50 dark:bg-slate-900/50 border-b border-white/10">
                                    <tr>
                                        <th className="px-6 py-4">Ref</th>
                                        <th className="px-6 py-4">Amount</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {payouts.length === 0 ? (
                                        <tr><td colSpan={4} className="px-6 py-12 text-center text-muted-foreground opacity-30 italic">No payouts yet.</td></tr>
                                    ) : payouts.map((payout: any) => (
                                        <tr key={payout.id} className="hover:bg-primary/5 transition-colors">
                                            <td className="px-6 py-4 font-mono text-[10px] opacity-60">{payout.reference}</td>
                                            <td className="px-6 py-4 font-black">GHS {Number(payout.amount).toFixed(2)}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${payout.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                                                        payout.status === 'pending' ? 'bg-amber-100 text-amber-600' :
                                                            'bg-rose-100 text-rose-600'
                                                    }`}>
                                                    {payout.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right text-xs opacity-60">{new Date(payout.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
