"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"        // adds/removes `dark` on <html>
      defaultTheme="system"    // follow OS by default
      enableSystem             // keep in sync with OS changes
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
