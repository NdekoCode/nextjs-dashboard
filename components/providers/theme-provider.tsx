"use client";

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ComponentProps, useEffect, useState } from 'react';

export function ThemeProvider({
  children,
  ...props
}: Readonly<ComponentProps<typeof NextThemesProvider>>) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
