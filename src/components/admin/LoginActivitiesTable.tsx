
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TableSkeleton } from "@/components/ui/table-skeleton";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

export function LoginActivitiesTable() {
    const [logs, setLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchLogs(page);
    }, [page]);

    const fetchLogs = async (p: number) => {
        setLoading(true);
        try {
            const res = await api.get(`/admin/login-activities?page=${p}`);
            setLogs(res.data.data);
            setTotalPages(res.data.last_page);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>IP Address</TableHead>
                            <TableHead>User Agent</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="p-0">
                                    <TableSkeleton columns={4} rows={10} />
                                </TableCell>
                            </TableRow>
                        ) : logs.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center h-24">No activities found.</TableCell>
                            </TableRow>
                        ) : (
                            logs.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>
                                        <div className="font-medium">{log.user?.name}</div>
                                        <div className="text-xs text-muted-foreground">{log.user?.email}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="font-mono">{log.ip_address}</Badge>
                                    </TableCell>
                                    <TableCell className="max-w-[200px] truncate text-xs text-muted-foreground" title={log.user_agent}>
                                        {log.user_agent}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {format(new Date(log.created_at), 'PPP p')}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-end space-x-2">
                <button
                    disabled={page <= 1 || loading}
                    onClick={() => setPage(p => p - 1)}
                    className="px-3 py-1 text-sm border rounded hover:bg-slate-100 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-sm self-center">Page {page} of {totalPages}</span>
                <button
                    disabled={page >= totalPages || loading}
                    onClick={() => setPage(p => p + 1)}
                    className="px-3 py-1 text-sm border rounded hover:bg-slate-100 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
