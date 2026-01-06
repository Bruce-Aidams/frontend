"use client";

import { useEffect, useState } from "react";
import { Bell, Search, Menu, UserCircle, LogOut, Settings, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Input } from "@/components/ui/input";
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
import api from "@/lib/axios";

interface AdminNavbarProps {
    onMenuClick: () => void;
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
}

export function AdminNavbar({ onMenuClick, isCollapsed, onToggleCollapse }: AdminNavbarProps) {
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    const handleLogout = async () => {
        try {
            await api.post('/logout');
        } catch (e) {
            console.error(e);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            router.push('/auth/login');
        }
    };

    return (
        <header className="h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b dark:border-gray-800 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden p-2 hover:bg-accent rounded-lg text-muted-foreground transition-colors"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {onToggleCollapse && (
                    <button
                        onClick={onToggleCollapse}
                        className="hidden lg:flex p-2 hover:bg-accent rounded-lg text-muted-foreground transition-colors mr-2"
                        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                    </button>
                )}

                <div className="relative w-full max-w-md hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search products, orders..."
                        className="pl-10 h-11 bg-gray-50 border-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all rounded-xl shadow-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <ThemeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="p-2.5 text-muted-foreground hover:bg-accent rounded-xl relative transition-colors shadow-sm outline-none">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80 rounded-2xl p-2 shadow-xl border-gray-100">
                        <DropdownMenuLabel className="px-3 py-2 text-sm font-bold">Admin Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <div className="py-8 text-center">
                            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-300">
                                <Bell className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-bold text-gray-900">No new alerts</p>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-8 w-[1px] bg-gray-100 mx-1 hidden sm:block" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 pl-2 md:pl-2 group cursor-pointer outline-none">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">Administrator</p>
                                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Super Admin</p>
                            </div>
                            <Avatar className="w-10 h-10 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-all shadow-sm">
                                <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name || 'Admin'}&background=FF5722&color=fff`} />
                                <AvatarFallback className="bg-primary/10 text-primary font-bold">A</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2 shadow-xl border-gray-100">
                        <div className="p-3 flex items-center gap-3 mb-2">
                            <Avatar className="w-12 h-12 rounded-xl">
                                <AvatarImage src={`https://ui-avatars.com/api/?name=${user?.name || 'A'}&background=FF5722&color=fff`} />
                            </Avatar>
                            <div className="overflow-hidden">
                                <p className="font-bold text-sm text-gray-900 truncate">{user?.name}</p>
                                <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/admin/settings')} className="rounded-xl px-3 py-2 cursor-pointer">
                            <Settings className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="font-medium">Settings</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout} className="rounded-xl px-3 py-2 cursor-pointer text-red-500 focus:text-red-500 focus:bg-red-50">
                            <LogOut className="w-4 h-4 mr-2" />
                            <span className="font-bold">Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
