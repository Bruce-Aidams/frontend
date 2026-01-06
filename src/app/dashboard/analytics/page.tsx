"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    TrendingUp,
    CheckCircle2,
    Clock,
    AlertCircle,
    Activity,
    BarChart3,
    PieChart as PieChartIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Stats {
    total: number;
    delivered: number;
    pending: number;
    failed: number;
}

interface Order {
    status: string;
}

export default function AnalyticsPage() {
    const [stats, setStats] = useState<Stats>({ total: 0, delivered: 0, pending: 0, failed: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await api.get<{ data: Order[] }>('/orders');
                const orders = res.data.data;
                const newStats = {
                    total: orders.length,
                    delivered: orders.filter((o: Order) => o.status === 'completed' || o.status === 'delivered').length,
                    pending: orders.filter((o: Order) => o.status === 'pending' || o.status === 'processing').length,
                    failed: orders.filter((o: Order) => o.status === 'failed').length,
                };
                setStats(newStats);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchAnalytics();
    }, []);

    const statCards = [
        { title: "Total Orders", value: stats.total, icon: Activity, color: "text-primary", bg: "bg-primary/10" },
        { title: "Delivered", value: stats.delivered, icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
        { title: "Pending", value: stats.pending, icon: Clock, color: "text-amber-600", bg: "bg-amber-100" },
        { title: "Failed", value: stats.failed, icon: AlertCircle, color: "text-red-600", bg: "bg-red-100" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Analytics</h2>
                <p className="text-muted-foreground font-medium">Insights into your data bundle purchases and performance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat, i) => (
                    <Card key={i} className="sneat-card border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{stat.title}</CardTitle>
                            <div className={cn("p-2 rounded-lg", stat.bg, stat.color)}>
                                <stat.icon className="w-4 h-4" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-[10px] text-muted-foreground mt-1 flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                                <span className="text-green-500 font-bold">+12.5%</span> vs last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-7">
                <Card className="sneat-card col-span-4 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            Order Performance
                        </CardTitle>
                        <CardDescription>Monthly overview of successful vs failed orders</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] flex items-center justify-center border-t border-gray-50 bg-gray-50/10">
                        {/* Placeholder for actual chart component */}
                        <div className="flex flex-col items-center text-muted-foreground">
                            <BarChart3 className="w-12 h-12 mb-2 opacity-10" />
                            <p className="text-sm font-medium italic">Chart visualization will appear here as data scales.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sneat-card col-span-3 border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <PieChartIcon className="w-5 h-5 text-primary" />
                            Status Distribution
                        </CardTitle>
                        <CardDescription>Breakdown by order state</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center h-[300px] space-y-6">
                        {loading ? (
                            <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                        ) : (
                            <>
                                <div className="w-40 h-40 rounded-full border-8 border-gray-50 flex items-center justify-center relative">
                                    <div className="absolute inset-0 border-8 border-primary border-t-transparent border-r-transparent rounded-full rotate-45" />
                                    <div className="text-center">
                                        <p className="text-2xl font-black text-primary">{Math.round((stats.delivered / stats.total) * 100) || 0}%</p>
                                        <p className="text-[10px] uppercase font-bold text-muted-foreground">Success Rate</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="text-xs font-medium">Delivered ({stats.delivered})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                                        <span className="text-xs font-medium">Pending ({stats.pending})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <span className="text-xs font-medium">Failed ({stats.failed})</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-primary" />
                                        <span className="text-xs font-medium">Total ({stats.total})</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}
