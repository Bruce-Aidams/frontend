"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    DollarSign,
    Users,
    ShoppingCart,
    CreditCard,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    RefreshCcw,
    Calendar,
    BarChart3,
    Layers,
    TrendingUp,
    CheckCircle2
} from "lucide-react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, AreaChart, Area, Legend
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface AnalyticsData {
    total_revenue: number;
    total_users: number;
    total_orders: number;
    pending_deposits: number;
    pending_orders: number;
    recent_orders: any[];
    monthly_revenue: { month: string; total: number }[];
    order_status: { status: string; count: number }[];
    network_distribution: { network: string; count: number }[];
    velocity: { date: string; count: number }[];
}

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];

export default function AdminAnalyticsPage() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedRange, setSelectedRange] = useState('30D');

    const fetchAnalytics = async (rangeOverride?: string) => {
        setRefreshing(true);
        const range = rangeOverride || selectedRange;
        try {
            const end = new Date();
            const start = new Date();
            if (range === '24H') {
                // For 24H, we might want just today, or last 24h. 
                // AdminController defaults to day granularity. So 'today'.
            } else if (range === '7D') {
                start.setDate(end.getDate() - 7);
            } else if (range === '30D') {
                start.setDate(end.getDate() - 30);
            } else if (range === '1Y') {
                start.setDate(end.getDate() - 365);
            }
            // For 24H, start and end are same (today) if we don't subtract.

            const params = {
                start_date: start.toISOString().split('T')[0],
                end_date: end.toISOString().split('T')[0]
            };

            const res = await api.get('/admin/analytics', { params });
            setData(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleRangeChange = (range: string) => {
        setSelectedRange(range);
        fetchAnalytics(range);
    };

    useEffect(() => {
        fetchAnalytics();
    }, []);

    // ... loading checks ...

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] gap-6 animate-pulse">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Synthesizing Business Intelligence</h3>
                    <p className="text-muted-foreground">Aggregating real-time ecosystem metrics...</p>
                </div>
            </div>
        );
    }

    if (!data) return <div className="text-center py-20 text-red-500 font-bold">Systems Offline: Failed to synchronize analytics.</div>;

    return (
        <div className="space-y-8 pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">Business Intelligence</h2>
                    <p className="text-slate-500 font-medium">Powering data-driven decisions across your ecosystem.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center bg-white dark:bg-slate-900 rounded-2xl p-1 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                        {['24H', '7D', '30D', '1Y'].map((range) => (
                            <button
                                key={range}
                                onClick={() => handleRangeChange(range)}
                                className={cn(
                                    "px-4 py-2 text-xs font-bold rounded-xl transition-all",
                                    selectedRange === range ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                                )}>
                                {range}
                            </button>
                        ))}
                    </div>
                    <Button onClick={() => fetchAnalytics()} disabled={refreshing} className="rounded-2xl shadow-xl shadow-primary/20 h-11 px-6 font-bold gap-2">
                        <RefreshCcw className={cn("w-4 h-4", refreshing && "animate-spin")} />
                        {refreshing ? "Refreshing..." : "Live Update"}
                    </Button>
                </div>
            </div>

            {/* High-Impact Stat Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Gross Revenue"
                    value={`GHS ${data.total_revenue.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    sub="Total completed sales"
                    icon={<DollarSign className="w-6 h-6" />}
                    trend="+14.2%"
                    positive
                    color="primary"
                    delay={0}
                />
                <StatCard
                    title="User Base"
                    value={data.total_users.toLocaleString()}
                    sub="Registered stakeholders"
                    icon={<Users className="w-6 h-6" />}
                    trend="+5.8%"
                    positive
                    color="indigo"
                    delay={0.1}
                />
                <StatCard
                    title="Volume"
                    value={data.total_orders.toLocaleString()}
                    sub="Successful completions"
                    icon={<ShoppingCart className="w-6 h-6" />}
                    trend="+9.4%"
                    positive
                    color="emerald"
                    delay={0.2}
                />
                <StatCard
                    title="Attention"
                    value={(data.pending_deposits + data.pending_orders).toString()}
                    sub="Active queue items"
                    icon={<Activity className="w-6 h-6" />}
                    trend="Priority"
                    positive={false}
                    color="rose"
                    delay={0.3}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Revenue Momentum Area Chart */}
                <Card className="lg:col-span-2 border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden">
                    <CardHeader className="p-8 pb-0">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-xl font-black flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Revenue Momentum
                                </CardTitle>
                                <CardDescription>Financial performance over the last 6 months.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="h-[380px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data.monthly_revenue}>
                                    <defs>
                                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                                        dy={10}
                                        tickFormatter={(v) => format(new Date(v + "-01"), "MMM")}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                                        tickFormatter={(v) => `₵${v >= 1000 ? (v / 1000) + 'k' : v}`}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                        itemStyle={{ color: '#fff', fontWeight: 700 }}
                                        labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                                        cursor={{ stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '4 4' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="total"
                                        stroke="#6366f1"
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill="url(#revenueGradient)"
                                        animationDuration={1500}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Network Distribution Pie Chart */}
                <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] p-8 flex flex-col">
                    <CardHeader className="p-0 mb-8">
                        <CardTitle className="text-xl font-black flex items-center gap-2">
                            <Layers className="w-5 h-5 text-indigo-500" />
                            Network Share
                        </CardTitle>
                        <CardDescription>User distribution across providers.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 flex flex-col justify-between">
                        <div className="h-[260px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data.network_distribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={75}
                                        outerRadius={100}
                                        paddingAngle={8}
                                        dataKey="count"
                                        nameKey="network"
                                        stroke="none"
                                        animationDuration={1500}
                                    >
                                        {data.network_distribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={8} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">{data.total_orders}</span>
                                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Total Ops</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-8">
                            {data.network_distribution.map((entry, index) => (
                                <div key={entry.network} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase text-slate-400 leading-tight">{entry.network}</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{entry.count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Transaction Velocity Bar Chart */}
                <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden">
                    <CardHeader className="p-8">
                        <CardTitle className="text-xl font-black flex items-center gap-2">
                            <Activity className="w-5 h-5 text-emerald-500" />
                            Daily Velocity
                        </CardTitle>
                        <CardDescription>Transaction throughput over the last 7 days.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 pb-8">
                        <div className="h-[280px] w-full px-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.velocity}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                                        tickFormatter={(v) => format(new Date(v), "eee")}
                                    />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }}
                                        cursor={{ fill: '#f1f5f9', opacity: 0.5 }}
                                    />
                                    <Bar
                                        dataKey="count"
                                        fill="#10b981"
                                        radius={[10, 10, 10, 10]}
                                        barSize={32}
                                        animationDuration={1500}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Health & Status Matrix */}
                <Card className="border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] p-8">
                    <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-xl font-black flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                            Ecosystem Health
                        </CardTitle>
                        <CardDescription>Operational status distribution.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="space-y-4">
                            {data.order_status.map((item, idx) => (
                                <div key={item.status} className="group flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-[1.5rem] border border-slate-100 dark:border-slate-700/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
                                        item.status === 'completed' ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" :
                                            item.status === 'pending' ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" :
                                                item.status === 'processing' ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" :
                                                    "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                                    )}>
                                        {item.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Activity className="w-6 h-6" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-black uppercase tracking-widest text-slate-400">{item.status}</span>
                                            <span className="text-lg font-black text-slate-900 dark:text-white">{item.count}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(item.count / data.total_orders) * 100}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={cn(
                                                    "h-full rounded-full",
                                                    item.status === 'completed' ? "bg-emerald-500" :
                                                        item.status === 'pending' ? "bg-amber-500" :
                                                            item.status === 'processing' ? "bg-blue-500" :
                                                                "bg-rose-500"
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatCard({ title, value, sub, icon, trend, positive, color, delay }: any) {
    const colorClasses = {
        primary: "from-indigo-600 to-blue-700 shadow-indigo-200",
        indigo: "from-violet-600 to-indigo-700 shadow-indigo-200",
        emerald: "from-emerald-500 to-teal-700 shadow-emerald-200",
        rose: "from-rose-500 to-pink-700 shadow-rose-200",
    }[color as keyof typeof colorClasses];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className={cn(
                "relative p-8 rounded-[2.5rem] text-white bg-gradient-to-br shadow-2xl dark:shadow-none overflow-hidden group border-none",
                colorClasses
            )}
        >
            <div className="absolute top-0 right-0 p-6 opacity-10 scale-150 group-hover:scale-[2] group-hover:rotate-12 transition-transform duration-1000">
                {icon}
            </div>

            <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform group-hover:scale-110 duration-500">
                        {icon}
                    </div>
                    <Badge variant="outline" className="bg-white/10 border-white/20 text-[10px] font-black uppercase tracking-wider h-7 px-3 backdrop-blur-md">
                        {positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                        {trend}
                    </Badge>
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-black tracking-tight">{value}</h3>
                    <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">{title}</p>
                </div>

                <div className="text-[10px] text-white/50 font-bold flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/50"></div>
                    {sub}
                </div>
            </div>
        </motion.div>
    );
}
