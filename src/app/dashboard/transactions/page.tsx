"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { History, ArrowDownRight, ArrowUpRight, Search, Filter, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Transaction {
    id: number;
    reference: string;
    type: string;
    amount: number;
    description?: string;
    status: string;
    created_at: string;
}

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                // The backend currently returns transactions as part of the wallet route
                const res = await api.get<{ transactions: { data: Transaction[] } }>('/wallet');
                setTransactions(res.data.transactions.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Transaction History</h2>
                    <p className="text-muted-foreground font-medium">A complete record of all your account activities.</p>
                </div>
            </div>

            <Card className="sneat-card overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search by reference..."
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl flex items-center gap-2 px-3 text-xs font-bold text-muted-foreground cursor-pointer border border-transparent hover:border-primary/20 transition-all">
                                <Calendar className="w-4 h-4" />
                                Custom Range
                            </div>
                            <div className="bg-primary/10 p-2 rounded-xl flex items-center gap-2 px-3 text-xs font-bold text-primary cursor-pointer border border-primary/20 transition-all">
                                <Filter className="w-4 h-4" />
                                All Types
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-[10px] text-muted-foreground uppercase bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Reference</th>
                                    <th className="px-6 py-4">Details</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4 font-bold text-primary">Balance After</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {loading ? (
                                    Array(5).fill(0).map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={6} className="px-6 py-4">
                                                <div className="h-6 bg-gray-100 dark:bg-gray-800 rounded-lg w-full"></div>
                                            </td>
                                        </tr>
                                    ))
                                ) : transactions.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-20 text-center">
                                            <History className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                                            <p className="text-muted-foreground font-medium">No transactions recorded yet.</p>
                                        </td>
                                    </tr>
                                ) : transactions.map((trx) => (
                                    <tr key={trx.id} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center shadow-sm",
                                                trx.type === 'credit' ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                                            )}>
                                                {trx.type === 'credit' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-mono text-xs font-bold text-primary">#{trx.reference}</p>
                                            <p className="text-[10px] text-muted-foreground mt-0.5">ID: {trx.id}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-gray-900 dark:text-gray-100">{trx.description || (trx.type === 'credit' ? 'Wallet Topup' : 'Bundle Purchase')}</p>
                                            <span className={cn(
                                                "text-[9px] font-bold uppercase px-1.5 py-0.5 rounded",
                                                trx.status === 'completed' || trx.status === 'success' ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                                            )}>
                                                {trx.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "font-bold text-lg",
                                                trx.type === 'credit' ? "text-green-600" : "text-red-600"
                                            )}>
                                                {trx.type === 'credit' ? '+' : '-'} GHS {trx.amount}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-gray-400">---</td>
                                        <td className="px-6 py-4 text-muted-foreground text-xs font-medium">
                                            {new Date(trx.created_at).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
