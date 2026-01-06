"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
    title: string;
    value: string | number;
    change?: number;
    changeLabel?: string;
    icon: LucideIcon;
    iconColor?: string;
    iconBgColor?: string;
}

export function StatsCard({
    title,
    value,
    change,
    changeLabel,
    icon: Icon,
    iconColor = "text-primary",
    iconBgColor = "bg-primary/10",
}: StatsCardProps) {
    const isPositive = change !== undefined && change >= 0;

    return (
        <Card className="sneat-card border-none shadow-sm">
            <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">{title}</p>
                        <p className="text-2xl font-bold text-primary">{value}</p>
                        {change !== undefined && (
                            <div className="flex items-center gap-1 text-xs">
                                <span className={cn(
                                    "font-semibold",
                                    isPositive ? "text-green-600" : "text-red-600"
                                )}>
                                    {isPositive ? "+" : ""}{change}%
                                </span>
                                {changeLabel && (
                                    <span className="text-muted-foreground">{changeLabel}</span>
                                )}
                            </div>
                        )}
                    </div>
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", iconBgColor)}>
                        <Icon className={cn("w-6 h-6", iconColor)} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
