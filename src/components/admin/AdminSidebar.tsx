"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Home,
    ShoppingCart,
    Package,
    Users,
    Settings,
    Landmark,
    LogOut,
    X,
    CreditCard,
    Bell,
    Server,
    Signal,
    TrendingUp,
} from "lucide-react";


interface AdminSidebarProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
}

const menuItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Inventory", href: "/admin/products", icon: Signal }, // Changed "Products" to "Inventory" and icon to Signal
    { name: "Financials & Reports", href: "/admin/financials", icon: TrendingUp }, // Added new item
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "API Management", href: "/admin/api-management", icon: Server },
    { name: "Analytics", href: "/admin/analytics", icon: LayoutDashboard },
    { name: "Financials", href: "/admin/transactions", icon: Landmark },
    { name: 'Deposits', href: '/admin/deposits', icon: CreditCard },
    { name: 'Payout Requests', href: '/admin/payouts', icon: Landmark },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
    { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar({ isOpen, setIsOpen, isCollapsed = false, onToggleCollapse }: AdminSidebarProps) {
    const pathname = usePathname();

    return (
        <aside className={cn(
            "h-screen bg-card dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col fixed left-0 top-0 z-50 transition-all duration-300 transform",
            isCollapsed ? "w-20" : "w-64",
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
            <div className={cn("flex items-center justify-between", isCollapsed ? "p-4 justify-center" : "h-20 px-6")}>
                <Link href="/admin" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0">
                        A
                    </div>
                    {!isCollapsed && <span className="text-xl font-bold tracking-tight animate-in fade-in duration-300 text-slate-800 dark:text-slate-100">CloudTech Admin</span>}
                </Link>
                {!isCollapsed && (
                    <button
                        onClick={() => setIsOpen(false)}
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
                                isCollapsed ? "justify-center px-0 h-12 w-12 mx-auto rounded-xl" : "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium",
                                isActive
                                    ? "bg-primary/10 text-primary shadow-sm"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                            title={isCollapsed ? item.name : ""}
                            onClick={() => setIsOpen(false)}
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
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-red-500 hover:bg-red-50",
                        isCollapsed ? "justify-center px-0 h-12 w-12 mx-auto rounded-xl" : "w-full"
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
