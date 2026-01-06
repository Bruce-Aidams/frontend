"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    TooltipProps
} from "recharts";

interface RevenueChartProps {
    data: Array<{ name: string; value: number }>;
    title?: string;
    type?: "line" | "area";
    color?: string;
}

export function RevenueChart({
    data,
    title = "Revenue Overview",
    type = "area",
    color = "#8b5cf6"
}: RevenueChartProps) {
    const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg border">
                    <p className="text-sm font-semibold">{payload[0].payload.name}</p>
                    <p className="text-sm text-primary">
                        GHS {payload[0].value?.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="sneat-card border-none shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    {type === "area" ? (
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="name"
                                stroke="#888888"
                                fontSize={12}
                            />
                            <YAxis
                                stroke="#888888"
                                fontSize={12}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke={color}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    ) : (
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="name"
                                stroke="#888888"
                                fontSize={12}
                            />
                            <YAxis
                                stroke="#888888"
                                fontSize={12}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={color}
                                strokeWidth={2}
                                dot={{ fill: color, r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
