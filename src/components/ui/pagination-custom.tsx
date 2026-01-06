"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isLoading?: boolean;
}

export function Pagination({ currentPage, totalPages, onPageChange, isLoading }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-between px-8 py-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-white/20 dark:border-slate-800/50">
            <div className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-60">
                Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1 || isLoading}
                    className="h-8 w-8 rounded-lg"
                >
                    <ChevronsLeft className="w-4 h-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1 || isLoading}
                    className="h-8 w-8 rounded-lg"
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-1 mx-2">
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                        // Simple logic to show pages around current
                        let pageNum = currentPage;
                        if (currentPage <= 3) pageNum = i + 1;
                        else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                        else pageNum = currentPage - 2 + i;

                        if (pageNum > 0 && pageNum <= totalPages) {
                            return (
                                <Button
                                    key={pageNum}
                                    variant={currentPage === pageNum ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => onPageChange(pageNum)}
                                    disabled={isLoading}
                                    className="h-8 w-8 rounded-lg font-black text-[10px]"
                                >
                                    {pageNum}
                                </Button>
                            );
                        }
                        return null;
                    })}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || isLoading}
                    className="h-8 w-8 rounded-lg"
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPageChange(totalPages)}
                    disabled={currentPage === totalPages || isLoading}
                    className="h-8 w-8 rounded-lg"
                >
                    <ChevronsRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
