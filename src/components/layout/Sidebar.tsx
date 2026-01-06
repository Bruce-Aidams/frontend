"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ShoppingCart,
    Wallet,
    Users,
    Settings,
    LogOut,
    Package,
    History,
    Gift,
    X,
    Activity,
    CreditCard,
    Key
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Analytics", href: "/dashboard/analytics", icon: Activity },
    { name: "Buy Data", href: "/dashboard/orders/new", icon: ShoppingCart },
    { name: "My Orders", href: "/dashboard/orders", icon: Package },
    { name: "Wallet", href: "/dashboard/wallet", icon: Wallet },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Referrals & Earnings", href: "/dashboard/commissions", icon: Users },
    { name: "Transactions", href: "/dashboard/transactions", icon: History },
    { name: "API Keys", href: "/dashboard/api-keys", icon: Key },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

export function Sidebar({ isOpen, onClose, isCollapsed, onToggleCollapse }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className={cn(
            "h-screen bg-card dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300 transform",
            isCollapsed ? "w-20" : "w-64",
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
            <div className={cn("flex items-center justify-between", isCollapsed ? "p-4 justify-center" : "p-6")}>
                <Link href="/dashboard" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                        C
                    </div>
                    {!isCollapsed && <span className="text-xl font-bold tracking-tight animate-in fade-in duration-300">Cloud Tech</span>}
                </Link>
                {!isCollapsed && (
                    <button
                        onClick={onClose}
                        className="lg:hidden p-2 text-muted-foreground hover:bg-accent rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
            </div>

            <nav className={cn("flex-1 px-4 py-4 space-y-1 overflow-y-auto", isCollapsed && "px-2")}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "sneat-sidebar-item transition-all duration-300",
                                isCollapsed && "justify-center px-0 h-12 w-12 mx-auto rounded-xl",
                                isActive ? "active" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                            title={isCollapsed ? item.name : ""}
                        >
                            <item.icon className={cn("w-5 h-5 shrink-0", isCollapsed && "w-6 h-6")} />
                            {!isCollapsed && <span className="animate-in slide-in-from-left-2 duration-300">{item.name}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className={cn("p-4 border-t bg-gray-50/50 transition-all", isCollapsed && "p-2")}>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        window.location.href = '/auth/login';
                    }}
                    className={cn(
                        "sneat-sidebar-item text-red-500 hover:bg-red-50 transition-all duration-300",
                        isCollapsed ? "justify-center px-0 h-12 w-12 mx-auto rounded-xl" : "w-full flex items-center gap-3"
                    )}
                    title={isCollapsed ? "Logout" : ""}
                >
                    <LogOut className={cn("w-5 h-5 shrink-0", isCollapsed && "w-6 h-6")} />
                    {!isCollapsed && <span className="font-semibold animate-in slide-in-from-left-2 duration-300">Logout</span>}
                </button>
            </div>
        </aside>
    );
}
