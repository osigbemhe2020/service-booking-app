'use client';

import Header from "@/components/ReuseableComponents/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
     {children}
    </div>
  );
}