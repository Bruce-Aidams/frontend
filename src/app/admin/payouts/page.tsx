"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark, Check, X, AlertCircle, Loader2, User } from "lucide-react";
import { toast } from "sonner";
import { Pagination } from "@/components/ui/pagination-custom";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AdminPayoutsPage() {
    const [payouts, setPayouts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [selectedPayout, setSelectedPayout] = useState<any>(null);
    const [adminNote, setAdminNote] = useState("");
    const [action, setAction] = useState<"completed" | "rejected" | null>(null);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        fetchPayouts(currentPage);
    }, [currentPage]);

    const fetchPayouts = async (page = 1) => {
        setLoading(true);
        try {
            const res = await api.get(`/admin/payouts?page=${page}`);
            setPayouts(res.data.data);
            setTotalPages(res.data.last_page);
        } catch (e) {
            toast.error("Failed to load payouts.");
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async () => {
        if (!selectedPayout || !action) return;
        setUpdating(true);
        try {
            await api.put(`/admin/payouts/${selectedPayout.id}`, {
                status: action,
                admin_note: adminNote
            });
            toast.success(`Payout ${action} successfully!`);
            setSelectedPayout(null);
            setAdminNote("");
            fetchPayouts(currentPage);
        } catch (e) {
            toast.error("Failed to update payout status.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading && currentPage === 1) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">Payout Requests</h2>
                    <p className="text-muted-foreground font-medium">Manage user withdrawal requests.</p>
                </div>
            </div>

            <Card className="sneat-card border-none rounded-[2.5rem] overflow-hidden">
                <CardHeader className="p-8 border-b border-white/10">
                    <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
                        <Landmark className="w-6 h-6 text-primary" /> Pending & Recent Payouts
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-slate-50/50 dark:bg-slate-900/50 border-b border-white/10">
                                <tr>
                                    <th className="px-6 py-4">User</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Bank Details</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                {payouts.length === 0 ? (
                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground opacity-30 italic">No payout requests found.</td></tr>
                                ) : payouts.map((payout: any) => (
                                    <tr key={payout.id} className="hover:bg-primary/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                    <User className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 dark:text-slate-200">{payout.user?.name}</p>
                                                    <p className="text-[10px] opacity-60 uppercase font-black">{payout.user?.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-lg font-black tracking-tighter">GHS {Number(payout.amount).toFixed(2)}</p>
                                            <p className="text-[10px] opacity-40 uppercase font-black">{payout.reference}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-xs">{payout.bank_name}</p>
                                            <p className="text-sm font-black text-primary">{payout.account_number}</p>
                                            <p className="text-[10px] opacity-60 font-medium italic">{payout.account_name}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${payout.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                                                    payout.status === 'pending' ? 'bg-amber-100 text-amber-600' :
                                                        payout.status === 'rejected' ? 'bg-rose-100 text-rose-600' :
                                                            'bg-blue-100 text-blue-600'
                                                }`}>
                                                {payout.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {payout.status === 'pending' || payout.status === 'processing' ? (
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="text-emerald-500 hover:bg-emerald-50 rounded-xl"
                                                        onClick={() => { setSelectedPayout(payout); setAction("completed"); }}
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="text-rose-500 hover:bg-rose-50 rounded-xl"
                                                        onClick={() => { setSelectedPayout(payout); setAction("rejected"); }}
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            ) : (
                                                <p className="text-[10px] font-black opacity-30 uppercase tracking-widest">{new Date(payout.updated_at).toLocaleDateString()}</p>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </CardContent>
            </Card>

            <Dialog open={!!selectedPayout} onOpenChange={(o) => !o && setSelectedPayout(null)}>
                <DialogContent className="rounded-[2.5rem] border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black">
                            {action === 'completed' ? 'Approve' : 'Reject'} Payout Request
                        </DialogTitle>
                        <DialogDescription className="font-bold">
                            Are you sure you want to {action} this payout of <span className="text-primary font-black">GHS {Number(selectedPayout?.amount).toFixed(2)}</span>?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="note" className="font-black uppercase text-[10px] tracking-widest pl-1">Admin Note (Optional)</Label>
                            <Textarea
                                id="note"
                                placeholder="Add a note for the user..."
                                value={adminNote}
                                onChange={(e) => setAdminNote(e.target.value)}
                                className="rounded-xl border-slate-100 dark:border-slate-800"
                            />
                        </div>
                        {action === 'completed' && (
                            <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20">
                                <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                                <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
                                    Ensure you have manually transferred the funds to the user's account before marking as completed.
                                </p>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setSelectedPayout(null)} className="rounded-xl font-black">Cancel</Button>
                        <Button
                            onClick={handleAction}
                            disabled={updating}
                            className={`rounded-xl px-8 font-black ${action === 'completed' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'}`}
                        >
                            {updating ? "Processing..." : `Confirm ${action}`}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
