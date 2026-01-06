"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string; // Temporary ID for cart unique identification
    bundle_id: number;
    bundle_name: string;
    network: string;
    price: number;
    recipient_phone: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, 'id'>) => void;
    removeFromCart: (id: string) => void;
    updateCartItem: (id: string, updates: Partial<CartItem>) => void;
    clearCart: () => void;
    totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('CloudTech_cart');
        if (savedCart) {
            try {
                const parsed = JSON.parse(savedCart);
                Promise.resolve().then(() => setCartItems(parsed));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('CloudTech_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item: Omit<CartItem, 'id'>) => {
        const newItem: CartItem = {
            ...item,
            price: Number(item.price), // Ensure price is a number
            id: Math.random().toString(36).substr(2, 9),
        };
        setCartItems(prev => [...prev, newItem]);
    };

    const removeFromCart = (id: string) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateCartItem = (id: string, updates: Partial<CartItem>) => {
        setCartItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
