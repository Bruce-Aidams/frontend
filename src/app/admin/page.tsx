
"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { AdminStatsGrid } from "@/components/admin/AdminStatsGrid";
import { AdminSalesChart } from "@/components/admin/AdminSalesChart";
import { AgentPerformanceTable } from "@/components/admin/AgentPerformanceTable";
import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [agentStats, setAgentStats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [statsRes, agentsRes] = await Promise.all([
                    api.get('/admin/dashboard-stats'),
                    api.get('/admin/agent-stats')
                ]);
                setStats(statsRes.data);
                setAgentStats(agentsRes.data.data); // Paginated response
            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">Dashboard</h2>
                <p className="text-muted-foreground">Overview of system performance and agent activities.</p>
            </div>

            {loading ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-32 rounded-xl" />
                    ))}
                </div>
            ) : stats ? (
                <AdminStatsGrid stats={stats} />
            ) : null}

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-7">
                {stats?.daily_sales && <AdminSalesChart data={stats.daily_sales} />}

                {/* We can put something else here or make chart full width if needed. 
                    For now, Chart takes 3/4 cols on LG.
                    Maybe put summary cards or notifications here?
                    Let's just make Chart full width or 7 cols.
                    Actually Chart is col-span-3 (of 4) in component? 
                    Let's check component. It says lg:col-span-3. 
                    So let's use a 4 col grid here if we want to match.
                    Or just stack.
                    Let's stack for now to ensure visibility.
                */}
            </div>

            <AgentPerformanceTable agents={agentStats} loading={loading} />
        </div>
    );
}
