"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Calendar, ShieldCheck, Edit2, Save, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { toast } from "sonner";
import api from "@/lib/axios";

export default function ProfilePage() {
    const [user, setUser] = useState<{ name: string; email: string; role: string; created_at: string; two_factor_enabled: boolean } | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser((prev) => prev?.email === parsedUser.email ? prev : parsedUser);
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }, []);

    const handleSave = () => {
        setIsEditing(false);
        toast.success("Profile updated successfully!");
    };

    if (!user) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary">My Profile</h2>
                    <p className="text-muted-foreground font-medium">Manage your personal information and account security.</p>
                </div>
                <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className="rounded-xl shadow-sm"
                >
                    {isEditing ? (
                        <><Save className="w-4 h-4 mr-2" /> Save Changes</>
                    ) : (
                        <><Edit2 className="w-4 h-4 mr-2" /> Edit Profile</>
                    )}
                </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                <Card className="sneat-card border-none shadow-sm h-fit">
                    <CardContent className="pt-8 flex flex-col items-center">
                        <Avatar className="w-32 h-32 rounded-3xl border-4 border-primary/10 mb-4">
                            <AvatarImage src={`https://ui-avatars.com/api/?name=${user.name}&background=696cff&color=fff&size=128`} />
                            <AvatarFallback className="text-4xl bg-primary/10 text-primary font-bold">{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h3>
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mt-1">{user.role}</p>

                        <div className="w-full mt-8 space-y-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3 text-sm">
                                <Activity className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium text-gray-700 dark:text-gray-300">Account Status:</span>
                                <span className="ml-auto text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded text-[10px] uppercase">Active</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <span className="font-medium text-gray-700 dark:text-gray-300">Joined:</span>
                                <span className="ml-auto text-gray-500 font-mono text-[11px] dark:text-gray-400">{new Date(user.created_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sneat-card border-none shadow-sm md:col-span-2">
                    <CardHeader>
                        <CardTitle className="text-lg">Personal Details</CardTitle>
                        <CardDescription>Keep your contact details up to date.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        defaultValue={user.name}
                                        readOnly={!isEditing}
                                        className={cn("pl-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-none transition-all dark:text-white", isEditing && "bg-white dark:bg-gray-700 ring-1 ring-primary/20")}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        defaultValue={user.email}
                                        readOnly={!isEditing}
                                        className={cn("pl-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-none transition-all dark:text-white", isEditing && "bg-white dark:bg-gray-700 ring-1 ring-primary/20")}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="024 XXX XXXX"
                                        readOnly={!isEditing}
                                        className={cn("pl-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-none transition-all dark:text-white", isEditing && "bg-white dark:bg-gray-700 ring-1 ring-primary/20")}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Accra, Ghana"
                                        readOnly={!isEditing}
                                        className={cn("pl-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-none transition-all dark:text-white", isEditing && "bg-white dark:bg-gray-700 ring-1 ring-primary/20")}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                Account Security
                            </h4>
                            <div className="bg-primary/5 rounded-2xl p-4 flex items-center justify-between border border-primary/10">
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-primary">Two-Factor Authentication</p>
                                    <p className="text-[11px] text-muted-foreground">Add an extra layer of security to your account</p>
                                </div>
                                <Button
                                    size="sm"
                                    variant={user.two_factor_enabled ? "default" : "outline"}
                                    className={cn("rounded-lg border-primary/20 transition-all", user.two_factor_enabled ? "bg-primary text-white" : "text-primary hover:bg-primary/5")}
                                    onClick={async () => {
                                        try {
                                            const res = await api.post('/user/toggle-2fa');
                                            setUser({ ...user, two_factor_enabled: res.data.two_factor_enabled });
                                            localStorage.setItem('user', JSON.stringify({ ...user, two_factor_enabled: res.data.two_factor_enabled }));
                                            toast.success(res.data.message);
                                        } catch (e) {
                                            toast.error("Failed to toggle 2FA");
                                        }
                                    }}
                                >
                                    {user.two_factor_enabled ? "Enabled" : "Enable"}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}
