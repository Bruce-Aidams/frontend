"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Printer, Download, ArrowLeft, Package, User, Calendar, CreditCard, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function InvoicePage() {
    const params = useParams() as { id: string };
    const id = params.id;
    const router = useRouter();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/orders/${id}`).then(res => {
            setOrder(res.data);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [id]);

    const handlePrint = () => {
        window.print();
    };

    if (loading) return <div className="p-10 animate-pulse">Loading invoice...</div>;
    if (!order) return <div className="p-10 text-center">Invoice not found.</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between print:hidden">
                <Button variant="ghost" onClick={() => router.back()} className="rounded-xl">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Orders
                </Button>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handlePrint} className="rounded-xl border-gray-200">
                        <Printer className="w-4 h-4 mr-2" />
                        Print Invoice
                    </Button>
                    <Button className="rounded-xl shadow-primary/20 shadow-lg">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </Button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 print:shadow-none print:border-none"
            >
                {/* Header Band */}
                <div className="h-2 bg-primary" />

                <CardContent className="p-10 sm:p-16 space-y-12">
                    {/* Brand & Reference */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                                    M
                                </div>
                                <span className="text-2xl font-bold tracking-tighter">CloudTech</span>
                            </div>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                                <p>Digital Data Solutions</p>
                                <p>Accra, Ghana</p>
                                <p>support@CloudTech.com</p>
                            </div>
                        </div>
                        <div className="text-left sm:text-right space-y-1">
                            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">Invoice</h1>
                            <p className="text-primary font-mono font-bold">#{order.reference}</p>
                            <p className="text-xs text-muted-foreground font-medium">{new Date(order.created_at).toLocaleDateString()} at {new Date(order.created_at).toLocaleTimeString()}</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-gray-50">
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Billed To</p>
                            <div className="space-y-1">
                                <p className="font-bold text-lg text-gray-900">{order.user.name}</p>
                                <p className="text-sm text-muted-foreground">{order.user.email}</p>
                            </div>
                        </div>
                        <div className="space-y-4 sm:text-right">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Payment Status</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold ring-1 ring-green-500/10">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                {order.status.toUpperCase()}
                            </div>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="pt-4">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-900 text-left">
                                        <th className="py-4 font-black uppercase text-[10px] tracking-widest">Description</th>
                                        <th className="py-4 font-black uppercase text-[10px] tracking-widest text-center">Qty</th>
                                        <th className="py-4 font-black uppercase text-[10px] tracking-widest text-right">Price</th>
                                        <th className="py-4 font-black uppercase text-[10px] tracking-widest text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr className="group">
                                        <td className="py-8">
                                            <div className="space-y-1">
                                                <p className="font-bold text-gray-900 text-base">{order.bundle.name} Bundle</p>
                                                <p className="text-xs text-muted-foreground">Recipient: <span className="text-gray-900 font-bold">{order.recipient_phone}</span></p>
                                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter text-primary">{order.bundle.network}</p>
                                            </div>
                                        </td>
                                        <td className="py-8 text-center font-bold text-gray-900">1</td>
                                        <td className="py-8 text-right font-medium text-gray-500">GHS {Number(order.bundle.price).toFixed(2)}</td>
                                        <td className="py-8 text-right font-black text-gray-900 text-lg">GHS {Number(order.cost).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="border-t-2 border-gray-900">
                                        <td colSpan={3} className="py-6 text-right font-bold text-muted-foreground">Total Amount Billed</td>
                                        <td className="py-6 text-right font-black text-2xl text-primary underline underline-offset-8 decoration-4 decoration-primary/20">GHS {Number(order.cost).toFixed(2)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-16 space-y-4">
                        <div className="bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100/50">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <div className="text-xs leading-relaxed text-muted-foreground italic">
                                This transaction was secured and processed via your CloudTech Wallet on {new Date(order.created_at).toLocaleDateString()}. Thank you for choosing CloudTech for your digital needs!
                            </div>
                        </div>
                        <p className="text-[10px] text-center text-muted-foreground font-medium uppercase tracking-[0.2em] pt-8">
                            &copy; {new Date().getFullYear()} CloudTech Limited. All Rights Reserved.
                        </p>
                    </div>
                </CardContent>
            </motion.div>
        </div>
    );
}
