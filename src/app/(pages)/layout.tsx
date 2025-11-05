'use client';

import Header from "@/components/LayoutComponents/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
     {children}
    </div>
  );
}
