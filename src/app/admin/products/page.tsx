"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Edit, Signal, Wifi, Upload, Image as ImageIcon, AlertTriangle, RefreshCcw, Search } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { CardSkeleton } from "@/components/ui/card-skeleton";

interface Product {
    id: number;
    network: string;
    name: string;
    price: number;
    cost_price: number;
    data_amount?: string;

    image_path?: string;
    is_active: boolean;
    role_prices?: Record<string, number> | null;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editId, setEditId] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        network: '',
        name: '',
        price: '',
        cost_price: '',
        data_amount: '',
        role_prices: { dealer: '', super_agent: '' }
    });

    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [error, setError] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.get('/admin/products');
            setProducts(res.data);
        } catch (e: any) {
            console.error("Fetch Products Error:", e);
            const debugMsg = e.response?.data?.debug;
            const errorMsg = e.response?.data?.message || e.message;
            if (e.response?.status === 403) {
                setError("Access Denied: You do not have permission to view this page.");
            } else {
                setError(debugMsg ? `${errorMsg} (${debugMsg})` : errorMsg);
            }
            toast.error("Failed to load products");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-red-50 dark:bg-red-900/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Access Denied or Error</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">{error}</p>
                </div>
                <Button onClick={fetchProducts} variant="outline" className="gap-2">
                    <RefreshCcw className="w-4 h-4" /> Try Again
                </Button>
            </div>
        );
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async () => {
        try {
            const data = new FormData();
            data.append('network', formData.network);
            data.append('name', formData.name);
            data.append('price', formData.price);
            data.append('cost_price', formData.cost_price);
            data.append('data_amount', formData.data_amount);
            data.append('role_prices', JSON.stringify({
                dealer: formData.role_prices.dealer || null,
                super_agent: formData.role_prices.super_agent || null
            }));

            if (selectedImage) {
                data.append('image', selectedImage);
            }

            if (isEditing && editId) {
                // Determine if we need to fake PUT via POST for FormData in Laravel
                // Usually POST with _method=PUT is safer for file uploads on update
                data.append('_method', 'PUT');
                await api.post(`/admin/products/${editId}`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await api.post('/admin/products', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }

            setIsOpen(false);
            resetForm();
            fetchProducts();
        } catch (e) {
            alert("Error saving product");
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this bundle? This action cannot be undone.")) {
            try {
                await api.delete(`/admin/products/${id}`);
                setProducts(products.filter(p => p.id !== id));
            } catch (e) {
                alert("Failed to delete");
            }
        }
    };

    const openEdit = (product: Product) => {
        setFormData({
            network: product.network,
            name: product.name,
            price: product.price.toString(),
            cost_price: product.cost_price.toString(),
            data_amount: product.data_amount || '',
            role_prices: {
                dealer: product.role_prices?.dealer?.toString() || '',
                super_agent: product.role_prices?.super_agent?.toString() || ''
            }

        });
        setPreviewUrl(product.image_path ? `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}/storage/${product.image_path}` : null);
        setEditId(product.id);
        setIsEditing(true);
        setIsOpen(true);
    };

    const resetForm = () => {
        setFormData({ network: '', name: '', price: '', cost_price: '', data_amount: '', role_prices: { dealer: '', super_agent: '' } });

        setSelectedImage(null);
        setPreviewUrl(null);
        setIsEditing(false);
        setEditId(null);
    };

    const getNetworkStyles = (network: string) => {
        const net = network.toUpperCase();
        if (net.includes('MTN')) return {
            bg: 'bg-yellow-400',
            text: 'text-black',
            border: 'border-yellow-400',
            lightBg: 'bg-yellow-400/10',
            accent: 'yellow-400',
            icon: <Signal className="w-4 h-4 text-yellow-600" />
        };
        if (net.includes('TELECEL')) return {
            bg: 'bg-red-600',
            text: 'text-white',
            border: 'border-red-600',
            lightBg: 'bg-red-600/10',
            accent: 'red-600',
            icon: <Signal className="w-4 h-4 text-red-600" />
        };
        if (net.includes('AIRTEL') || net.includes('TIGO') || net === 'AT') return {
            bg: 'bg-blue-600',
            text: 'text-white',
            border: 'border-blue-600',
            lightBg: 'bg-blue-600/10',
            accent: 'blue-600',
            icon: <Signal className="w-4 h-4 text-blue-600" />
        };
        return {
            bg: 'bg-slate-500',
            text: 'text-white',
            border: 'border-slate-500',
            lightBg: 'bg-slate-500/10',
            accent: 'slate-500',
            icon: <Signal className="w-4 h-4 text-slate-500" />
        };
    };

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.network.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.data_amount?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedProducts = filteredProducts.reduce((acc, product) => {
        const net = product.network.toUpperCase();
        if (!acc[net]) acc[net] = [];
        acc[net].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    const networks = Object.keys(groupedProducts);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Product Management</h2>
                    <p className="text-muted-foreground">Manage data bundles and pricing.</p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search products..."
                            className="pl-9 bg-white dark:bg-slate-900"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) resetForm(); }}>
                        <DialogTrigger asChild>
                            <Button className="gap-2 shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                                <Plus className="w-4 h-4" /> Add Bundle
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{isEditing ? 'Edit Bundle' : 'Add New Bundle'}</DialogTitle>
                                <DialogDescription>
                                    {isEditing ? 'Update package details.' : 'Create a new data package using MB units (will be shown as GB if > 1024).'}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="py-4 space-y-6">
                                {/* Basic Information */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium leading-none border-b pb-2 text-muted-foreground">Basic Information</h4>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <div
                                                className="w-24 h-24 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors relative group"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                {previewUrl ? (
                                                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="text-center p-2 text-slate-400">
                                                        <Upload className="w-6 h-6 mx-auto mb-1" />
                                                        <span className="text-[10px]">Upload</span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Edit className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="grid gap-2">
                                                <Label htmlFor="network">Network Provider</Label>
                                                <Select
                                                    value={formData.network}
                                                    onValueChange={(val) => setFormData({ ...formData, network: val })}
                                                >
                                                    <SelectTrigger className="bg-gray-50 dark:bg-slate-900 border-none h-9">
                                                        <SelectValue placeholder="Select Network" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="MTN">MTN</SelectItem>
                                                        <SelectItem value="Telecel">Telecel</SelectItem>
                                                        <SelectItem value="AirtelTigo">AirtelTigo</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="name">Bundle Name</Label>
                                                <Input
                                                    id="name"
                                                    placeholder="e.g. 1GB Super Saver"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="h-9"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="data_amount">Data Amount</Label>
                                        <Input
                                            id="data_amount"
                                            placeholder="e.g. 5.5 GB"
                                            value={formData.data_amount}
                                            onChange={(e) => setFormData({ ...formData, data_amount: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Pricing Strategy */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium leading-none border-b pb-2 text-muted-foreground">Pricing Strategy</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="price" className="text-green-600 dark:text-green-400">Selling Price (GHS)</Label>
                                            <Input
                                                id="price"
                                                type="number"
                                                placeholder="0.00"
                                                value={formData.price}
                                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="cost_price" className="text-slate-500">Cost Price (GHS)</Label>
                                            <Input
                                                id="cost_price"
                                                type="number"
                                                placeholder="0.00"
                                                value={formData.cost_price}
                                                onChange={(e) => setFormData({ ...formData, cost_price: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="dealer_price" className="text-purple-600">Dealer Price <span className="text-xs text-muted-foreground">(Opt)</span></Label>
                                            <Input
                                                id="dealer_price"
                                                type="number"
                                                placeholder="Same as Selling"
                                                value={formData.role_prices.dealer}
                                                onChange={(e) => setFormData({
                                                    ...formData,
                                                    role_prices: { ...formData.role_prices, dealer: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="super_agent_price" className="text-orange-600">Super Agent <span className="text-xs text-muted-foreground">(Opt)</span></Label>
                                            <Input
                                                id="super_agent_price"
                                                type="number"
                                                placeholder="Same as Selling"
                                                value={formData.role_prices.super_agent}
                                                onChange={(e) => setFormData({
                                                    ...formData,
                                                    role_prices: { ...formData.role_prices, super_agent: e.target.value }
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                                <Button onClick={handleSubmit}>{isEditing ? 'Update Bundle' : 'Create Bundle'}</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Tabs defaultValue={networks[0] || 'all'} className="w-full">
                <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8 inline-block min-w-full md:min-w-0">
                    <TabsList className="bg-transparent h-auto gap-2 p-0 flex-wrap justify-start">
                        {networks.map(net => {
                            const styles = getNetworkStyles(net);
                            return (
                                <TabsTrigger
                                    key={net}
                                    value={net}
                                    className={cn(
                                        "px-6 py-2.5 rounded-xl font-bold transition-all gap-2 border-2 border-transparent",
                                        "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md",
                                        net === 'MTN' ? "data-[state=active]:border-yellow-400 data-[state=active]:text-yellow-700" :
                                            net === 'TELECEL' ? "data-[state=active]:border-red-600 data-[state=active]:text-red-600" :
                                                "data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                                    )}
                                >
                                    <Wifi className="w-4 h-4" /> {net}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </div>
                {networks.map(net => (
                    <TabsContent key={net} value={net} className="mt-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {loading ? (
                                Array.from({ length: 4 }).map((_, i) => (
                                    <CardSkeleton key={i} />
                                ))
                            ) : groupedProducts[net].map((product) => {
                                const styles = getNetworkStyles(product.network);
                                return (
                                    <Card key={product.id} className={cn(
                                        "border-none shadow-sm overflow-hidden hover:shadow-xl transition-all group relative rounded-3xl",
                                        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/5 before:opacity-0 hover:before:opacity-100 transition-opacity"
                                    )}>
                                        <div className="h-44 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                                            {product.image_path ? (
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')}/storage/${product.image_path}`}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
                                                    <ImageIcon className="w-12 h-12 mb-2" />
                                                    <span className="text-[10px] uppercase font-bold tracking-tighter">No Image</span>
                                                </div>
                                            )}
                                            <div className={cn(
                                                "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg",
                                                styles.bg, styles.text
                                            )}>
                                                {product.network}
                                            </div>
                                        </div>
                                        <CardHeader className="pb-3">
                                            <CardTitle className="flex flex-col gap-1 items-start">
                                                <span className="text-lg font-black tracking-tight">{product.name}</span>
                                                <span className={cn("text-2xl font-black", `text-${styles.accent}`)}>GHS {product.price}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className={cn(
                                                "flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit text-sm font-bold transition-colors",
                                                styles.lightBg
                                            )}>
                                                {styles.icon}
                                                <span className={styles.accent === 'yellow-400' ? 'text-yellow-700' : `text-${styles.accent}`}>
                                                    {product.data_amount ? (
                                                        isNaN(Number(product.data_amount)) ? product.data_amount :
                                                            Number(product.data_amount) >= 1024 ? `${(Number(product.data_amount) / 1024).toFixed(2)} GB` : `${product.data_amount} MB`
                                                    ) : 'No data specified'}
                                                </span>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="gap-3 pt-2 pb-6 px-6">
                                            <Button
                                                variant="secondary"
                                                className="flex-1 gap-2 rounded-xl font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                                                size="sm"
                                                onClick={() => openEdit(product)}
                                            >
                                                <Edit className="w-3.5 h-3.5" /> Edit
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="shrink-0 rounded-xl shadow-lg shadow-red-500/20"
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
