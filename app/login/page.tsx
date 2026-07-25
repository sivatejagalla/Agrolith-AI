'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Mail, Lock, ArrowRight, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('farmer@agrolith.ai');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <div className="glass-panel max-w-md w-full p-8 md:p-10 rounded-3xl space-y-8 shadow-glow border-emerald-500/30">
        
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 mx-auto flex items-center justify-center text-3xl shadow-glow">
            🌾
          </div>
          <h1 className="font-display text-2xl font-black text-white">Sign In to Agrolith-AI</h1>
          <p className="text-xs text-gray-400">Access your Smart Farming Control Centre & AI Advisory</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-heading font-bold text-gray-300">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-graphite-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                placeholder="farmer@agrolith.ai"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-heading font-bold text-gray-300">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-graphite-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-heading font-bold rounded-xl shadow-glow transition-all flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="text-sm">Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/10">
          <p className="text-xs text-gray-400">
            Demo Account Pre-filled • Click Sign In to Access Dashboard
          </p>
        </div>

      </div>
    </div>
  );
}
