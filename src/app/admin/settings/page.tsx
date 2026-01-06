"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Save, Shield, Globe, Bell, DollarSign, Activity } from "lucide-react";
import { LoginActivitiesTable } from "@/components/admin/LoginActivitiesTable";


export default function SettingsPage() {
    const [showKey, setShowKey] = useState(false);
    const [settings, setSettings] = useState({
        site_name: '',
        support_email: '',
        maintenance_mode: false,
        paystack_public: '',
        paystack_secret: '',
        email_alerts_order: false,
        sms_alerts_system: false,
        min_payment: '1',
        max_payment: '50000',
        charge_type: 'percentage',
        charge_value: '0',
        bank_name: '',
        bank_account_name: '',
        bank_account_number: '',
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.get('/admin/settings')
            .then(res => {
                const data = res.data;
                const safeSettings = { ...settings };
                (Object.keys(settings) as Array<keyof typeof settings>).forEach(key => {
                    const typedKey = key as keyof typeof settings;
                    if (data[key] !== undefined) {
                        (safeSettings as any)[typedKey] = data[key] ?? (typeof settings[typedKey] === 'boolean' ? false : '');
                    }
                });
                setSettings(safeSettings);
            })
            .catch((err: any) => {
                console.error("Failed to load settings", err);
                if (err.response?.status === 403) {
                    // Handle permission error silently or show a toast
                    // toast.error("Access Denied: Settings");
                }
            });
    }, []);

    const handleChange = (key: string, value: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            // Convert boolean to string if backend expects strings (Settings table usually text) 
            // But logic handles it. Let's send as is, backend should cast or store json.
            // Actually Setting model is key/value pairs (strings).
            const payload = Object.entries(settings).reduce((acc, [k, v]) => {
                acc[k] = typeof v === 'boolean' ? (v ? '1' : '0') : v;
                return acc;
            }, {} as any);

            await api.post('/admin/settings', { settings: payload });
            alert("Settings saved successfully!");
        } catch (e) {
            alert("Failed to save settings.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Settings</h2>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="general" className="gap-2"><Globe className="w-4 h-4" /> General</TabsTrigger>
                    <TabsTrigger value="security" className="gap-2"><Shield className="w-4 h-4" /> Security & APIs</TabsTrigger>
                    <TabsTrigger value="financials" className="gap-2"><DollarSign className="w-4 h-4" /> Financials</TabsTrigger>
                    <TabsTrigger value="logs" className="gap-2"><Activity className="w-4 h-4" /> Logs & Cleanup</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                    <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)]">
                        <CardHeader>
                            <CardTitle>General Configuration</CardTitle>
                            <CardDescription>Manage your site basic information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="site_name">Site Name</Label>
                                <Input
                                    id="site_name"
                                    value={settings.site_name}
                                    onChange={(e) => handleChange('site_name', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="support_email">Support Email</Label>
                                <Input
                                    id="support_email"
                                    type="email"
                                    value={settings.support_email}
                                    onChange={(e) => handleChange('support_email', e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-4 shadow-xs">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Maintenance Mode</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Disable access to the site for maintenance.
                                    </p>
                                </div>
                                <Switch
                                    checked={Boolean(Number(settings.maintenance_mode))}
                                    onCheckedChange={(c) => handleChange('maintenance_mode', c)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-2" onClick={handleSave} disabled={loading}>
                                {loading ? 'Saving...' : <><Save className="w-4 h-4" /> Save Changes</>}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="security">
                    <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)]">
                        <CardHeader>
                            <CardTitle>API Configuration</CardTitle>
                            <CardDescription>Manage third-party API keys and secrets.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium text-muted-foreground">Paystack Settings</h3>
                                <div className="grid gap-2">
                                    <Label htmlFor="paystack_public">Public Key</Label>
                                    <Input
                                        id="paystack_public"
                                        placeholder="pk_test_..."
                                        value={settings.paystack_public}
                                        onChange={(e) => handleChange('paystack_public', e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="paystack_secret">Secret Key</Label>
                                    <div className="relative">
                                        <Input
                                            id="paystack_secret"
                                            type={showKey ? "text" : "password"}
                                            placeholder="sk_test_..."
                                            value={settings.paystack_secret}
                                            onChange={(e) => handleChange('paystack_secret', e.target.value)}
                                            className="pr-10"
                                        />
                                        <button
                                            onClick={() => setShowKey(!showKey)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                            type="button"
                                        >
                                            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-2" onClick={handleSave} disabled={loading}>
                                {loading ? 'Saving...' : <><Save className="w-4 h-4" /> Update Keys</>}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="financials">
                    <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)]">
                        <CardHeader>
                            <CardTitle>Financial Settings</CardTitle>
                            <CardDescription>Set limits and transaction charges.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="min_payment">Minimum Payment (GHS)</Label>
                                    <Input
                                        id="min_payment"
                                        type="number"
                                        value={settings.min_payment}
                                        onChange={(e) => handleChange('min_payment', e.target.value)}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="max_payment">Maximum Payment (GHS)</Label>
                                    <Input
                                        id="max_payment"
                                        type="number"
                                        value={settings.max_payment}
                                        onChange={(e) => handleChange('max_payment', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Charges Management</h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <Label>Charge Type</Label>
                                        <select
                                            value={settings.charge_type}
                                            onChange={(e) => handleChange('charge_type', e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            <option value="percentage">Percentage (%)</option>
                                            <option value="fixed">Fixed Amount (GHS)</option>
                                        </select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label>Charge Value</Label>
                                        <Input
                                            type="number"
                                            value={settings.charge_value}
                                            onChange={(e) => handleChange('charge_value', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic">
                                    * These charges are added to the total amount the user pays through Paystack or Wallet top-up.
                                </p>
                            </div>

                            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Bank Details (Manual Deposits)</h3>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="bank_name">Bank Name</Label>
                                        <Input
                                            id="bank_name"
                                            value={settings.bank_name}
                                            onChange={(e) => handleChange('bank_name', e.target.value)}
                                            placeholder="e.g. GCB Bank, Mobile Money"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="bank_account_name">Account Name</Label>
                                            <Input
                                                id="bank_account_name"
                                                value={settings.bank_account_name}
                                                onChange={(e) => handleChange('bank_account_name', e.target.value)}
                                                placeholder="e.g. MEGA AI SOLUTIONS"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="bank_account_number">Account Number</Label>
                                            <Input
                                                id="bank_account_number"
                                                value={settings.bank_account_number}
                                                onChange={(e) => handleChange('bank_account_number', e.target.value)}
                                                placeholder="e.g. 0123456789"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-muted-foreground italic">
                                    * These details will be shown to users when they choose the manual deposit option.
                                </p>
                            </div>

                        </CardContent>
                        <CardFooter>
                            <Button className="gap-2" onClick={handleSave} disabled={loading}>
                                {loading ? 'Saving...' : <><Save className="w-4 h-4" /> Save Financials</>}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications">
                    <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)]">
                        <CardHeader>
                            <CardTitle>Notification Settings</CardTitle>
                            <CardDescription>Configure how the system sends alerts.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Email Alerts (Orders)</Label>
                                    <p className="text-sm text-muted-foreground">Receive emails for new orders.</p>
                                </div>
                                <Switch
                                    checked={Boolean(Number(settings.email_alerts_order))}
                                    onCheckedChange={(c) => handleChange('email_alerts_order', c)}
                                />
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">SMS Alerts (Systems)</Label>
                                    <p className="text-sm text-muted-foreground">Receive critical system alerts via SMS.</p>
                                </div>
                                <Switch
                                    checked={Boolean(Number(settings.sms_alerts_system))}
                                    onCheckedChange={(c) => handleChange('sms_alerts_system', c)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="gap-2" onClick={handleSave} disabled={loading}>
                                {loading ? 'Saving...' : <><Save className="w-4 h-4" /> Save Preferences</>}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="logs">
                    <div className="space-y-6">
                        <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)] border-l-4 border-l-red-500">
                            <CardHeader>
                                <CardTitle className="text-red-500">Danger Zone: Cleanup</CardTitle>
                                <CardDescription>Irreversible actions. Proceed with caution.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-end gap-4 p-4 border border-red-100 bg-red-50/50 rounded-lg">
                                    <div className="grid gap-2 w-full max-w-xs">
                                        <Label>Delete Completed Orders Older Than (Days)</Label>
                                        <Input
                                            type="number"
                                            placeholder="e.g. 30"
                                            id="cleanup_days"
                                        />
                                    </div>
                                    <Button variant="destructive" onClick={async () => {
                                        const days = (document.getElementById('cleanup_days') as HTMLInputElement).value;
                                        if (!days) return alert("Please enter days");
                                        if (!confirm(`Are you sure you want to delete orders older than ${days} days?`)) return;

                                        try {
                                            const res = await api.post('/admin/delete-old-orders', { days: parseInt(days) });
                                            alert(res.data.message);
                                        } catch (e) {
                                            alert("Failed to delete orders.");
                                        }
                                    }}>
                                        Delete Estimates
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-[0_2px_10px_0_rgba(67,89,113,0.12)]">
                            <CardHeader>
                                <CardTitle>User Login Activities</CardTitle>
                                <CardDescription>Recent login sessions from all users.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <LoginActivitiesTable />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
