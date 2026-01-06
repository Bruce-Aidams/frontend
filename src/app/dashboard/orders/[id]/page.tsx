"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useParams } from "next/navigation";

interface Order {
    id: number;
    reference: string;
    recipient_phone: string;
    status: string;
    cost: number;
    created_at: string;
    user?: {
        name: string;
        email: string;
        phone?: string;
    };
    bundle?: {
        network: string;
        name: string;
    };
}

export default function OrderDetailsPage() {
    const { id } = useParams();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            api.get(`/orders/${id}`).then(res => {
                setOrder(res.data);
                setLoading(false);
            }).catch(e => setLoading(false));
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!order) return <div>Order not found</div>;

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-between items-center no-print">
                <h2 className="text-2xl font-bold">Order Details</h2>
                <Button onClick={() => window.print()}>
                    <Printer className="mr-2 h-4 w-4" /> Print Invoice
                </Button>
            </div>

            <div className="bg-white border rounded-lg p-8 shadow-sm print:shadow-none print:border-0" id="invoice">
                <div className="border-b pb-4 mb-4 flex justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">INVOICE</h1>
                        <p className="text-sm text-gray-500">Ref: {order.reference}</p>
                    </div>
                    <div className="text-right">
                        <h3 className="font-bold">CloudTech Market</h3>
                        <p className="text-sm">support@CloudTech.com</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <p className="text-sm font-semibold text-gray-500">BILLED TO</p>
                        <p className="font-medium">{order.user?.name}</p>
                        <p>{order.user?.email}</p>
                        <p>{order.user?.phone || 'No Phone'}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-gray-500">DATE</p>
                        <p>{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                </div>

                <table className="w-full mb-8">
                    <thead className="bg-gray-50 uppercase text-xs text-gray-500 border-b">
                        <tr>
                            <th className="px-4 py-2 text-left">Description</th>
                            <th className="px-4 py-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="px-4 py-3">
                                <p className="font-medium">{order.bundle?.network} - {order.bundle?.name}</p>
                                <p className="text-sm text-gray-500">Recipient: {order.recipient_phone}</p>
                            </td>
                            <td className="px-4 py-3 text-right">GHS {order.cost}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="px-4 py-3 text-right font-bold">Total</td>
                            <td className="px-4 py-3 text-right font-bold">GHS {order.cost}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 text-center">Thank you for your business!</p>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    @page { margin: 0; }
                    body { visibility: hidden; }
                    #invoice { visibility: visible; position: absolute; left: 0; top: 0; width: 100%; border: none; }
                    .no-print { display: none; }
                }
            `}</style>
        </div>
    );
}
