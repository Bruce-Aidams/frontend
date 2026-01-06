"use client";

import { useEffect, useState, useCallback } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    TrendingUp,
    DollarSign,
    ShoppingCart,
    ArrowUpRight,
    Download,
    Filter,
    Search,
    Banknote,
    Settings2
} from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger, // Popover sub-component
} from "../../../components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";

export default function AdminFinancialsPage() {
    const [settings, setSettings] = useState<any>({});
    const [salesReport, setSalesReport] = useState<any>({ summary: {}, orders: [] });
    const [loading, setLoading] = useState(true);
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(new Date().setDate(new Date().getDate() - 30)),
        to: new Date()
    });

    const fetchFinancials = useCallback(async () => {
        setLoading(true);
        try {
            // Fetch Settings
            const settingsRes = await api.get('/admin/settings');
            setSettings(settingsRes.data);

            // Fetch Sales Report展
            const params: any = {};
            if (dateRange?.from) params.start_date = format(dateRange.from, "yyyy-MM-dd");
            if (dateRange?.to) params.end_date = format(dateRange.to, "yyyy-MM-dd");

            const salesRes = await api.get('/admin/sales-report', { params });
            setSalesReport(salesRes.data);
        } catch (e) {
            toast.error("Failed to load financial data");
        } finally {
            setLoading(false);
        }
    }, [dateRange]);

    useEffect(() => {
        fetchFinancials();
    }, [fetchFinancials]);

    const handleUpdateSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/admin/settings', { settings });
            toast.success("Settings updated successfully");
        } catch (e) {
            toast.error("Update failed");
        }
    };

    const downloadCSV = () => {
        const headers = ["Date", "User", "Bundle", "Selling Price", "Cost Price", "Profit"];
        const rows = salesReport.orders.map((o: any) => [
            format(new Date(o.created_at), "yyyy-MM-dd HH:mm"),
            o.user.name,
            o.bundle.name,
            o.cost,
            o.cost_price,
            o.profit
        ]);

        let csvContent = "data:text/csv;charset=utf-8,"
            + headers.join(",") + "\n"
            + rows.map((e: any) => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `sales_report_${format(new Date(), "yyyy-MM-dd")}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">Financial Insights</h2>
                    <p className="text-muted-foreground font-medium">Manage economics, pricing, and performance audit.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="h-11 rounded-2xl border-slate-200 dark:border-slate-800 font-bold px-4">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <>{format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}</>
                                    ) : (format(dateRange.from, "LLL dd"))
                                ) : (<span>Select Range</span>)}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <Calendar
                                initialFocus
                                mode="range"
                                selected={dateRange}
                                onSelect={setDateRange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                    <Button onClick={downloadCSV} className="h-11 rounded-2xl gap-2 font-bold px-6 shadow-lg shadow-primary/20">
                        <Download className="w-4 h-4" /> Export CSV
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="rounded-[2rem] border-none shadow-sm bg-indigo-50/50 dark:bg-indigo-900/10">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-indigo-500">Total Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-800 dark:text-white">₵{parseFloat(salesReport.summary.total_sales || 0).toFixed(2)}</div>
                        <p className="text-xs font-bold text-indigo-400 mt-1 flex items-center gap-1">
                            <ShoppingCart className="w-3 h-3" /> {salesReport.summary.order_count} Orders fulfilled
                        </p>
                    </CardContent>
                </Card>
                <Card className="rounded-[2rem] border-none shadow-sm bg-emerald-50/50 dark:bg-emerald-900/10">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-emerald-500">Gross Profit</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-800 dark:text-white">₵{parseFloat(salesReport.summary.total_profit || 0).toFixed(2)}</div>
                        <p className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Potential Net Gain
                        </p>
                    </CardContent>
                </Card>
                <Card className="rounded-[2rem] border-none shadow-sm bg-rose-50/50 dark:bg-rose-900/10">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-rose-500">Direct Cost</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-800 dark:text-white">₵{parseFloat(salesReport.summary.total_cost || 0).toFixed(2)}</div>
                        <p className="text-xs font-bold text-rose-400 mt-1 flex items-center gap-1">
                            <Banknote className="w-3 h-3" /> Total Bundle Expense
                        </p>
                    </CardContent>
                </Card>
                <Card className="rounded-[2rem] border-none shadow-sm bg-amber-50/50 dark:bg-amber-900/10">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase tracking-widest text-amber-500">Avg. Margin</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-black text-slate-800 dark:text-white">
                            {salesReport.summary.total_sales > 0
                                ? ((salesReport.summary.total_profit / salesReport.summary.total_sales) * 100).toFixed(1)
                                : 0}%
                        </div>
                        <p className="text-xs font-bold text-amber-500 mt-1 flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" /> Performance Index
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="report" className="w-full">
                <TabsList className="bg-slate-100 dark:bg-slate-900 h-14 p-1.5 rounded-2xl gap-2 w-full md:w-auto">
                    <TabsTrigger value="report" className="rounded-xl px-10 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                        Detailed Report
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="rounded-xl px-10 font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                        Financial Settings
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="report" className="mt-8">
                    <Card className="rounded-[2.5rem] border-none shadow-xl overflow-hidden">
                        <CardHeader className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-8 border-b border-slate-50 dark:border-slate-800">
                            <CardTitle className="text-xl font-black">Settled Sales Log</CardTitle>
                            <CardDescription>Individual order metrics for the selected period.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="bg-slate-50/30 dark:bg-slate-900/30 border-none">
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Order Ref</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">User</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Bundle</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Selling (₵)</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Cost (₵)</TableHead>
                                            <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Profit (₵)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {salesReport.orders.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={6} className="h-64 text-center text-slate-400 italic font-medium">
                                                    No settled sales recorded for this period.
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            salesReport.orders.map((o: any) => (
                                                <TableRow key={o.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all border-slate-50 dark:border-slate-800">
                                                    <TableCell className="px-8 py-6 font-mono text-xs text-slate-400">#{o.reference}</TableCell>
                                                    <TableCell className="px-8 py-6">
                                                        <div className="font-bold text-slate-800 dark:text-slate-200">{o.user.name}</div>
                                                    </TableCell>
                                                    <TableCell className="px-8 py-6">
                                                        <div className="font-bold text-slate-800 dark:text-slate-200">{o.bundle.name}</div>
                                                    </TableCell>
                                                    <TableCell className="px-8 py-6 font-black text-slate-900 dark:text-white">{parseFloat(o.cost).toFixed(2)}</TableCell>
                                                    <TableCell className="px-8 py-6 font-bold text-slate-400">{parseFloat(o.cost_price).toFixed(2)}</TableCell>
                                                    <TableCell className="px-8 py-6 text-right">
                                                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full font-black text-xs">
                                                            +{parseFloat(o.profit).toFixed(2)}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="settings" className="mt-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="rounded-[2.5rem] border-none shadow-xl">
                            <CardHeader className="p-8">
                                <CardTitle className="flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5 text-primary" /> Payment Limits
                                </CardTitle>
                                <CardDescription>Restrict top-up amounts for platform security.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-6">
                                <div className="grid gap-2">
                                    <Label>Minimum Wallet Top-up (₵)</Label>
                                    <Input
                                        type="number"
                                        value={settings.min_payment}
                                        onChange={(e) => setSettings({ ...settings, min_payment: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Maximum Wallet Top-up (₵)</Label>
                                    <Input
                                        type="number"
                                        value={settings.max_payment}
                                        onChange={(e) => setSettings({ ...settings, max_payment: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-[2.5rem] border-none shadow-xl">
                            <CardHeader className="p-8">
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" /> Service Charges
                                </CardTitle>
                                <CardDescription>Configure platform fees for manual or automated processing.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-6">
                                <div className="grid gap-2">
                                    <Label>Charge Type</Label>
                                    <select
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm font-medium"
                                        value={settings.charge_type}
                                        onChange={(e) => setSettings({ ...settings, charge_type: e.target.value })}
                                    >
                                        <option value="percentage">Percentage (%)</option>
                                        <option value="fixed">Fixed Amount (₵)</option>
                                    </select>
                                </div>
                                <div className="grid gap-2">
                                    <Label>Charge Value</Label>
                                    <Input
                                        type="number"
                                        value={settings.charge_value}
                                        onChange={(e) => setSettings({ ...settings, charge_value: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="rounded-[2.5rem] border-none shadow-xl md:col-span-2">
                            <CardHeader className="p-8">
                                <CardTitle className="flex items-center gap-2">
                                    <Settings2 className="w-5 h-5 text-primary" /> Manual Payment Details
                                </CardTitle>
                                <CardDescription>Bank account information displayed to users for manual transfers.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 grid md:grid-cols-3 gap-6">
                                <div className="grid gap-2">
                                    <Label>Bank Name</Label>
                                    <Input
                                        value={settings.bank_name}
                                        onChange={(e) => setSettings({ ...settings, bank_name: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Account Holder Name</Label>
                                    <Input
                                        value={settings.bank_account_name}
                                        onChange={(e) => setSettings({ ...settings, bank_account_name: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Account Number</Label>
                                    <Input
                                        value={settings.bank_account_number}
                                        onChange={(e) => setSettings({ ...settings, bank_account_number: e.target.value })}
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Maintenance Mode</Label>
                                    <select
                                        className="h-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none px-4 text-sm font-medium"
                                        value={settings.maintenance_mode || "false"}
                                        onChange={(e) => setSettings({ ...settings, maintenance_mode: e.target.value })}
                                    >
                                        <option value="false">Live (Public)</option>
                                        <option value="true">Maintenance Mode (Admins Only)</option>
                                    </select>
                                </div>
                            </CardContent>
                            <CardFooter className="p-8 border-t border-slate-50 dark:border-slate-800">
                                <Button onClick={handleUpdateSettings} className="w-full md:w-auto px-10 h-12 rounded-xl font-bold">
                                    Save Financial Configuration
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
