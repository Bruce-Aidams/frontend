"use client";

import { useEffect, useState, useCallback } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PasswordInput } from "@/components/ui/password-input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
    MoreVertical,
    Search,
    Shield,
    User as UserIcon,
    Mail,
    CheckCircle,
    XCircle,
    Key,
    AlertTriangle,
    RefreshCcw,
    Plus,
    Trash2,
    UserPlus,
    Wallet,
    Phone
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    created_at: string;
    is_active: boolean | number;
    wallet_balance: string | number;
}

export default function AdminUsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");

    // Dialog States
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isAdjustOpen, setIsAdjustOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'user',
        is_active: true,
        wallet_balance: '0',
        password: '',
    });

    const [adjData, setAdjData] = useState({
        type: 'credit' as 'credit' | 'debit',
        amount: '',
        note: '',
    });


    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const params: any = {};
            if (search) params.search = search;
            if (roleFilter !== "all") params.role = roleFilter;

            const res = await api.get('/admin/users', { params });
            setUsers(res.data.data);
        } catch (e: any) {
            console.error("Fetch Users Error:", e);
            toast.error("Failed to load users");
        } finally {
            setLoading(false);
        }
    }, [search, roleFilter]);

    useEffect(() => {
        const timer = setTimeout(fetchUsers, 500);
        return () => clearTimeout(timer);
    }, [fetchUsers]);

    const handleAddClick = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            role: 'user',
            is_active: true,
            wallet_balance: '0',
            password: '',
        });
        setIsAddOpen(true);
    };

    const handleEditClick = (user: User) => {
        setSelectedUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            role: user.role,
            is_active: Boolean(user.is_active),
            wallet_balance: String(user.wallet_balance),
            password: '', // Reset password field
        });
        setIsEditOpen(true);
    };

    const handleDeleteClick = (user: User) => {
        setSelectedUser(user);
        setIsDeleteOpen(true);
    };

    const handleAdjustClick = (user: User) => {
        setSelectedUser(user);
        setAdjData({ type: 'credit', amount: '', note: '' });
        setIsAdjustOpen(true);
    };


    const handleCreateUser = async () => {
        try {
            await api.post('/admin/users', formData);
            toast.success("User created successfully");
            setIsAddOpen(false);
            fetchUsers();
        } catch (e: any) {
            toast.error(e.response?.data?.message || "Failed to create user");
        }
    };

    const handleUpdateUser = async () => {
        if (!selectedUser) return;
        try {
            await api.put(`/admin/users/${selectedUser.id}`, formData);
            toast.success("User updated successfully");
            setIsEditOpen(false);
            fetchUsers();
        } catch (e: any) {
            toast.error(e.response?.data?.message || "Failed to update user");
        }
    };

    const handleDeleteUser = async () => {
        if (!selectedUser) return;
        try {
            await api.delete(`/admin/users/${selectedUser.id}`);
            toast.success("User deleted successfully");
            setIsDeleteOpen(false);
            fetchUsers();
        } catch (e: any) {
            toast.error(e.response?.data?.message || "Failed to delete user");
        }
    };

    const handleAdjustWallet = async () => {
        if (!selectedUser) return;
        if (!adjData.amount || !adjData.note) {
            toast.error("Please fill all adjustment fields");
            return;
        }
        try {
            await api.post(`/admin/users/${selectedUser.id}/adjust-wallet`, adjData);
            toast.success("Wallet adjusted successfully");
            setIsAdjustOpen(false);
            fetchUsers();
        } catch (e: any) {
            toast.error(e.response?.data?.message || "Failed to adjust wallet");
        }
    };


    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">User Management</h2>
                    <p className="text-muted-foreground">Manage accounts, roles, and platform security.</p>
                </div>
                <Button onClick={handleAddClick} className="gap-2 shadow-lg shadow-primary/20">
                    <UserPlus className="w-4 h-4" /> Add New User
                </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search by name, email, or phone..."
                        className="pl-9 bg-white dark:bg-slate-900 border-none shadow-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-full sm:w-[150px] bg-white dark:bg-slate-900 border-none shadow-sm">
                        <SelectValue placeholder="All Roles" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="agent">Agent</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-slate-100/50 dark:bg-slate-800/50 text-slate-500 font-bold border-b dark:border-slate-800">
                            <tr>
                                <th className="px-6 py-4">User Details</th>
                                <th className="px-6 py-4">Role & Balance</th>
                                <th className="px-6 py-4">Security Status</th>
                                <th className="px-6 py-4">Registration</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {loading && users.length === 0 ? (
                                <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-400">
                                    <RefreshCcw className="w-8 h-8 animate-spin mx-auto mb-2 opacity-20" />
                                    Loading users...
                                </td></tr>
                            ) : users.length === 0 ? (
                                <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">
                                    No users found matching your search.
                                </td></tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border-2 border-white dark:border-slate-800 shadow-md">
                                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                        {user.name.charAt(0).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-700 dark:text-slate-200">{user.name}</span>
                                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                                        <Mail className="w-3 h-3" /> {user.email}
                                                    </span>
                                                    {user.phone && (
                                                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                                            <Phone className="w-3 h-3" /> {user.phone}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-1.5">
                                                    {user.role === 'admin' ?
                                                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 border-none gap-1">
                                                            <Shield className="w-3 h-3" /> Admin
                                                        </Badge> :
                                                        user.role === 'agent' ?
                                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border-none gap-1">
                                                                <UserIcon className="w-3 h-3" /> Agent
                                                            </Badge> :
                                                            <Badge variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-500 font-medium capitalize">
                                                                {user.role}
                                                            </Badge>
                                                    }
                                                </div>
                                                <div className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1">
                                                    <Wallet className="w-3 h-3" /> ₵{parseFloat(String(user.wallet_balance)).toFixed(2)}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {Boolean(user.is_active) ? (
                                                    <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium">
                                                        <CheckCircle className="w-4 h-4" />
                                                        <span className="text-xs">Active</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1.5 text-red-500 font-medium">
                                                        <XCircle className="w-4 h-4" />
                                                        <span className="text-xs">Suspended</span>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-slate-400 font-medium">
                                            {new Date(user.created_at).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem onClick={() => handleEditClick(user)} className="cursor-pointer">
                                                        <Key className="w-4 h-4 mr-2" /> Edit / Reset Key
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => handleAdjustClick(user)} className="cursor-pointer text-primary font-bold">
                                                        <Plus className="w-4 h-4 mr-2" /> Manual Adjustment
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleDeleteClick(user)}
                                                        className="text-red-500 hover:text-red-600 cursor-pointer"
                                                        disabled={user.role === 'admin'}
                                                    >
                                                        <Trash2 className="w-4 h-4 mr-2" /> Delete Account
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Add User Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[450px] dark:bg-slate-900 border-none">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">New User Account</DialogTitle>
                        <DialogDescription>
                            Create a new member, agent, or administrator.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</Label>
                            <Input
                                id="name"
                                placeholder="e.g. John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="h-11 border-slate-200 dark:border-slate-800"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-11 border-slate-200 dark:border-slate-800"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</Label>
                                <Input
                                    id="phone"
                                    placeholder="024XXXXXXX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="h-11 border-slate-200 dark:border-slate-800"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Role</Label>
                                <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })}>
                                    <SelectTrigger className="h-11 border-slate-200 dark:border-slate-800">
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="user">User / Member</SelectItem>
                                        <SelectItem value="agent">Agent / Reseller</SelectItem>
                                        <SelectItem value="admin">Administrator</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-slate-400">Password</Label>
                                <PasswordInput
                                    id="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="h-11 border-slate-200 dark:border-slate-800"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                        <Button onClick={handleCreateUser} className="shadow-lg shadow-primary/20">Create Account</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Edit User Dialog */}
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                <DialogContent className="sm:max-w-[450px] dark:bg-slate-900 border-none">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Edit Account</DialogTitle>
                        <DialogDescription>
                            Profile settings for {selectedUser?.name}.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="edit-name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</Label>
                                <Input id="edit-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="edit-email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</Label>
                                <Input id="edit-email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Role</Label>
                                <Select value={formData.role} onValueChange={(val) => setFormData({ ...formData, role: val })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="agent">Agent</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</Label>
                                <Select
                                    value={formData.is_active ? "active" : "inactive"}
                                    onValueChange={(v) => setFormData({ ...formData, is_active: v === 'active' })}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="inactive">Suspended</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                                <Key className="w-3.5 h-3.5" /> Security Override
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="edit-password" className="text-[10px] text-muted-foreground uppercase">New Password (leave blank to keep current)</Label>
                                <PasswordInput
                                    id="edit-password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="bg-white dark:bg-slate-900 border-none shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsEditOpen(false)}>Cancel</Button>
                        <Button onClick={handleUpdateUser} className="shadow-lg shadow-primary/20">Update Account</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
                <DialogContent className="sm:max-w-[400px] border-none">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-red-600">
                            <AlertTriangle className="w-5 h-5" /> Delete User?
                        </DialogTitle>
                        <DialogDescription className="pt-2">
                            Are you sure you want to delete <span className="font-bold text-slate-900 dark:text-slate-100">{selectedUser?.name}</span>? This action is permanent and will remove all their data.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-4">
                        <Button variant="ghost" onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={handleDeleteUser}>Confirm Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Manual Adjustment Dialog */}
            <Dialog open={isAdjustOpen} onOpenChange={setIsAdjustOpen}>
                <DialogContent className="sm:max-w-[425px] border-none">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <Wallet className="w-6 h-6 text-primary" /> Wallet Adjustment
                        </DialogTitle>
                        <DialogDescription>
                            Manually credit or debit <span className="font-bold text-slate-900 dark:text-slate-100">{selectedUser?.name}</span>'s account.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-5 py-4">
                        <div className="grid gap-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-slate-400">Adjustment Type</Label>
                            <div className="flex gap-2">
                                <Button
                                    variant={adjData.type === 'credit' ? 'default' : 'outline'}
                                    className="flex-1 rounded-xl"
                                    onClick={() => setAdjData({ ...adjData, type: 'credit' })}
                                >
                                    <Plus className="w-4 h-4 mr-2 text-emerald-500" /> Credit
                                </Button>
                                <Button
                                    variant={adjData.type === 'debit' ? 'destructive' : 'outline'}
                                    className="flex-1 rounded-xl"
                                    onClick={() => setAdjData({ ...adjData, type: 'debit' })}
                                >
                                    <XCircle className="w-4 h-4 mr-2" /> Debit
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="adj-amount" className="text-xs font-bold uppercase tracking-wider text-slate-400">Amount (GHS)</Label>
                            <Input
                                id="adj-amount"
                                type="number"
                                placeholder="0.00"
                                value={adjData.amount}
                                onChange={(e) => setAdjData({ ...adjData, amount: e.target.value })}
                                className="h-12 text-lg font-bold border-slate-200 dark:border-slate-800"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="adj-note" className="text-xs font-bold uppercase tracking-wider text-slate-400">Reason / Reference Note</Label>
                            <Input
                                id="adj-note"
                                placeholder="e.g. Loyalty bonus, Offline top-up correction"
                                value={adjData.note}
                                onChange={(e) => setAdjData({ ...adjData, note: e.target.value })}
                                className="h-11 border-slate-200 dark:border-slate-800"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setIsAdjustOpen(false)}>Cancel</Button>
                        <Button onClick={handleAdjustWallet} className="shadow-lg shadow-primary/20 min-w-32">
                            Apply Change
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

