"use client";

import React from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaystackPaymentProviderProps {
    config: any;
    children: (initializePayment: Function) => React.ReactNode;
}

export default function PaystackPaymentProvider({ config, children }: PaystackPaymentProviderProps) {
    const initializePayment = usePaystackPayment(config);
    return <>{children(initializePayment)}</>;
}
