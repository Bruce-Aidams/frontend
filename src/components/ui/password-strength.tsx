"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface PasswordStrengthProps {
    password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
    const strength = useMemo(() => {
        if (!password) return 0;
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
        if (/\d/.test(password)) score += 1;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
        return score;
    }, [password]);

    const strengthLabel = ["Empty", "Weak", "Fair", "Good", "Strong"];
    const strengthColor = [
        "bg-gray-200",
        "bg-red-500",
        "bg-yellow-500",
        "bg-blue-500",
        "bg-green-500",
    ];

    return (
        <div className="space-y-1.5 mt-1">
            <div className="flex gap-1 h-1">
                {[1, 2, 3, 4].map((step) => (
                    <div
                        key={step}
                        className={cn(
                            "flex-1 rounded-full transition-all duration-300",
                            strength >= step ? strengthColor[strength] : "bg-gray-100 dark:bg-gray-800"
                        )}
                    />
                ))}
            </div>
            <div className="flex justify-between items-center px-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Strength:
                    <span className={cn(
                        "ml-1",
                        strength > 0 ? strengthColor[strength].replace('bg-', 'text-') : "text-muted-foreground"
                    )}>
                        {strengthLabel[strength]}
                    </span>
                </span>
            </div>
        </div>
    );
};

export { PasswordStrength };
