
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TableSkeleton } from "@/components/ui/table-skeleton";

interface Agent {
    id: number;
    name: string;
    email: string;
    role: string;
    wallet_balance: number;
    total_orders: number;
    completed_orders: number;
    total_spent: number;
}

export function AgentPerformanceTable({ agents, loading }: { agents: Agent[], loading: boolean }) {
    return (
        <Card className="col-span-4 lg:col-span-4 border-none shadow-sm bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
            <CardHeader>
                <CardTitle>Top Performing Agents</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Agent</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Orders (Completed)</TableHead>
                                <TableHead>Total Volume</TableHead>
                                <TableHead className="text-right">Balance</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="p-0">
                                        <TableSkeleton columns={5} rows={5} />
                                    </TableCell>
                                </TableRow>
                            ) : agents.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">No agents found.</TableCell>
                                </TableRow>
                            ) : (
                                agents.map((agent) => (
                                    <TableRow key={agent.id}>
                                        <TableCell>
                                            <div className="font-medium">{agent.name}</div>
                                            <div className="text-xs text-muted-foreground">{agent.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="capitalize">{agent.role}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            {agent.completed_orders} <span className="text-muted-foreground text-xs">/ {agent.total_orders}</span>
                                        </TableCell>
                                        <TableCell>
                                            GHS {Number(agent.total_spent).toLocaleString()}
                                        </TableCell>
                                        <TableCell className="text-right font-bold">
                                            GHS {Number(agent.wallet_balance).toLocaleString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
