"use client";

import { useEffect, useState, Suspense } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Search, Filter, ArrowUpRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Order {
    id: number;
    reference: string;
    recipient_phone: string;
    cost: number;
    status: string;
    created_at: string;
    bundle?: {
        name: string;
        network: string;
    };
}

export default function OrdersPage() {
    return (
        <Suspense fallback={<div>Loading orders...</div>}>
            <OrdersContent />
        </Suspense>
    );
}

function OrdersContent() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('search');
        if (query) {
            Promise.resolve().then(() => setSearchQuery(query));
        }

        api.get<{ data: Order[] }>('/orders').then(res => {
            setOrders(res.data.data);
            setLoading(false);
        });
    }, [searchParams]);

    const filteredOrders = orders.filter(order =>
        order.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.recipient_phone.includes(searchQuery) ||
        order.bundle?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Order History</h2>
                    <p className="text-muted-foreground font-medium">Manage and track all your data bundle purchases.</p>
                </div>
                <Button asChild className="shadow-primary/20 shadow-lg">
                    <Link href="/dashboard/orders/new">
                        <Package className="w-4 h-4 mr-2" />
                        New Order
                    </Link>
                </Button>
            </div>

            <Card className="sneat-card overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-t-lg">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative flex-1 max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search reference or phone..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-gray-100"
                            />
                        </div>
                        <Button variant="outline" size="sm" className="hidden sm:flex">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-[10px] text-muted-foreground uppercase bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                                <tr>
                                    <th className="px-6 py-4">Reference</th>
                                    <th className="px-6 py-4">Order Details</th>
                                    <th className="px-6 py-4">Recipient</th>
                                    <th className="px-6 py-4">Amount</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {loading ? (
                                    Array(5).fill(0).map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={6} className="px-6 py-4">
                                                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                                            </td>
                                        </tr>
                                    ))
                                ) : filteredOrders.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-20 text-center">
                                            <Package className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                                            <p className="text-muted-foreground">No orders matching your search.</p>
                                        </td>
                                    </tr>
                                ) : filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <span className="font-mono text-xs text-primary font-bold">#{order.reference}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-gray-900 dark:text-white">{order.bundle?.name || 'Bundle'}</p>
                                            <p className="text-[10px] text-muted-foreground uppercase">{order.bundle?.network || 'Network'}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium">{order.recipient_phone}</div>
                                            <div className="text-[10px] text-muted-foreground">{new Date(order.created_at).toLocaleDateString()}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-gray-900 dark:text-white">GHS {order.cost}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2.5 py-1 rounded-md text-[10px] font-bold uppercase",
                                                order.status === 'completed' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                                order.status === 'pending' && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                                order.status === 'processing' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                                                order.status === 'failed' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                                            )}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                                            <Link
                                                href={`/dashboard/orders/${order.id}/invoice`}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                                                title="View Invoice"
                                            >
                                                <FileText className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                href={`/dashboard/orders/${order.id}`}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                                                title="Order Details"
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Link>
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
