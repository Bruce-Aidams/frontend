"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Printer, Download, Package, CreditCard, ShieldCheck, Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Order {
    id: number;
    reference: string;
    recipient_phone: string;
    cost: number;
    status: string;
    created_at: string;
    user: {
        name: string;
        email: string;
    };
    bundle: {
        name: string;
        network: string;
        price: number;
    };
}

interface InvoiceDialogProps {
    orderId: number | string | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function InvoiceDialog({ orderId, open, onOpenChange }: InvoiceDialogProps) {
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (open && orderId) {
            setLoading(true);
            api.get(`/admin/orders/${orderId}`)
                .then(res => setOrder(res.data))
                .catch(err => console.error("Failed to fetch order for invoice", err))
                .finally(() => setLoading(false));
        } else {
            setOrder(null);
        }
    }, [open, orderId]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
                <DialogHeader className="sr-only">
                    <DialogTitle>Invoice Details</DialogTitle>
                    <DialogDescription>Viewing transaction details for {orderId}</DialogDescription>
                </DialogHeader>
                <div className="max-h-[85vh] overflow-y-auto scrollbar-hide">
                    {loading ? (
                        <div className="p-20 flex flex-col items-center justify-center gap-4">
                            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                            <p className="text-muted-foreground font-bold animate-pulse">Generating Invoice...</p>
                        </div>
                    ) : order ? (
                        <div id="invoice-content" className="bg-white dark:bg-slate-950 p-6 sm:p-12 space-y-10 relative">
                            {/* Actions Header (hidden on print) */}
                            <div className="flex items-center justify-between print:hidden mb-4">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white">Tax Invoice</h3>
                                    <p className="text-xs text-muted-foreground">Reference: {order.reference}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={handlePrint} className="rounded-xl border-slate-200 dark:border-slate-800">
                                        <Printer className="w-4 h-4 mr-2" /> Print
                                    </Button>
                                    <Button size="sm" className="rounded-xl shadow-lg shadow-primary/20">
                                        <Download className="w-4 h-4 mr-2" /> Export
                                    </Button>
                                </div>
                            </div>

                            {/* Header Section */}
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary/20">
                                            M
                                        </div>
                                        <div>
                                            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white block leading-none">CloudTech</span>
                                            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-primary">Data Market</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5 text-slate-500 text-sm font-medium">
                                        <p className="flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> help.CloudTech.com</p>
                                        <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> support@CloudTech.com</p>
                                        <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> +233 (0) 555-MEGA-AI</p>
                                    </div>
                                </div>
                                <div className="text-left sm:text-right space-y-3">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Invoice Number</p>
                                        <p className="text-xl font-black text-primary font-mono lowercase">{order.reference}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Issue Date</p>
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{format(new Date(order.created_at), "MMMM dd, yyyy")}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Billing Section */}
                            <div className="grid sm:grid-cols-2 gap-10 py-10 border-t border-slate-100 dark:border-slate-800">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Bill To</p>
                                    <div className="space-y-1">
                                        <p className="font-black text-2xl text-slate-900 dark:text-white">{order.user.name}</p>
                                        <p className="text-sm font-semibold text-slate-500">{order.user.email}</p>
                                        <p className="text-xs text-slate-400">Customer ID: {order.user.email.split('@')[0]}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 sm:text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Payment Information</p>
                                    <div className="space-y-2">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl text-xs font-black ring-1 ring-emerald-500/10 uppercase tracking-widest">
                                            <ShieldCheck className="w-4 h-4" />
                                            {order.status}
                                        </div>
                                        <p className="text-xs font-medium text-slate-500">Method: Wallet Balance</p>
                                    </div>
                                </div>
                            </div>

                            {/* Items Table */}
                            <div className="rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-2xl shadow-slate-100/50 dark:shadow-none bg-slate-50/50 dark:bg-slate-900/30">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-900 text-white uppercase text-[10px] font-black tracking-widest">
                                        <tr>
                                            <th className="px-8 py-5 text-left">Product Details</th>
                                            <th className="px-8 py-5 text-center">Qty</th>
                                            <th className="px-8 py-5 text-right">Unit Price</th>
                                            <th className="px-8 py-5 text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr>
                                            <td className="px-8 py-10">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-sm">
                                                        <Package className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="font-black text-slate-900 dark:text-white text-lg">{order.bundle.name} Data</p>
                                                        <p className="text-xs font-bold text-slate-500 italic">Recipient: {order.recipient_phone}</p>
                                                        <div className="pt-2">
                                                            <Badge variant="outline" className="rounded-lg border-gray-200 text-[10px] font-black text-primary uppercase">{order.bundle.network}</Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-10 text-center font-black text-slate-900 dark:text-white text-lg">1</td>
                                            <td className="px-8 py-10 text-right font-bold text-slate-500">₵ {Number(order.bundle.price).toFixed(2)}</td>
                                            <td className="px-8 py-10 text-right font-black text-slate-900 dark:text-white text-xl">₵ {Number(order.cost).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot className="bg-slate-900/5 dark:bg-slate-800/50">
                                        <tr>
                                            <td colSpan={3} className="px-8 py-8 text-right">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">Total Amount Due</p>
                                                    <p className="text-sm font-bold text-slate-500">Including VAT & Fees</p>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8 text-right">
                                                <div className="space-y-0.5">
                                                    <p className="text-3xl font-black text-primary tracking-tighter decoration-primary/20 underline underline-offset-8">₵ {Number(order.cost).toFixed(2)}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            {/* Terms & Footer */}
                            <div className="pt-8 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Terms & Conditions</p>
                                        <p className="text-[10px] leading-relaxed text-slate-500 font-medium">
                                            This is a digital receipt generated by CloudTech Systems. The services listed above were provided electronically. Please retain this for your records. No physical delivery required.
                                        </p>
                                    </div>
                                    <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <CreditCard className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Secured Payment</p>
                                            <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">Transaction authorized via 256-bit encryption.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center pt-8">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 dark:text-slate-700">
                                        &copy; {new Date().getFullYear()} MEGA-AI LTD &bull; ACCRA GHANA
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-20 text-center text-red-500 font-black">UNABLE TO REACH CORE SERVER</div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
