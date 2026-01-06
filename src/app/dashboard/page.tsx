"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wallet, ShoppingCart, Package, Users, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Order {
    id: number;
    reference: string;
    recipient_phone: string;
    cost: number;
    status: string;
    bundle?: {
        name: string;
    };
}

export default function DashboardPage() {
    const [balance, setBalance] = useState(0);
    const [recentOrders, setRecentOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const walletRes = await api.get('/wallet');
                setBalance(walletRes.data.balance);

                const ordersRes = await api.get('/orders');
                setRecentOrders(ordersRes.data.data.slice(0, 5));
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] gap-6 animate-pulse">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pb-10"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-800 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500">
                        Dashboard
                    </h2>
                    <p className="text-slate-500 font-medium">Overview of your wallet and recent activity.</p>
                </div>
                <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="rounded-xl border-slate-200 dark:border-slate-700 font-bold">
                        <Link href="/dashboard/transactions">View History</Link>
                    </Button>
                    <Button asChild size="sm" className="rounded-xl shadow-lg shadow-primary/25 font-bold bg-primary hover:bg-primary/90">
                        <Link href="/dashboard/orders/new">New Order</Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Wallet Balance Card - Vibrant Gradient */}
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="border-none overflow-hidden relative h-full bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-2xl shadow-indigo-200 block">
                        <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12 scale-150 pointer-events-none">
                            <Wallet className="w-32 h-32" />
                        </div>
                        <CardHeader className="pb-2 relative z-10">
                            <CardTitle className="text-xs font-black uppercase tracking-widest text-indigo-100/80">Wallet Balance</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-6">
                            <div>
                                <div className="text-4xl font-black tracking-tight">GHS {Number(balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                                <p className="text-xs font-bold text-indigo-100/70 mt-1">Available Funds</p>
                            </div>
                            <Button asChild className="w-full bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm rounded-xl font-bold transition-all group">
                                <Link href="/dashboard/wallet" className="flex items-center justify-center gap-2">
                                    Top Up Wallet <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Quick Actions Card */}
                <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2rem] bg-white h-full">
                    <CardHeader>
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Link href="/dashboard/orders/new">
                            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/10 transition-all cursor-pointer mb-3">
                                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ShoppingCart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">Buy Data Bundle</h4>
                                    <p className="text-xs text-slate-500 font-medium">Instant delivery</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/dashboard/referrals" className="block">
                            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">Refer & Earn</h4>
                                    <p className="text-xs text-slate-500 font-medium">Get 5% Commission</p>
                                </div>
                            </div>
                        </Link>
                    </CardContent>
                </Card>

                {/* Account Status Card */}
                <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2rem] bg-white h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full z-0 opacity-50" />
                    <CardHeader className="relative z-10">
                        <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Account Health</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 flex flex-col items-center justify-center py-6">
                        <div className="relative mb-6 group cursor-default">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                            <div className="w-24 h-24 rounded-full border-[6px] border-primary flex items-center justify-center bg-white dark:bg-slate-900 relative z-10 shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform duration-500">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-primary">100%</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1.5 border-4 border-white dark:border-slate-900">
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 dark:text-white">Profile Verified</h3>
                        <p className="text-xs text-slate-500 font-bold mt-1 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                            Full Access Granted
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Orders Section */}
            <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden bg-white">
                <CardHeader className="px-8 pt-8 pb-4 flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-lg font-black flex items-center gap-2">
                            <Package className="w-5 h-5 text-primary" />
                            Recent Activity
                        </CardTitle>
                    </div>
                    <Button asChild variant="ghost" size="sm" className="hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-bold text-slate-500">
                        <Link href="/dashboard/orders">View All History</Link>
                    </Button>
                </CardHeader>
                <CardContent className="p-0">
                    {recentOrders.length === 0 ? (
                        <div className="py-20 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                                <Package className="w-8 h-8 text-slate-300" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No orders yet</h3>
                            <p className="text-slate-500 max-w-xs mx-auto mt-1 mb-6">Start by purchasing your first data bundle.</p>
                            <Button asChild className="rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/20">
                                <Link href="/dashboard/orders/new">Buy Bundle</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] uppercase bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 font-bold">
                                    <tr>
                                        <th className="px-8 py-4 first:rounded-tl-2xl">Reference</th>
                                        <th className="px-6 py-4">Package</th>
                                        <th className="px-6 py-4">Recipient</th>
                                        <th className="px-6 py-4">Cost</th>
                                        <th className="px-8 py-4 text-right last:rounded-tr-2xl">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xs">
                                                        #
                                                    </div>
                                                    <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">{order.reference}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="font-bold text-slate-900 dark:text-white block">{order.bundle?.name || 'Bundle'}</span>
                                            </td>
                                            <td className="px-6 py-5 font-mono text-xs text-slate-500">{order.recipient_phone}</td>
                                            <td className="px-6 py-5 font-black text-slate-900 dark:text-white">GHS {Number(order.cost).toFixed(2)}</td>
                                            <td className="px-8 py-5 text-right">
                                                <span className={cn(
                                                    "inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider",
                                                    order.status === 'completed' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
                                                    order.status === 'pending' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                                                    order.status === 'processing' && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
                                                    order.status === 'failed' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                                                )}>
                                                    {order.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
