"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Bell, Send, CheckCircle, Info, AlertTriangle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Notification {
    id: number;
    title: string;
    message: string;
    type: string;
    created_at: string;
    user: User;
}

export default function AdminNotificationsPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [selectedUser, setSelectedUser] = useState<string>("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("info");
    const [sending, setSending] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [usersRes, notifRes] = await Promise.all([
                api.get('/admin/users'), // Reusing the users endpoint (needs to return all for dropdown ideally, or use autocomplete)
                api.get('/admin/notifications')
            ]);
            // Use the data array if paginated
            setUsers(usersRes.data.data || usersRes.data);
            setNotifications(notifRes.data.data || notifRes.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSend = async () => {
        if (!selectedUser || !title || !message) {
            alert("Please fill all fields");
            return;
        }

        setSending(true);
        try {
            await api.post('/admin/notifications', {
                user_id: selectedUser,
                title,
                message,
                type
            });
            alert("Notification sent successfully!");
            setTitle("");
            setMessage("");
            fetchData(); // Refresh history
        } catch (e) {
            alert("Failed to send notification");
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Notification Center</h2>
                <p className="text-muted-foreground">Send alerts and messages to users.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Send Notification Card */}
                <Card className="p-6 space-y-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Send className="w-5 h-5 text-primary" /> Compose Message
                    </h3>

                    <div className="space-y-2">
                        <Label>Recipient</Label>
                        <Select value={selectedUser} onValueChange={setSelectedUser}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a user" />
                            </SelectTrigger>
                            <SelectContent className="max-h-60">
                                <SelectItem value="all" className="font-bold text-primary">All Users</SelectItem>
                                {users.map(u => (
                                    <SelectItem key={u.id} value={String(u.id)}>
                                        {u.name} ({u.email})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Type</Label>
                        <Select value={type} onValueChange={setType}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="info">Info</SelectItem>
                                <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="warning">Warning</SelectItem>
                                <SelectItem value="error">Error</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                            placeholder="Notification subject"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Message</Label>
                        <Textarea
                            placeholder="Enter your message here..."
                            className="min-h-[100px]"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <Button className="w-full" onClick={handleSend} disabled={sending}>
                        {sending ? "Sending..." : "Send Notification"}
                    </Button>
                </Card>

                {/* History Card */}
                <Card className="p-6 space-y-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 h-fit">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Bell className="w-5 h-5 text-primary" /> Recent History
                    </h3>

                    <div className="space-y-4">
                        {loading && <p className="text-center text-muted-foreground">Loading history...</p>}
                        {!loading && notifications.length === 0 && <p className="text-center text-muted-foreground">No notifications sent yet.</p>}

                        {notifications.map((notif) => (
                            <div key={notif.id} className="flex gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                                <div className={`pt-1 ${notif.type === 'success' ? 'text-green-500' :
                                    notif.type === 'warning' ? 'text-yellow-500' :
                                        notif.type === 'error' ? 'text-red-500' : 'text-blue-500'
                                    }`}>
                                    {notif.type === 'success' ? <CheckCircle className="w-4 h-4" /> :
                                        notif.type === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
                                            <Info className="w-4 h-4" />}
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium text-sm text-slate-900 dark:text-slate-100">{notif.title}</p>
                                        <span className="text-xs text-slate-500">{new Date(notif.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{notif.message}</p>
                                    <div className="flex items-center gap-2 pt-1">
                                        <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal">
                                            To: {notif.user?.name || "Unknown"}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
