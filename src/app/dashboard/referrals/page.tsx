"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Users, Link as LinkIcon, Check, Gift, Share2, MousePointerClick } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface User {
    referral_code: string;
    name: string;
    email: string;
}

interface Referral {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export default function ReferralsPage() {
    const [referralCode, setReferralCode] = useState("");
    const [referrals, setReferrals] = useState<Referral[]>([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await api.get<{ data: User }>('/user');
                setReferralCode(userRes.data.data.referral_code);

                const referralsRes = await api.get<Referral[]>('/referrals');
                setReferrals(referralsRes.data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const referralLink = typeof window !== 'undefined' ? `${window.location.origin}/auth/register?ref=${referralCode}` : '';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        toast.success("Referral link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    if (loading) return <div className="animate-pulse p-10">Loading referral tracking...</div>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Refer & Earn</h2>
                    <p className="text-muted-foreground font-medium">Invite your circle and earn 5% on every purchase they make.</p>
                </div>
                <Button onClick={copyToClipboard} variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                    <Share2 className="w-4 h-4" />
                    Share Link
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2 sneat-card border-none bg-primary text-primary-foreground overflow-hidden relative">
                    <div className="absolute right-[-20px] top-[-20px] opacity-10">
                        <Gift className="w-48 h-48" />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Your Referral Link</CardTitle>
                        <CardDescription className="text-primary-foreground/70">Copy and share this link to start earning.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex gap-2 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                            <Input
                                readOnly
                                value={referralLink}
                                className="bg-transparent border-none text-white focus-visible:ring-0 placeholder:text-white/50 font-mono text-sm h-12"
                            />
                            <Button
                                onClick={copyToClipboard}
                                className="bg-white text-primary hover:bg-white/90 shrink-0 h-12 rounded-lg"
                            >
                                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5 mr-2" />}
                                {copied ? "Copied" : "Copy Link"}
                            </Button>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-primary-foreground/20 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary-foreground flex items-center justify-center text-[10px] font-bold text-primary">+{referrals.length}</div>
                            </div>
                            <p className="text-xs font-medium">Join 500+ members earning daily commissions.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="sneat-card">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Stats Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{referrals.length}</p>
                                <p className="text-xs text-muted-foreground">Total Referred</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                                <MousePointerClick className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">128</p>
                                <p className="text-xs text-muted-foreground">Link Clicks</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="sneat-card overflow-hidden">
                <CardHeader className="bg-white border-b border-gray-100">
                    <CardTitle className="text-lg">Recent Referrals</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    {referrals.length === 0 ? (
                        <div className="text-center py-20">
                            <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                            <p className="text-muted-foreground">No referrals yet. Spread the word!</p>
                        </div>
                    ) : (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-[10px] text-muted-foreground uppercase bg-gray-50/50">
                                    <tr>
                                        <th className="px-6 py-4">User</th>
                                        <th className="px-6 py-4">Contact</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Joined Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {referrals.map((referralItem) => (
                                        <tr key={referralItem.id} className="hover:bg-accent/5 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                                                        {referralItem.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-gray-900">{referralItem.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">{referralItem.email}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-green-100 text-green-700">Active</span>
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {new Date(referralItem.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
