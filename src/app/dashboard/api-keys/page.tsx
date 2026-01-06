"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
    Key,
    Plus,
    Trash2,
    Copy,
    RefreshCw,
    AlertCircle,
    CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { format } from "date-fns";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface ApiKey {
    id: number;
    name: string;
    key_preview: string;
    last_used_at: string | null;
    expires_at: string | null;
    created_at: string;
}

export default function ApiKeysPage() {
    const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newKeyName, setNewKeyName] = useState("");
    const [newKeyValue, setNewKeyValue] = useState("");
    const [expiresInDays, setExpiresInDays] = useState<number>(365);

    useEffect(() => {
        loadApiKeys();
    }, []);

    const loadApiKeys = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_URL}/api-keys`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setApiKeys(response.data.api_keys);
        } catch (error) {
            console.error("Failed to load API keys:", error);
            toast.error("Failed to load API keys");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateKey = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                `${API_URL}/api-keys`,
                { name: newKeyName, expires_in_days: expiresInDays },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setNewKeyValue(response.data.api_key);
            setNewKeyName("");
            setExpiresInDays(365);
            loadApiKeys();
            toast.success("API key created successfully!");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Failed to create API key");
            } else {
                toast.error("An error occurred");
            }
        }
    };

    const handleRevokeKey = async (id: number) => {
        if (!confirm("Are you sure you want to revoke this API key? This action cannot be undone.")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await axios.delete(`${API_URL}/api-keys/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("API key revoked");
            loadApiKeys();
        } catch (error) {
            toast.error("Failed to revoke API key");
        }
    };

    const handleRegenerateKey = async (id: number) => {
        if (!confirm("Are you sure you want to regenerate this API key? The old key will stop working.")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                `${API_URL}/api-keys/${id}/regenerate`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewKeyValue(response.data.api_key);
            toast.success("API key regenerated");
            loadApiKeys();
        } catch (error) {
            toast.error("Failed to regenerate API key");
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto space-y-8"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary">API Keys</h2>
                    <p className="text-muted-foreground font-medium">Manage your API keys for programmatic access</p>
                </div>
                <Button
                    onClick={() => setShowCreateForm(!showCreateForm)}
                    className="rounded-xl shadow-md"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Create API Key
                </Button>
            </div>

            {/* New Key Display */}
            {newKeyValue && (
                <Card className="sneat-card border-green-200 bg-green-50">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-green-700">
                            <CheckCircle2 className="w-5 h-5" />
                            API Key Created Successfully
                        </CardTitle>
                        <CardDescription className="text-green-600">
                            Please copy this key now. You won't be able to see it again!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <Input
                                value={newKeyValue}
                                readOnly
                                className="font-mono text-sm bg-white"
                            />
                            <Button
                                onClick={() => copyToClipboard(newKeyValue)}
                                variant="outline"
                                className="shrink-0"
                            >
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                        <Button
                            onClick={() => setNewKeyValue("")}
                            variant="ghost"
                            size="sm"
                            className="mt-4"
                        >
                            I've saved my key
                        </Button>
                    </CardContent>
                </Card>
            )}

            {/* Create Form */}
            {showCreateForm && !newKeyValue && (
                <Card className="sneat-card border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Create New API Key</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleCreateKey} className="space-y-4">
                            <div className="space-y-2">
                                <Label>Key Name</Label>
                                <Input
                                    value={newKeyName}
                                    onChange={(e) => setNewKeyName(e.target.value)}
                                    placeholder="e.g., Production API, Development"
                                    required
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Expires In (Days)</Label>
                                <Input
                                    type="number"
                                    value={expiresInDays}
                                    onChange={(e) => setExpiresInDays(parseInt(e.target.value))}
                                    min={1}
                                    max={365}
                                    className="rounded-xl"
                                />
                                <p className="text-xs text-muted-foreground">
                                    Leave as 365 for one year expiration
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit" className="rounded-xl">
                                    Generate Key
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setShowCreateForm(false)}
                                    className="rounded-xl"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}

            {/* API Keys List */}
            <Card className="sneat-card border-none shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Key className="w-5 h-5 text-primary" />
                        Your API Keys
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {loading ? (
                        <p className="text-center text-muted-foreground py-8">Loading...</p>
                    ) : apiKeys.length === 0 ? (
                        <div className="text-center py-8">
                            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">No API keys yet. Create one to get started!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {apiKeys.map((key) => (
                                <div
                                    key={key.id}
                                    className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="font-semibold">{key.name}</h3>
                                            {key.expires_at && new Date(key.expires_at) < new Date() && (
                                                <Badge className="bg-red-100 text-red-700">Expired</Badge>
                                            )}
                                        </div>
                                        <p className="text-sm font-mono text-muted-foreground mb-1">
                                            {key.key_preview}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                            <span>Created: {format(new Date(key.created_at), "MMM dd, yyyy")}</span>
                                            {key.last_used_at && (
                                                <span>Last used: {format(new Date(key.last_used_at), "MMM dd, yyyy")}</span>
                                            )}
                                            {key.expires_at && (
                                                <span>Expires: {format(new Date(key.expires_at), "MMM dd, yyyy")}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleRegenerateKey(key.id)}
                                            className="rounded-lg"
                                        >
                                            <RefreshCw className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleRevokeKey(key.id)}
                                            className="rounded-lg"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Documentation */}
            <Card className="sneat-card border-none shadow-sm bg-blue-50">
                <CardHeader>
                    <CardTitle className="text-lg text-blue-900">API Documentation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-blue-800 space-y-4">
                    <div>
                        <p className="font-bold mb-1">Authentication</p>
                        <p className="mb-2">Include your API key in the Authorization header. The key format is <code>ID|KEY</code>.</p>
                        <pre className="bg-white p-3 rounded-lg border border-blue-200 overflow-x-auto text-xs">
                            <code>Authorization: Bearer 123|sk_production_...</code>
                        </pre>
                    </div>

                    <div>
                        <p className="font-bold mb-1">Place Order Endpoint</p>
                        <p className="mb-2">Send a POST request to create a new order.</p>
                        <pre className="bg-white p-3 rounded-lg border border-blue-200 overflow-x-auto text-xs">
                            <code>{`curl -X POST ${API_URL}/v1/place-order \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "bundle_id": 5,
    "recipient_phone": "054xxxxxxx"
  }'`}</code>
                        </pre>
                    </div>

                    <div>
                        <p className="font-bold mb-1">Get Products</p>
                        <p className="mb-2">Fetch available bundles to get their IDs.</p>
                        <pre className="bg-white p-3 rounded-lg border border-blue-200 overflow-x-auto text-xs">
                            <code>{`curl ${API_URL}/products`}</code>
                        </pre>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
