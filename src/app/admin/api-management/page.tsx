"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Trash2, Edit, Plus, Server, Activity, ShieldAlert } from "lucide-react";
import { toast } from "react-hot-toast";
import { TableSkeleton } from "@/components/ui/table-skeleton";

export default function AdminApiPage() {
    const [providers, setProviders] = useState<any[]>([]);
    const [logs, setLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProvider, setEditingProvider] = useState<any | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        base_url: "",
        webhook_url: "",
        api_key: "",
        secret_key: "",
        is_active: true
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [provRes, logRes] = await Promise.all([
                api.get('/admin/api-providers'),
                api.get('/admin/api-logs')
            ]);
            setProviders(provRes.data);
            setLogs(logRes.data.data); // Paginated response
        } catch (err: any) {
            if (err.response?.status === 403) {
                toast.error("Access Denied: You do not have permission to view API logs.");
            } else {
                console.error(err);
                toast.error("Failed to load API data");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingProvider) {
                await api.put(`/admin/api-providers/${editingProvider.id}`, formData);
                toast.success("Provider updated");
            } else {
                await api.post('/admin/api-providers', formData);
                toast.success("Provider created");
            }
            setIsDialogOpen(false);
            setEditingProvider(null);
            setFormData({ name: "", base_url: "", webhook_url: "", api_key: "", secret_key: "", is_active: true });
            fetchData();
        } catch (err) {
            toast.error("Operation failed");
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure? This will delete all logs associated with this provider.")) return;
        try {
            await api.delete(`/admin/api-providers/${id}`);
            toast.success("Provider deleted");
            fetchData();
        } catch (err) {
            toast.error("Failed to delete");
        }
    };

    const openEdit = (provider: any) => {
        setEditingProvider(provider);
        setFormData({
            name: provider.name,
            base_url: provider.base_url,
            webhook_url: provider.webhook_url || "",
            api_key: provider.api_key || "",
            secret_key: provider.secret_key || "",
            is_active: Boolean(provider.is_active)
        });
        setIsDialogOpen(true);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">API Management</h2>
                <p className="text-muted-foreground">Manage third-party API connections and view integration logs.</p>
            </div>

            <Tabs defaultValue="providers" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="providers" className="flex items-center gap-2">
                        <Server className="w-4 h-4" /> Providers
                    </TabsTrigger>
                    <TabsTrigger value="logs" className="flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Error Logs
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="providers">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>API Providers</CardTitle>
                                <CardDescription>Configure external services (e.g., Payment Gateways, SMS).</CardDescription>
                            </div>
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button onClick={() => { setEditingProvider(null); setFormData({ name: "", base_url: "", webhook_url: "", api_key: "", secret_key: "", is_active: true }); }}>
                                        <Plus className="w-4 h-4 mr-2" /> Add Provider
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>{editingProvider ? "Edit Provider" : "New API Provider"}</DialogTitle>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit} className="space-y-4 py-4">
                                        <div className="space-y-2">
                                            <Label>Provider Name</Label>
                                            <Input
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. Paystack"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Base URL</Label>
                                            <Input
                                                value={formData.base_url}
                                                onChange={e => setFormData({ ...formData, base_url: e.target.value })}
                                                placeholder="https://api.example.com"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Webhook URL (Optional)</Label>
                                            <Input
                                                value={formData.webhook_url}
                                                onChange={e => setFormData({ ...formData, webhook_url: e.target.value })}
                                                placeholder="https://your-site.com/api/webhook"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>API Key</Label>
                                            <PasswordInput
                                                value={formData.api_key}
                                                onChange={e => setFormData({ ...formData, api_key: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Secret Key</Label>
                                            <PasswordInput
                                                value={formData.secret_key}
                                                onChange={e => setFormData({ ...formData, secret_key: e.target.value })}
                                            />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch
                                                checked={formData.is_active}
                                                onCheckedChange={checked => setFormData({ ...formData, is_active: checked })}
                                            />
                                            <Label>Active Status</Label>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">{editingProvider ? "Update" : "create"}</Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Base URL</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {loading ? (
                                            <TableRow><TableCell colSpan={4} className="p-0"><TableSkeleton columns={4} rows={5} /></TableCell></TableRow>
                                        ) : providers.length === 0 ? (
                                            <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">No providers configured.</TableCell></TableRow>
                                        ) : (
                                            providers.map((p) => (
                                                <TableRow key={p.id}>
                                                    <TableCell className="font-medium">{p.name}</TableCell>
                                                    <TableCell className="text-muted-foreground text-xs">{p.base_url}</TableCell>
                                                    <TableCell>
                                                        <Badge variant={p.is_active ? "default" : "secondary"}>
                                                            {p.is_active ? "Active" : "Inactive"}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-right space-x-2">
                                                        <Button variant="ghost" size="icon" onClick={() => openEdit(p)}>
                                                            <Edit className="w-4 h-4" />
                                                        </Button>
                                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600" onClick={() => handleDelete(p.id)}>
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="logs">
                    <Card>
                        <CardHeader>
                            <CardTitle>System Logs</CardTitle>
                            <CardDescription>Recent API failures and integration errors.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Time</TableHead>
                                            <TableHead>Provider</TableHead>
                                            <TableHead>Endpoint</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Message</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {loading ? (
                                            <TableRow><TableCell colSpan={5} className="p-0"><TableSkeleton columns={5} rows={5} /></TableCell></TableRow>
                                        ) : logs.length === 0 ? (
                                            <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">No logs found.</TableCell></TableRow>
                                        ) : (
                                            logs.map((log) => (
                                                <TableRow key={log.id}>
                                                    <TableCell className="text-xs text-muted-foreground">
                                                        {new Date(log.created_at).toLocaleString()}
                                                    </TableCell>
                                                    <TableCell>{log.provider?.name || 'Unknown'}</TableCell>
                                                    <TableCell className="font-mono text-xs">
                                                        <span className="font-bold">{log.method}</span> {log.endpoint}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant={log.status_code >= 400 ? "destructive" : "outline"}>
                                                            {log.status_code}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="text-xs max-w-xs truncate" title={log.error_message || log.response}>
                                                        {log.error_message || log.response || "No details"}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
