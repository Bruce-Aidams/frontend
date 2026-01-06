"use client";

import { useEffect, useState } from "react";
import { Bell, Search, Menu, UserCircle, LogOut, Settings, User, CreditCard, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface HeaderProps {
    onMenuClick: () => void;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
}

export function Header({ onMenuClick, isCollapsed, onToggleCollapse }: HeaderProps) {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const router = useRouter();
    const [notifications, setNotifications] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const parsed = JSON.parse(userData);
                setUser(parsed);

                // Fetch Notifications
                const fetchNotifs = async () => {
                    try {
                        const { default: api } = await import("@/lib/axios");
                        const res = await api.get('/notifications');
                        setNotifications(res.data);
                    } catch (e: any) {
                        console.error("Failed to fetch notifications", e);
                        // If 403 Forbidden (Suspended), Logout
                        if (e.response && e.response.status === 403) {
                            localStorage.removeItem('token');
                            localStorage.removeItem('user');
                            router.push('/auth/login');
                        }
                    }
                };
                fetchNotifs();
            } catch (e) {
                console.error("Failed to parse user", e);
            }
        }
    }, [router]);

    const handleToggleRead = async (id: number) => {
        try {
            const { default: api } = await import("@/lib/axios");
            const res = await api.put(`/notifications/${id}/read`);
            setNotifications(prev => prev.map(n =>
                n.id === id ? { ...n, is_read: res.data.is_read } : n
            ));
        } catch (e) {
            console.error("Failed to toggle notification status", e);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/auth/login');
    };

    const unreadCount = notifications.filter(n => !n.is_read).length;

    if (!mounted) {
        return (
            <header className="h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
                <div className="flex-1" />
            </header>
        );
    }

    return (
        <header className="h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-accent rounded-lg text-muted-foreground transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <button
                    onClick={onToggleCollapse}
                    className="hidden lg:flex p-2 hover:bg-accent rounded-lg text-muted-foreground transition-colors mr-2"
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>

                <div className="relative w-full max-w-md hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search orders (e.g. MTN, 054...)"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                router.push(`/dashboard/orders?search=${e.currentTarget.value}`);
                            }
                        }}
                        className="pl-10 h-11 bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-xl shadow-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <ThemeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors shadow-sm outline-none group">
                            <Bell className="w-5 h-5 group-hover:text-foreground transition-colors" />
                            {unreadCount > 0 ? (
                                <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border-2 border-white"></span>
                                </span>
                            ) : (
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            )}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2 shadow-xl border-gray-100 dark:border-slate-800">
                        <DropdownMenuLabel className="px-3 py-2 text-sm font-bold flex justify-between items-center">
                            <span>Notifications</span>
                            {unreadCount > 0 && <span className="text-xs font-normal text-muted-foreground">{unreadCount} unread</span>}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="max-h-[300px] overflow-y-auto">
                            {notifications.length === 0 ? (
                                <div className="py-8 text-center">
                                    <div className="w-12 h-12 bg-gray-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-300">
                                        <Bell className="w-6 h-6" />
                                    </div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-slate-200">No new alerts</p>
                                    <p className="text-xs text-muted-foreground">We&apos;ll notify you when something happens.</p>
                                </div>
                            ) : (
                                notifications.map((notif) => (
                                    <DropdownMenuItem
                                        key={notif.id}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleToggleRead(notif.id);
                                        }}
                                        className="p-3 cursor-pointer flex flex-col items-start gap-1 hover:bg-accent/50 transition-colors"
                                    >
                                        <div className="flex justify-between w-full items-start gap-2">
                                            <div className="flex items-start gap-2">
                                                {!notif.is_read && (
                                                    <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                                )}
                                                <span className={cn(
                                                    "font-semibold text-sm leading-none",
                                                    !notif.is_read ? "text-primary" : "text-foreground"
                                                )}>
                                                    {notif.title}
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground whitespace-nowrap">{new Date(notif.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <p className={cn(
                                            "text-xs line-clamp-2 pl-4",
                                            !notif.is_read ? "text-foreground/80" : "text-muted-foreground"
                                        )}>
                                            {notif.message}
                                        </p>
                                    </DropdownMenuItem>
                                ))
                            )}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-8 w-[1px] bg-gray-100 mx-1 hidden sm:block" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 pl-2 md:pl-2 group cursor-pointer outline-none">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{user?.name || "Member"}</p>
                                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">User Account</p>
                            </div>
                            <Avatar className="w-10 h-10 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all shadow-sm">
                                <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name || 'M'}&background=696cff&color=fff`} />
                                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                    {user?.name?.charAt(0) || "M"}
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2 shadow-xl border-gray-100">
                        <div className="p-3 flex items-center gap-3 mb-2">
                            <Avatar className="w-12 h-12 rounded-xl">
                                <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name || 'M'}&background=696cff&color=fff`} />
                            </Avatar>
                            <div className="overflow-hidden">
                                <p className="font-bold text-sm text-gray-900 truncate">{user?.name}</p>
                                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/dashboard/profile')} className="rounded-xl px-3 py-2 cursor-pointer">
                            <User className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="font-medium">My Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push('/dashboard/settings')} className="rounded-xl px-3 py-2 cursor-pointer">
                            <Settings className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="font-medium">Account Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push('/dashboard/billing')} className="rounded-xl px-3 py-2 cursor-pointer">
                            <CreditCard className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="font-medium">Billing Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="rounded-xl px-3 py-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50">
                            <LogOut className="w-4 h-4 mr-2" />
                            <span className="font-bold">Logout Session</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
