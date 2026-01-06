"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Legend,
    Tooltip,
    TooltipProps
} from "recharts";

interface OrderStatusChartProps {
    data: Array<{ name: string; value: number }>;
    title?: string;
}

const COLORS = {
    completed: "#10b981",
    processing: "#f59e0b",
    pending: "#3b82f6",
    failed: "#ef4444",
};

export function OrderStatusChart({
    data,
    title = "Order Status Distribution"
}: OrderStatusChartProps) {
    const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg border">
                    <p className="text-sm font-semibold">{payload[0].name}</p>
                    <p className="text-sm text-primary">
                        {payload[0].value} orders
                    </p>
                </div>
            );
        }
        return null;
    };

    const getColor = (name: string) => {
        const key = name.toLowerCase() as keyof typeof COLORS;
        return COLORS[key] || "#8b5cf6";
    };

    return (
        <Card className="sneat-card border-none shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }: { name: string; percent: number }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
