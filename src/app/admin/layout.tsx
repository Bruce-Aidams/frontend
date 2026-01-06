"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import dynamic from 'next/dynamic';

const AdminNavbar = dynamic(() => import('@/components/admin/AdminNavbar').then(mod => mod.AdminNavbar), { ssr: false });

import { ThemeProvider } from "@/components/theme-provider";
import { ClientSideAdminGuard } from "@/components/admin/AdminGuard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="admin-theme"
        >
            <ClientSideAdminGuard>
                <div className="min-h-screen bg-[#f5f5f9] dark:bg-gray-950 overflow-x-hidden">
                    <AdminSidebar
                        isOpen={sidebarOpen}
                        setIsOpen={setSidebarOpen}
                        isCollapsed={isCollapsed}
                        onToggleCollapse={handleToggleCollapse}
                    />

                    <div className={`flex flex-col min-h-screen transition-all duration-300 ${isCollapsed ? "lg:pl-20" : "lg:pl-64"}`}>
                        <AdminNavbar
                            onMenuClick={() => setSidebarOpen(true)}
                            isCollapsed={isCollapsed}
                            onToggleCollapse={handleToggleCollapse}
                        />

                        <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-x-hidden">
                            <div className="max-w-7xl mx-auto">
                                {children}
                            </div>
                        </main>
                    </div>

                    {/* Overlay for mobile */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm animate-in fade-in duration-300"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}
                </div>
            </ClientSideAdminGuard>
        </ThemeProvider>
    );
}
