"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ArrowDownLeft,
    ArrowUpRight,
    Search,
    MoreHorizontal,
    FileText,
    User,
    CreditCard,
    Filter,
    ArrowRight,
    TrendingUp,
    TrendingDown,
    Activity,
    Download,
    FileJson,
    Sheet,
    X
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { InvoiceDialog } from "@/components/admin/InvoiceDialog";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface Transaction {
    id: number;
    order_id: number | null;
    reference: string;
    amount: number;
    type: 'credit' | 'debit';
    status: string;
    description: string;
    created_at: string;
    user?: {
        name: string;
        email: string;
    };
}

export default function AdminTransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>(null);
    const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
    const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

    const [selectedTrx, setSelectedTrx] = useState<Transaction | null>(null);

    useEffect(() => {
        api.get('/admin/transactions')
            .then(res => setTransactions(res.data.data))
            .catch(err => {
                console.error(err);
                toast.error("Failed to fetch transactions");
            })
            .finally(() => setLoading(false));
    }, []);

    const filteredTransactions = transactions.filter(t => {
        const matchesSearch =
            t.reference?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.user?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.user?.email?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = typeFilter ? t.type === typeFilter : true;
        const matchesStatus = statusFilter ? t.status === statusFilter : true;

        return matchesSearch && matchesType && matchesStatus;
    });

    const inflow = transactions.filter(t => t.type === 'credit' && t.status === 'success').reduce((acc, t) => acc + Number(t.amount), 0);
    const outflow = transactions.filter(t => t.type === 'debit' && t.status === 'success').reduce((acc, t) => acc + Number(t.amount), 0);

    const exportData = (formatType: 'csv' | 'json') => {
        if (filteredTransactions.length === 0) {
            toast.error("No data to export");
            return;
        }

        if (formatType === 'json') {
            const blob = new Blob([JSON.stringify(filteredTransactions, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `transactions_${format(new Date(), 'yyyy-MM-dd')}.json`;
            a.click();
            URL.revokeObjectURL(url);
            toast.success("JSON Exported successfully");
        } else {
            const headers = ['Date', 'Reference', 'Customer', 'Email', 'Type', 'Amount', 'Status', 'Description'];
            const csvContent = [
                headers.join(','),
                ...filteredTransactions.map(t => [
                    format(new Date(t.created_at), 'yyyy-MM-dd HH:mm'),
                    t.reference,
                    t.user?.name || 'Unknown',
                    t.user?.email || 'N/A',
                    t.type,
                    Number(t.amount).toFixed(2),
                    t.status,
                    `"${t.description.replace(/"/g, '""')}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `transactions_${format(new Date(), 'yyyy-MM-dd')}.csv`;
            a.click();
            URL.revokeObjectURL(url);
            toast.success("CSV/Excel Exported successfully");
        }
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">Financial Matrix</h2>
                    <p className="text-slate-500 font-medium">Tracking every digital pesewa across the ecosystem.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Find reference, user, or desc..."
                            className="pl-11 h-12 bg-white dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="h-12 rounded-2xl border-slate-200 dark:border-slate-800 font-bold px-6 gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 rounded-2xl border-none shadow-2xl p-2">
                            <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest text-slate-400">Export Formats</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => exportData('csv')} className="rounded-xl gap-3 font-bold cursor-pointer italic px-4 py-3">
                                <Sheet className="w-4 h-4 text-emerald-500" /> Excel / CSV
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => exportData('json')} className="rounded-xl gap-3 font-bold cursor-pointer italic px-4 py-3">
                                <FileJson className="w-4 h-4 text-indigo-500" /> JSON Format
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Micro Stats */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900/50 rounded-[2rem] p-6 flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                        <TrendingUp className="w-7 h-7" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Inflow</p>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">₵ {inflow.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
                    </div>
                </Card>
                <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900/50 rounded-[2rem] p-6 flex items-center gap-5">
                    <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0">
                        <TrendingDown className="w-7 h-7" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Outflow</p>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">₵ {outflow.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
                    </div>
                </Card>
                <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-indigo-600 text-white rounded-[2rem] p-6 flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md">
                        <Activity className="w-7 h-7" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Net Volume</p>
                        <h3 className="text-2xl font-black">₵ {(inflow - outflow).toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
                    </div>
                </Card>
            </div>

            <Card className="sneat-card border-none shadow-2xl shadow-slate-200/50 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden">
                <CardHeader className="p-8 border-b border-slate-50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <CardTitle className="text-xl font-black">Detailed Ledgers</CardTitle>
                            <CardDescription>Auditable history of all system movements.</CardDescription>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                                {['credit', 'debit'].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTypeFilter(typeFilter === t ? null : t)}
                                        className={cn(
                                            "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                            typeFilter === t ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                                {['success', 'failed', 'pending'].map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setStatusFilter(statusFilter === s ? null : s)}
                                        className={cn(
                                            "px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                                            statusFilter === s ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"
                                        )}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 border-none">
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Transaction Info</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Associated User</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Movement</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Value</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    [...Array(5)].map((_, i) => (
                                        <TableRow key={i} className="animate-pulse border-slate-50 dark:border-slate-800">
                                            <TableCell colSpan={6} className="h-20"><div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded-xl" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : filteredTransactions.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-20 text-slate-400 italic">Financial record empty.</TableCell>
                                    </TableRow>
                                ) : (
                                    filteredTransactions.map((trx) => (
                                        <TableRow key={trx.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all border-slate-100 dark:border-slate-800">
                                            <TableCell className="px-8 py-6">
                                                <div className="flex flex-col">
                                                    <span className="font-mono text-[10px] font-black text-slate-300 group-hover:text-primary transition-colors">{trx.reference || 'SYSTEM_GEN'}</span>
                                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[180px]">{trx.description}</span>
                                                    <span className="text-[9px] font-medium text-slate-400">{format(new Date(trx.created_at), 'MMM dd, HH:mm')}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-10 w-10 border-2 border-white dark:border-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 group-hover:ring-primary/30 transition-all">
                                                        <AvatarFallback className="bg-slate-100 text-slate-600 font-black text-xs uppercase">
                                                            {trx.user?.name.charAt(0) || 'U'}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-slate-900 dark:text-white leading-tight">{trx.user?.name || 'Customer'}</span>
                                                        <span className="text-[10px] font-medium text-slate-400 leading-tight">{trx.user?.email}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <div className={cn(
                                                    "inline-flex items-center gap-2 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest",
                                                    trx.type === 'credit' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                                                )}>
                                                    {trx.type === 'credit' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownLeft className="w-3.5 h-3.5" />}
                                                    {trx.type}
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <span className={cn(
                                                    "text-lg font-black tracking-tight",
                                                    trx.type === 'credit' ? "text-emerald-600" : "text-slate-900 dark:text-white"
                                                )}>
                                                    {trx.type === 'credit' ? '+' : '-'} ₵ {Number(trx.amount).toFixed(2)}
                                                </span>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <Badge variant="outline" className={cn(
                                                    "rounded-full px-3 py-0.5 border shadow-none font-black text-[10px] uppercase tracking-widest",
                                                    trx.status === 'success' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/30' :
                                                        trx.status === 'failed' ? 'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/30' : 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/30'
                                                )}>
                                                    {trx.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-10 w-10 p-0 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800">
                                                            <MoreHorizontal className="h-5 w-5" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-[1.5rem] border-none shadow-2xl">
                                                        <DropdownMenuLabel className="font-black text-[10px] uppercase tracking-widest text-slate-400">Treasury View</DropdownMenuLabel>
                                                        <DropdownMenuSeparator className="opacity-50" />
                                                        <DropdownMenuItem
                                                            disabled={!trx.order_id}
                                                            onClick={() => {
                                                                setSelectedOrderId(trx.order_id);
                                                                setIsInvoiceOpen(true);
                                                            }}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer"
                                                        >
                                                            <FileText className="w-4 h-4 text-emerald-500" />
                                                            View Order Invoice
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer">
                                                            <User className="w-4 h-4 text-primary" />
                                                            Customer Profile
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => setSelectedTrx(trx)}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer"
                                                        >
                                                            <CreditCard className="w-4 h-4 text-indigo-500" />
                                                            Payment Details
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <InvoiceDialog
                orderId={selectedOrderId}
                open={isInvoiceOpen}
                onOpenChange={setIsInvoiceOpen}
            />

            {/* Payment Details Modal */}
            <AnimatePresence>
                {selectedTrx && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-black">Transaction Audit</h3>
                                    <p className="text-xs text-slate-500 font-medium">Source data from gateway/system</p>
                                </div>
                                <Button variant="ghost" className="rounded-2xl h-12 w-12" onClick={() => setSelectedTrx(null)}>
                                    <X className="w-6 h-6" />
                                </Button>
                            </div>
                            <div className="p-8 max-h-[60vh] overflow-auto">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                            <p className="text-[10px] font-black uppercase text-slate-400">Reference</p>
                                            <p className="font-mono text-sm font-bold">{selectedTrx.reference}</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                                            <p className="text-[10px] font-black uppercase text-slate-400">Status</p>
                                            <Badge className="mt-1">{selectedTrx.status}</Badge>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Raw Metadata</p>
                                        <pre className="p-4 bg-slate-900 text-emerald-400 rounded-2xl text-xs font-mono overflow-auto h-64">
                                            {JSON.stringify((selectedTrx as any).metadata, null, 2)}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                                <Button variant="secondary" className="rounded-xl px-8" onClick={() => setSelectedTrx(null)}>Close Audit</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
