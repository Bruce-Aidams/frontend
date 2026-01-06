
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, Users, Server, Wallet, UploadCloud, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardStats {
    today_orders: number;
    today_revenue: number;
    today_data_gb: number;
    total_agents: number;
    today_topups: number;
    total_agent_balance: number;
    pending_data_gb: number;
}

export function AdminStatsGrid({ stats }: { stats: DashboardStats }) {
    const items = [
        {
            title: "Today's Revenue",
            value: `GHS ${stats.today_revenue.toLocaleString()}`,
            icon: CreditCard,
            gradient: "from-emerald-500 to-teal-700",
            shadow: "shadow-emerald-200/50"
        },
        {
            title: "Today's Orders",
            value: stats.today_orders,
            icon: FileText,
            gradient: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200/50"
        },
        {
            title: "Data Delivered Today",
            value: `${stats.today_data_gb} GB`,
            icon: UploadCloud,
            gradient: "from-violet-500 to-purple-700",
            shadow: "shadow-purple-200/50"
        },
        {
            title: "Total Agents",
            value: stats.total_agents,
            icon: Users,
            gradient: "from-orange-500 to-amber-600",
            shadow: "shadow-orange-200/50"
        },
        {
            title: "Today's Topups",
            value: `GHS ${stats.today_topups.toLocaleString()}`,
            icon: Activity,
            gradient: "from-indigo-500 to-blue-600",
            shadow: "shadow-indigo-200/50"
        },
        {
            title: "Agent Balances",
            value: `GHS ${stats.total_agent_balance.toLocaleString()}`,
            icon: Wallet,
            gradient: "from-pink-500 to-rose-600",
            shadow: "shadow-pink-200/50"
        },
        {
            title: "Pending Data",
            value: `${stats.pending_data_gb} GB`,
            icon: Server,
            gradient: "from-amber-400 to-yellow-600",
            shadow: "shadow-yellow-200/50"
        },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
                <Card
                    key={index}
                    className={cn(
                        "border-none text-white overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                        "bg-gradient-to-br",
                        item.gradient
                    )}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 group-hover:scale-[2] group-hover:rotate-12 transition-transform duration-700">
                        <item.icon className="w-16 h-16" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                        <CardTitle className="text-xs font-bold uppercase tracking-wider text-white/80">{item.title}</CardTitle>
                        <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/20">
                            <item.icon className="h-4 w-4 text-white" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <div className="text-2xl font-black tracking-tight">{item.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
