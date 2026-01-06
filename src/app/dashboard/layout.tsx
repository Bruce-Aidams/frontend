"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    // Authentication Guard
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/auth/login";
        } else {
            setIsAuthenticated(true);
        }
    }, [pathname]);

    // Load compact sidebar preference from localStorage
    useEffect(() => {
        const savedCompactMode = localStorage.getItem("compact_sidebar");
        if (savedCompactMode === "true") {
            setIsCollapsed(true);
        }

        // Listen for storage changes (from settings page)
        const handleStorageChange = () => {
            const newCompactMode = localStorage.getItem("compact_sidebar");
            setIsCollapsed(newCompactMode === "true");
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        Promise.resolve().then(() => setSidebarOpen(false));
    }, [pathname]);

    // Save compact mode preference
    const handleToggleCollapse = () => {
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem("compact_sidebar", newState.toString());
    };

    if (!isAuthenticated) return (
        <div className="min-h-screen bg-[#f5f5f9] dark:bg-gray-950 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f5f5f9] dark:bg-gray-950 overflow-x-hidden">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                isCollapsed={isCollapsed}
                onToggleCollapse={handleToggleCollapse}
            />

            <div className={cn(
                "flex flex-col min-h-screen transition-all duration-300",
                isCollapsed ? "lg:pl-20" : "lg:pl-64"
            )}>
                <Header
                    onMenuClick={() => setSidebarOpen(true)}
                    isCollapsed={isCollapsed}
                    onToggleCollapse={handleToggleCollapse}
                />
                <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-x-hidden">
                    <div className="max-w-full mx-auto">
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
    );
}
