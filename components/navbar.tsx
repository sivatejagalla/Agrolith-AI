'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, Activity, Menu, X, User, LayoutDashboard, Scan, Sun, Award, Sparkles } from 'lucide-react';
import { detectBackendHost } from '@/lib/api';

export function Navbar() {
  const pathname = usePathname();
  const [activeHost, setActiveHost] = useState<string>('Railway Backend');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    detectBackendHost().then((host) => {
      if (host.includes('railway')) setActiveHost('Railway Live Backend');
      else if (host.includes('render')) setActiveHost('Render Live Backend');
      else setActiveHost('Local Live Backend');
    });
  }, []);

  const navLinks = [
    { href: '/', label: 'Overview', icon: Sparkles },
    { href: '/dashboard', label: 'Control Centre', icon: LayoutDashboard },
    { href: '/chat', label: 'AI Advisory', icon: Cpu },
    { href: '/diagnosis', label: 'Vision Scanner', icon: Scan },
    { href: '/weather', label: 'Weather Intel', icon: Sun },
    { href: '/schemes', label: 'Govt Schemes', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-6 py-3.5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-2xl shadow-glow group-hover:scale-105 transition-all duration-300">
            🌾
          </div>
          <div>
            <span className="font-display text-2xl font-black gradient-text-emerald tracking-tight">
              Agrolith-AI
            </span>
            <div className="text-[10px] font-heading font-bold tracking-wider text-emerald-400/90 uppercase">
              Smart Farming SaaS
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links with Icons */}
        <nav className="hidden lg:flex items-center gap-1 bg-graphite-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-400/80'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status Badge & Profile Action */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-neon-pulse shadow-glow"></span>
            <span>{activeHost}</span>
          </div>

          <Link
            href="/profile"
            className="flex items-center gap-2 bg-graphite-800 hover:bg-graphite-700 text-white px-4 py-2 rounded-xl border border-white/10 text-xs font-bold transition-all shadow-glow hover:-translate-y-0.5"
          >
            <User className="w-4 h-4 text-emerald-400" />
            <span>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 border-t border-white/10 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/10 hover:text-white"
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
