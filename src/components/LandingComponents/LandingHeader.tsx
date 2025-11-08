'use client';
import Link from 'next/link';
import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

const LandingHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-white shadow-sm">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-8 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-[white] rounded-[10px] flex items-center justify-center">
              <Link href="/"><Calendar size={24} className="text-blue-500" /></Link>
            </div>
            <div>
              <Link href="/"><p className="font-semibold text-[18px] sm:text-[20px] tracking-[-0.44px] text-gray-800 leading-snug">BookIt</p></Link>
            </div>
          </div>
        </div>

        {/* Desktop / tablet nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/book-service" className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">Browse Services</Link>
          <Link href="/sign-in" className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">For Providers</Link>
          <Link href="/sign-up"><button className="py-1 px-3 rounded-[8px] bg-[var(--color-primary200)] text-white">Get Started</button></Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-md border border-transparent hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white border-t border-black/5">
          <div className="flex flex-col gap-3">
            <a className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">Browse Services</a>
            <a className="text-[16px] font-medium text-[rgba(54, 65, 83, 1)] hover:text-blue-500 transition-colors">For Providers</a>
            <button className="w-full py-2 rounded-[8px] bg-[var(--color-primary200)] text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingHeader