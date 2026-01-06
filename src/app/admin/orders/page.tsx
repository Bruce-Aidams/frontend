"use client";

import { useEffect, useState, useCallback } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    MoreHorizontal,
    Eye,
    CheckCircle,
    XCircle,
    Clock,
    Search,
    ArrowUpDown,
    Filter,
    FileText,
    User,
    Phone,
    Package
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { InvoiceDialog } from "@/components/admin/InvoiceDialog";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Pagination } from "@/components/ui/pagination-custom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/popover"; // Relative import to fix module resolution
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";


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
    };
}

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
    const [invoiceOpen, setInvoiceOpen] = useState(false);


    const fetchOrders = useCallback(async (page = 1, search = "", status = "all", range?: DateRange) => {
        setLoading(true);
        try {
            const params: any = { page };
            if (search) params.search = search;
            if (status && status !== "all") params.status = status;
            if (range?.from) params.start_date = format(range.from, "yyyy-MM-dd");
            if (range?.to) params.end_date = format(range.to, "yyyy-MM-dd");

            const res = await api.get('/admin/orders', { params });
            setOrders(res.data.data);
            setTotalPages(res.data.last_page);
            setCurrentPage(res.data.current_page);
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchOrders(currentPage, searchTerm, statusFilter, dateRange);
        }, 500);
        return () => clearTimeout(timer);
    }, [fetchOrders, currentPage, searchTerm, statusFilter, dateRange]);

    const handleActionComplete = () => {
        fetchOrders(currentPage, searchTerm, statusFilter, dateRange);
    };


    const updateStatus = async (id: number, status: string) => {
        try {
            await api.put(`/admin/orders/${id}`, { status });
            toast.success(`Order marking as ${status}`);
            handleActionComplete();
        } catch (err) {
            toast.error("Status update failed");
        }
    };


    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "completed": return "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400";
            case "processing": return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400";
            case "pending": return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400";
            case "failed": return "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400";
            default: return "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400";
        }
    };

    // Removed filteredOrders Local Logic


    return (
        <div className="space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white">Order Management</h2>
                    <p className="text-slate-500 font-medium">Coordinate logistics and monitor data deliveries.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative w-full md:w-80 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input
                            placeholder="Search by ID, Phone, Customer..."
                            className="pl-11 h-12 bg-white dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 shadow-sm focus:ring-primary focus:border-primary"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="h-12 rounded-2xl border-slate-200 dark:border-slate-800 font-bold px-4">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <>
                                            {format(dateRange.from, "LLL dd")} - {format(dateRange.to, "LLL dd")}
                                        </>
                                    ) : (
                                        format(dateRange.from, "LLL dd")
                                    )
                                ) : (
                                    <span>Pick a date range</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={dateRange?.from}
                                selected={dateRange}
                                onSelect={setDateRange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>

                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="h-12 w-[180px] rounded-2xl border-slate-200 dark:border-slate-800 font-bold">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>


            <Card className="sneat-card border-none shadow-2xl shadow-slate-200/50 dark:shadow-none dark:bg-slate-900/50 rounded-[2.5rem] overflow-hidden">
                <CardHeader className="p-8 border-b border-slate-50 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl font-black">All Fulfillment Orders</CardTitle>
                            <CardDescription>Comprehensive record of all system orders.</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            {['all', 'pending', 'processing', 'completed', 'failed'].map((s) => (
                                <Badge
                                    key={s}
                                    onClick={() => setStatusFilter(s)}
                                    className={cn(
                                        "cursor-pointer rounded-xl px-4 py-1.5 transition-all uppercase text-[10px] font-black tracking-widest",
                                        statusFilter === s
                                            ? "bg-primary text-white"
                                            : "bg-slate-100 text-slate-400 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    )}
                                >
                                    {s}
                                </Badge>
                            ))}
                        </div>

                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-slate-50/50 dark:bg-slate-900/50 border-none">
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Order Ref</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Logistics</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Lifecycle</TableHead>
                                    <TableHead className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    [...Array(5)].map((_, i) => (
                                        <TableRow key={i} className="animate-pulse border-slate-50 dark:border-slate-800">
                                            <TableCell colSpan={6} className="h-20"><div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded-xl" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : orders.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-20 text-slate-400 italic">No orders found matching your criteria.</TableCell>
                                    </TableRow>
                                ) : (
                                    orders.map((order) => (

                                        <TableRow key={order.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all border-slate-100 dark:border-slate-800">
                                            <TableCell className="px-8 py-6">
                                                <div className="flex flex-col">
                                                    <span className="font-mono text-xs font-black text-slate-300 group-hover:text-primary transition-colors">#{order.reference}</span>
                                                    <span className="text-[10px] font-bold text-slate-400">{format(new Date(order.created_at), "MMM dd, HH:mm")}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-10 w-10 border-2 border-white dark:border-slate-800 shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 group-hover:ring-primary/30 transition-all">
                                                        <AvatarFallback className="bg-indigo-50 text-indigo-600 font-black text-xs">
                                                            {order.user.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-slate-900 dark:text-white leading-tight">{order.user.name}</span>
                                                        <span className="text-[10px] font-medium text-slate-400 leading-tight">{order.user.email}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline" className="rounded-lg border-slate-200 text-[10px] font-black text-primary uppercase">{order.bundle.network}</Badge>
                                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{order.bundle.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                                                        <Phone className="w-3 h-3" /> {order.recipient_phone}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="px-8 py-6">
                                                <span className="text-lg font-black text-slate-900 dark:text-white">₵ {Number(order.cost).toFixed(2)}</span>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-center">
                                                <Badge className={cn("rounded-2xl px-4 py-1 font-black text-[10px] uppercase tracking-widest shadow-none border transition-transform group-hover:scale-110", getStatusColor(order.status))}>
                                                    {order.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="px-8 py-6 text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-10 w-10 p-0 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800">
                                                            <MoreHorizontal className="h-5 w-5" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-[1.5rem] border-none shadow-2xl">
                                                        <DropdownMenuLabel className="font-black text-[10px] uppercase tracking-widest text-slate-400">Control Panel</DropdownMenuLabel>
                                                        <DropdownMenuSeparator className="opacity-50" />
                                                        <DropdownMenuItem
                                                            onClick={() => {
                                                                setSelectedOrderId(order.id);
                                                                setInvoiceOpen(true);
                                                            }}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer"
                                                        >
                                                            <FileText className="w-4 h-4 text-emerald-500" />
                                                            View Tax Invoice
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator className="opacity-50" />
                                                        <DropdownMenuItem
                                                            onClick={() => updateStatus(order.id, 'completed')}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer hover:bg-emerald-50 text-emerald-600"
                                                        >
                                                            <CheckCircle className="w-4 h-4" /> Mark Completed
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => updateStatus(order.id, 'failed')}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer hover:bg-rose-50 text-rose-600"
                                                        >
                                                            <XCircle className="w-4 h-4" /> Mark Failed
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => updateStatus(order.id, 'processing')}
                                                            className="rounded-xl px-4 py-3 gap-3 font-bold cursor-pointer hover:bg-blue-50 text-blue-600"
                                                        >
                                                            <Clock className="w-4 h-4" /> Mark Processing
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
                <div className="p-6 border-t border-slate-50 dark:border-slate-800">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        isLoading={loading}
                    />
                </div>
            </Card>


            <InvoiceDialog
                orderId={selectedOrderId}
                open={invoiceOpen}
                onOpenChange={setInvoiceOpen}
            />
        </div>
    );
}
