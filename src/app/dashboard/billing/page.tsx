"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    CreditCard,
    Download,
    Calendar,
    DollarSign,
    FileText,
    TrendingUp,
    Wallet
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { format } from "date-fns";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface Transaction {
    id: number;
    amount: number;
    type: string;
    status: string;
    description: string;
    reference: string;
    created_at: string;
}

interface PaginatedTransactions {
    data: Transaction[];
    current_page: number;
    last_page: number;
    total: number;
}

export default function BillingPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ current_page: 1, last_page: 1, total: 0 });
    const [stats, setStats] = useState({
        total_spent: 0,
        total_credits: 0,
        this_month: 0,
    });

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async (page = 1) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get<PaginatedTransactions>(`${API_URL}/paystack/history?page=${page}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTransactions(response.data.data);
            setPagination({
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                total: response.data.total,
            });

            // Calculate stats
            calculateStats(response.data.data);
        } catch (error) {
            console.error("Failed to load transactions:", error);
            toast.error("Failed to load payment history");
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = (txns: Transaction[]) => {
        const total_credits = txns
            .filter(t => t.type === "credit" && t.status === "success")
            .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

        const total_spent = txns
            .filter(t => t.type === "debit" && t.status === "success")
            .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

        const thisMonth = txns
            .filter(t => {
                const txDate = new Date(t.created_at);
                const now = new Date();
                return txDate.getMonth() === now.getMonth() &&
                    txDate.getFullYear() === now.getFullYear();
            })
            .reduce((sum, t) => sum + parseFloat(t.amount.toString()), 0);

        setStats({ total_credits, total_spent, this_month: thisMonth });
    };

    const generateInvoice = (transaction: Transaction) => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.text("Cloud Tech", 20, 20);
        doc.setFontSize(10);
        doc.text("Payment Receipt", 20, 28);

        // Transaction Details
        doc.setFontSize(12);
        doc.text(`Receipt #${transaction.reference}`, 20, 45);
        doc.setFontSize(10);
        doc.text(`Date: ${format(new Date(transaction.created_at), "PPP")}`, 20, 52);
        doc.text(`Status: ${transaction.status.toUpperCase()}`, 20, 59);

        // Table
        autoTable(doc, {
            startY: 70,
            head: [["Description", "Amount"]],
            body: [
                [transaction.description, `GHS ${transaction.amount.toFixed(2)}`],
            ],
            theme: "grid",
        });

        // Footer
        const finalY = (doc as any).lastAutoTable.finalY || 90;
        doc.setFontSize(10);
        doc.text("Thank you for your business!", 20, finalY + 15);

        // Download
        doc.save(`invoice-${transaction.reference}.pdf`);
        toast.success("Invoice downloaded");
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success": return "bg-green-100 text-green-700";
            case "pending": return "bg-yellow-100 text-yellow-700";
            case "failed": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Billing & Payments</h2>
                <p className="text-muted-foreground font-medium">Manage your payment history and invoices</p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="sneat-card border-none shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Credits</p>
                                <p className="text-2xl font-bold text-primary">GHS {stats.total_credits.toFixed(2)}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                                <p className="text-2xl font-bold text-primary">GHS {stats.total_spent.toFixed(2)}</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <DollarSign className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none shadow-sm">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                                <p className="text-2xl font-bold text-primary">GHS {stats.this_month.toFixed(2)}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Payment History */}
            <Card className="sneat-card border-none shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Payment History
                    </CardTitle>
                    <CardDescription>View and download invoices for all your transactions</CardDescription>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">Loading transactions...</p>
                        </div>
                    ) : transactions.length === 0 ? (
                        <div className="text-center py-8">
                            <Wallet className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">No payment history yet</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Description</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Reference</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Amount</th>
                                            <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                                            <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction) => (
                                            <tr key={transaction.id} className="border-b hover:bg-gray-50 transition-colors">
                                                <td className="py-3 px-4 text-sm">
                                                    {format(new Date(transaction.created_at), "MMM dd, yyyy")}
                                                </td>
                                                <td className="py-3 px-4 text-sm font-medium">{transaction.description}</td>
                                                <td className="py-3 px-4 text-sm text-muted-foreground font-mono text-xs">
                                                    {transaction.reference}
                                                </td>
                                                <td className="py-3 px-4 text-sm font-semibold">
                                                    <span className={transaction.type === "credit" ? "text-green-600" : "text-red-600"}>
                                                        {transaction.type === "credit" ? "+" : "-"}GHS {transaction.amount.toFixed(2)}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <Badge className={getStatusColor(transaction.status)}>
                                                        {transaction.status}
                                                    </Badge>
                                                </td>
                                                <td className="py-3 px-4 text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => generateInvoice(transaction)}
                                                        className="rounded-lg"
                                                    >
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Invoice
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            {pagination.last_page > 1 && (
                                <div className="flex items-center justify-between pt-4">
                                    <p className="text-sm text-muted-foreground">
                                        Showing page {pagination.current_page} of {pagination.last_page}
                                    </p>
                                    <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => loadTransactions(pagination.current_page - 1)}
                                            disabled={pagination.current_page === 1}
                                            className="rounded-lg"
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => loadTransactions(pagination.current_page + 1)}
                                            disabled={pagination.current_page === pagination.last_page}
                                            className="rounded-lg"
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
