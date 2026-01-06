"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe2,
  BarChart3,
  HeartPulse
} from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

interface Product {
  id: number;
  network: string;
  name: string;
  price: number;
  data_amount: string;
  image_path?: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoadingProducts(false);
      }
    };
    loadProducts();
  }, []);

  const handleBuy = (productId: number) => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth/login?error=Please login to purchase a bundle');
    } else {
      router.push('/dashboard/orders/new?bundle=' + productId);
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500">
        {/* Modern Navbar */}
        <header className="fixed top-0 w-full z-50 transition-all border-b border-transparent backdrop-blur-md bg-white/70 dark:bg-slate-950/70">
          <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-black text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                CloudTech
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
              <Link href="#features" className="hover:text-primary transition-colors text-slate-600 dark:text-slate-400">Features</Link>
              <Link href="#networks" className="hover:text-primary transition-colors text-slate-600 dark:text-slate-400">Networks</Link>
              <Link href="#pricing" className="hover:text-primary transition-colors text-slate-600 dark:text-slate-400">Pricing</Link>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/auth/login" className="hidden sm:block text-sm font-bold px-4 py-2 hover:text-primary transition-colors">
                Login
              </Link>
              <Button asChild className="rounded-xl px-6 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                <Link href="/auth/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-24 lg:py-40">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest"
                >
                  <HeartPulse className="w-3 h-3" />
                  Instant Delivery Experience
                </motion.div>

                <div className="space-y-6">
                  <motion.h1
                    className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    The Smartest Way to <br />
                    <span className="text-primary italic">Refill Your Data.</span>
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Experience ultra-cheap, automated data bundles for all major networks in Ghana. Secure, reliable, and processed in milliseconds.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asChild size="lg" className="h-14 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/30 w-full sm:w-auto group">
                    <Link href="/auth/register" className="flex items-center gap-2">
                      Start Saving Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-lg font-bold border-slate-200 dark:border-slate-800 w-full sm:w-auto hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <Link href="/auth/login">View Offers</Link>
                  </Button>
                </motion.div>

                {/* Network logos showcase */}
                <motion.div
                  className="pt-8 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Trusted Networks</p>
                  <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                    <div className="flex flex-col items-center gap-2 group/net transition-all duration-500 hover:scale-110">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover/net:rotate-12 transition-transform">
                        <span className="font-black text-black">MTN</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover/net:opacity-100 transition-opacity uppercase tracking-widest">MTN Ghana</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 group/net transition-all duration-500 hover:scale-110">
                      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/20 group-hover/net:-rotate-12 transition-transform">
                        <span className="font-black text-white">Telecel</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover/net:opacity-100 transition-opacity uppercase tracking-widest">Telecel GH</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 group/net transition-all duration-500 hover:scale-110">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/net:rotate-12 transition-transform">
                        <span className="font-black text-white text-[10px]">AirtelTigo</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover/net:opacity-100 transition-opacity uppercase tracking-widest">AT Ghana</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="py-24 bg-slate-50/50 dark:bg-slate-900/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Built for Performance.</h2>
                <p className="text-slate-500 dark:text-slate-400">Our platform is engineered with the latest technologies to ensure your deals are handled with peak efficiency.</p>
              </div>

              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <FeatureCard
                  icon={<Zap className="w-6 h-6 text-amber-500" />}
                  title="Automatic Fulfillment"
                  description="No waiting games. Our internal API engine processes your data requests the moment payment is confirmed."
                />
                <FeatureCard
                  icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
                  title="Vault Security"
                  description="Industry-standard encryption and secure Paystack integration mean your funds and data are always protected."
                />
                <FeatureCard
                  icon={<BarChart3 className="w-6 h-6 text-indigo-500" />}
                  title="Smart Analytics"
                  description="Track your spending and data usage with real-time charts and detailed history reports."
                />
                <FeatureCard
                  icon={<Smartphone className="w-6 h-6 text-rose-500" />}
                  title="Ghana-First Native"
                  description="Full support for MTN, Telecel, and AT networks with localized prefixes and validation."
                />
                <FeatureCard
                  icon={<Cpu className="w-6 h-6 text-blue-500" />}
                  title="Agent Ecosystem"
                  description="Earn commissions by becoming an agent. Scale your business with our dedicated agent tools."
                />
                <FeatureCard
                  icon={<Globe2 className="w-6 h-6 text-teal-500" />}
                  title="API Ready"
                  description="Integrate our services into your own apps with our robust, documented developer API."
                />
              </motion.div>
            </div>
          </section>

          {/* Pricing / Products Section */}
          <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">Featured Offers.</h2>
                <p className="text-slate-500 dark:text-slate-400">Hand-picked data bundles with the best value for your money. Instant activation guaranteed.</p>
              </div>

              {loadingProducts ? (
                <div className="flex justify-center py-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full"
                  />
                </div>
              ) : (
                <motion.div
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {products.slice(0, 8).map((product) => (
                    <motion.div
                      key={product.id}
                      variants={fadeInUp}
                      className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="absolute top-6 right-6">
                        <div className={`text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider ${product.network === 'MTN' ? 'bg-yellow-400 text-black' :
                          product.network === 'Telecel' ? 'bg-red-500 text-white' :
                            'bg-cyan-500 text-white'
                          }`}>
                          {product.network}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                          <Smartphone className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{product.name}</h3>
                          <p className="text-sm text-slate-500">{product.data_amount} Data Allocation</p>
                        </div>
                        <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-end justify-between">
                          <div>
                            <span className="text-2xl font-black text-primary">₵{product.price}</span>
                            <span className="text-xs text-slate-400 ml-1">/ one-time</span>
                          </div>
                          <Button
                            onClick={() => handleBuy(product.id)}
                            className="rounded-xl font-bold bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-lg"
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>
        </main>

        {/* Modern Footer */}
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
              <div className="col-span-2 lg:col-span-2 space-y-6">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-black text-xl tracking-tight">CloudTech</span>
                </Link>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                  Simplifying digital access for everyone in Ghana. The most trusted platform for data bundles and more.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Services</h4>
                <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <Link href="#" className="hover:text-primary transition-colors">MTN Offers</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Telecel Bundles</Link>
                  <Link href="#" className="hover:text-primary transition-colors">AT Packages</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Bulk SMS</Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Company</h4>
                <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Join as Agent</Link>
                  <Link href="#" className="hover:text-primary transition-colors">API Keys</Link>
                </nav>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400">Support</h4>
                <nav className="flex flex-col gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <Link href="#" className="hover:text-primary transition-colors">Help Center</Link>
                  <Link href="#" className="hover:text-primary transition-colors">T&C</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Status Page</Link>
                </nav>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs font-medium text-slate-400">© 2026 CloudTech Market. Built with precision in Ghana.</p>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </Link>
                <Link href="#" className="text-slate-400 hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
