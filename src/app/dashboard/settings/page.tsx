"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { PasswordStrength } from "@/components/ui/password-strength";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lock, Bell, Eye, EyeOff, Globe, Moon, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import axios from "axios";
import { useTheme } from "next-themes";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface UserSettings {
    email_notifications?: boolean;
    sms_notifications?: boolean;
    dark_mode?: boolean;
    compact_sidebar?: boolean;
}

export default function SettingsPage() {
    const [loading, setLoading] = useState(false);
    const [settings, setSettings] = useState<UserSettings>({});
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Password form state
    const [passwordForm, setPasswordForm] = useState({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Load user settings
    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API_URL}/user/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setSettings(response.data.settings || {});
        } catch (error) {
            console.error("Failed to load settings:", error);
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordForm.new_password !== passwordForm.new_password_confirmation) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            await axios.put(`${API_URL}/user/password`, passwordForm, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Password updated successfully!");
            setPasswordForm({
                current_password: "",
                new_password: "",
                new_password_confirmation: "",
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Failed to update password");
            } else {
                toast.error("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSettingChange = async (key: keyof UserSettings, value: boolean) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);

        try {
            const token = localStorage.getItem("token");
            await axios.put(`${API_URL}/user/settings`, { [key]: value }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Setting updated");

            // Apply settings immediately
            if (key === "compact_sidebar") {
                localStorage.setItem("compact_sidebar", value.toString());
                window.dispatchEvent(new Event("storage"));
            }
        } catch (error) {
            console.error("Failed to update setting:", error);
            toast.error("Failed to update setting");
            // Revert on error
            setSettings(settings);
        }
    };

    const handleDeactivateAccount = async () => {
        const password = prompt("Enter your password to confirm account deactivation:");
        if (!password) return;

        const confirmation = prompt('Type "DELETE" to confirm:');
        if (confirmation !== "DELETE") {
            toast.error("Confirmation failed");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await axios.post(`${API_URL}/user/deactivate`,
                { password, confirmation },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            toast.success("Account deactivated");
            localStorage.clear();
            window.location.href = "/auth/login";
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Failed to deactivate account");
            } else {
                toast.error("An error occurred");
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
        >
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary">Settings</h2>
                <p className="text-muted-foreground font-medium">Fine-tune your account preferences and security configuration.</p>
            </div>

            <div className="grid gap-8">
                <Card className="sneat-card border-none shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Lock className="w-5 h-5 text-primary" />
                            Security & Password
                        </CardTitle>
                        <CardDescription>Change your password and manage security sessions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleUpdatePassword} className="space-y-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Current Password</Label>
                                    <PasswordInput
                                        value={passwordForm.current_password}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, current_password: e.target.value })}
                                        className="rounded-xl bg-gray-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">New Password</Label>
                                    <PasswordInput
                                        value={passwordForm.new_password}
                                        onChange={(e) => setPasswordForm({ ...passwordForm, new_password: e.target.value })}
                                        className="rounded-xl bg-gray-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20"
                                        required
                                        minLength={8}
                                    />
                                    <PasswordStrength password={passwordForm.new_password} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Confirm New Password</Label>
                                <PasswordInput
                                    value={passwordForm.new_password_confirmation}
                                    onChange={(e) => setPasswordForm({ ...passwordForm, new_password_confirmation: e.target.value })}
                                    className="rounded-xl bg-gray-50 border-none focus:bg-white focus:ring-1 focus:ring-primary/20"
                                    required
                                    minLength={8}
                                />
                            </div>
                            <Button type="submit" disabled={loading} className="rounded-xl px-8 shadow-md">
                                {loading ? "Updating..." : "Update Password"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="sneat-card border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Bell className="w-5 h-5 text-primary" />
                                Notifications
                            </CardTitle>
                            <CardDescription>Choose what updates you want to receive.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-bold">Email Notifications</Label>
                                    <p className="text-[11px] text-muted-foreground">Receive order receipt and wallet alerts via email.</p>
                                </div>
                                <Switch
                                    checked={settings.email_notifications ?? true}
                                    onCheckedChange={(checked) => handleSettingChange("email_notifications", checked)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-bold">SMS Alerts</Label>
                                    <p className="text-[11px] text-muted-foreground">Get instant SMS updates for failed transactions.</p>
                                </div>
                                <Switch
                                    checked={settings.sms_notifications ?? false}
                                    onCheckedChange={(checked) => handleSettingChange("sms_notifications", checked)}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="sneat-card border-none shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary" />
                                Appearance
                            </CardTitle>
                            <CardDescription>Customize your dashboard experience.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-bold flex items-center gap-2">
                                        <Moon className="w-4 h-4" /> Dark Mode
                                    </Label>
                                    <p className="text-[11px] text-muted-foreground">Switch to a darker theme for night use.</p>
                                </div>
                                {mounted && (
                                    <Switch
                                        checked={theme === "dark"}
                                        onCheckedChange={(checked) => {
                                            setTheme(checked ? "dark" : "light");
                                            toast.success(`Theme changed to ${checked ? "dark" : "light"} mode`);
                                        }}
                                    />
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className="text-sm font-bold">Compact Sidebar</Label>
                                    <p className="text-[11px] text-muted-foreground">Always keep the sidebar in collapsed mode.</p>
                                </div>
                                <Switch
                                    checked={settings.compact_sidebar ?? false}
                                    onCheckedChange={(checked) => handleSettingChange("compact_sidebar", checked)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="sneat-card border-none shadow-sm bg-red-50 border-red-100">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold text-red-600 flex items-center gap-2 uppercase tracking-widest">
                            <AlertTriangle className="w-4 h-4" />
                            Danger Zone
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-red-900">Deactivate Account</p>
                            <p className="text-xs text-red-600/80">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                        <Button
                            variant="destructive"
                            className="rounded-xl shadow-lg shadow-red-200"
                            onClick={handleDeactivateAccount}
                        >
                            Delete Account
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}
