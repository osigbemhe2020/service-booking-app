'use client';

import Header from "@/components/LayoutComponents/header";
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1] ?? '';
  const raw = last || 'Home';
  const page = raw.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div>
      <Header page={page} />
      {children}
    </div>
  );
}
