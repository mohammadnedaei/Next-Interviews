"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <NextThemesProvider attribute="class" defaultTheme="system">
            {children}
        </NextThemesProvider>
    );
}
