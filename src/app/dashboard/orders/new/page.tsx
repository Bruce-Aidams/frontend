"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ShoppingCart, Smartphone, Package, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface Bundle {
    id: number;
    network: string;
    name: string;
    price: number;
}

export default function NewOrderPage() {
    const [bundles, setBundles] = useState<Bundle[]>([]);
    const [selectedNetwork, setSelectedNetwork] = useState<string>("");
    const [selectedBundle, setSelectedBundle] = useState<string>("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { addToCart, cartItems } = useCart();

    const [networks, setNetworks] = useState<string[]>([]);

    const getNetworkPrefixes = (network: string) => {
        const net = network.toUpperCase();
        switch (net) {
            case "MTN": return "024, 054, 055, 059, 053, 025";
            case "TELECEL": return "020, 050";
            case "AIRTELTIGO": return "027, 057, 026, 056";
            default: return "";
        }
    };

    useEffect(() => {
        api.get<Bundle[]>('/products').then(res => setBundles(res.data));
        api.get<string[]>('/networks').then(res => setNetworks(res.data));
    }, []);

    const filteredBundles = bundles.filter(b =>
        !selectedNetwork || b.network.toLowerCase() === selectedNetwork.toLowerCase()
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedNetwork) {
            toast.error("Please select a network first.");
            return;
        }

        const bundle = bundles.find(b => String(b.id) === selectedBundle);
        if (!bundle) return;

        // Strict Phone Validation
        const phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            toast.error("Phone number must be exactly 10 digits.");
            return;
        }

        const validPrefixes = getNetworkPrefixes(selectedNetwork).split(', ').map(p => p.trim());
        const hasValidPrefix = validPrefixes.some(prefix => phone.startsWith(prefix));

        if (!hasValidPrefix) {
            toast.error(`Invalid phone number for ${selectedNetwork}. Expected prefixes: ${getNetworkPrefixes(selectedNetwork)}`);
            return;
        }

        addToCart({
            bundle_id: bundle.id,
            bundle_name: bundle.name,
            network: bundle.network,
            price: bundle.price,
            recipient_phone: phone
        });

        toast.success("Added to cart!");
        setPhone("");
        setSelectedBundle("");
    };

    const selectedBundleData = bundles.find(b => String(b.id) === selectedBundle);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <ShoppingCart className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Buy Data Bundle</h2>
                        <p className="text-muted-foreground font-medium">Select a package and enter recipient details.</p>
                    </div>
                </div>
                {cartItems.length > 0 && (
                    <Button asChild variant="outline" className="relative shadow-sm border-primary/20 bg-primary/5 text-primary rounded-xl">
                        <Link href="/dashboard/cart">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            View Cart
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                {cartItems.length}
                            </span>
                        </Link>
                    </Button>
                )}
            </div>

            <div className="grid gap-6 md:grid-cols-5">
                <div className="md:col-span-3">
                    <Card className="sneat-card border-none shadow-sm h-full">
                        <CardHeader>
                            <CardTitle className="text-lg">Order Details</CardTitle>
                            <CardDescription>Follow the steps to add a bundle to your cart.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Step 1: Select Network */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                                        <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center text-[10px] font-bold">1</div>
                                        Select Network
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {networks.map((net) => (
                                            <button
                                                key={net}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedNetwork(net);
                                                    setSelectedBundle("");
                                                }}
                                                className={cn(
                                                    "py-3 px-2 rounded-xl border-2 transition-all flex flex-col items-center gap-1",
                                                    selectedNetwork === net
                                                        ? "border-primary bg-primary/5 text-primary"
                                                        : "border-gray-100 bg-gray-50 text-muted-foreground hover:border-gray-200"
                                                )}
                                            >
                                                <span className="text-xs font-bold uppercase">{net}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 2: Select Bundle */}
                                <div className={cn("space-y-2 transition-all duration-300", !selectedNetwork && "opacity-50 pointer-events-none")}>
                                    <label className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                                        <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center text-[10px] font-bold">2</div>
                                        Select Data Bundle
                                    </label>
                                    <Select
                                        value={selectedBundle}
                                        onValueChange={setSelectedBundle}
                                        disabled={!selectedNetwork}
                                    >
                                        <SelectTrigger className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:ring-primary/20">
                                            <SelectValue placeholder={selectedNetwork ? `Choose an ${selectedNetwork} package...` : "Select a network first"} />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                                            {filteredBundles.map((bundle) => (
                                                <SelectItem key={bundle.id} value={String(bundle.id)} className="rounded-lg py-3">
                                                    <div className="flex flex-col">
                                                        <span className="font-bold">{bundle.name}</span>
                                                        <span className="text-[10px] text-primary">GHS {Number(bundle.price).toFixed(2)}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                            {filteredBundles.length === 0 && selectedNetwork && (
                                                <div className="p-3 text-center text-xs text-muted-foreground italic">
                                                    No bundles available for this network yet.
                                                </div>
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Step 3: Recipient Phone */}
                                <div className={cn("space-y-2 transition-all duration-300", !selectedBundle && "opacity-50 pointer-events-none")}>
                                    <label className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                                        <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center text-[10px] font-bold">3</div>
                                        Recipient Phone Number
                                    </label>
                                    <div className="relative">
                                        <Input
                                            placeholder="e.g. 0541234567"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            disabled={!selectedBundle}
                                            className="h-12 bg-gray-50 border-gray-100 rounded-xl focus:ring-primary/20 pr-10"
                                        />
                                        <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    </div>
                                    {selectedNetwork && (
                                        <p className="text-[10px] text-muted-foreground px-1 bg-primary/5 py-1 rounded-md border border-primary/10">
                                            <span className="font-bold text-primary mr-1">Hint:</span>
                                            Valid {selectedNetwork} prefixes: <span className="text-gray-900 font-bold">{getNetworkPrefixes(selectedNetwork)}</span>
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={!selectedBundle || !phone}
                                    className="w-full h-14 text-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] rounded-2xl font-bold group"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                    Add Bundle to Cart
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <Card className="sneat-card border-none bg-primary text-primary-foreground overflow-hidden relative shadow-lg shadow-primary/20 min-h-[250px] flex flex-col justify-center">
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                            <ShoppingCart className="w-40 h-40" />
                        </div>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-bold uppercase tracking-widest opacity-80">Live Preview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 relative z-10">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-white/20">
                                    <span className="text-xs opacity-70">Provider</span>
                                    <span className="font-bold">{selectedNetwork || '---'}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/20">
                                    <span className="text-xs opacity-70">Service</span>
                                    <span className="font-bold truncate max-w-[150px]">{selectedBundleData?.name || '---'}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/20">
                                    <span className="text-xs opacity-70">Destination</span>
                                    <span className="font-bold font-mono">{phone || '---'}</span>
                                </div>
                                <div className="flex justify-between items-center pt-6">
                                    <span className="text-sm font-bold opacity-80">Amount Due</span>
                                    <span className="text-3xl font-black">GHS {selectedBundleData?.price ? Number(selectedBundleData.price).toFixed(2) : '0.00'}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="sneat-card border-none bg-white shadow-sm">
                        <CardContent className="p-5 flex gap-4">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <Info className="w-5 h-5" />
                            </div>
                            <div className="text-xs text-gray-600 leading-relaxed">
                                <p className="font-bold text-gray-900 mb-1">Before you proceed</p>
                                Please double-check the recipient&apos;s phone number. Data bundles cannot be reversed once processed onto a wrong number.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.div>
    );
}
