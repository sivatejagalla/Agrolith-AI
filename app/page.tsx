'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Sparkles, Activity, ShieldCheck, ArrowRight, Sun, Layers, Leaf, DollarSign, Database } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="space-y-24 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-12 px-6 max-w-7xl mx-auto">
        <div className="glass-panel border-emerald-500/30 rounded-3xl p-8 md:p-14 shadow-card relative overflow-hidden">
          
          {/* Background Glow Overlay */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-heading font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Agricultural AI Platform</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Empowering Farmers with <span className="gradient-text-emerald">AI Intelligence</span> & Vision Diagnostics
              </h1>

              <p className="text-lg text-gray-300 font-body leading-relaxed max-w-2xl">
                Agrolith-AI combines Google Gemini 1.5 plant vision diagnosis, real-time Mandi market trends, soil pH recommendations, and Meta WhatsApp Cloud integration into a single smart farming assistant.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-heading font-bold px-7 py-3.5 rounded-xl shadow-glow transition-all hover:-translate-y-0.5"
                >
                  <span>Launch Control Centre</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/chat"
                  className="inline-flex items-center gap-2 bg-graphite-800 hover:bg-graphite-700 text-gray-200 font-heading font-semibold px-6 py-3.5 rounded-xl border border-white/10 transition-all"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Try AI Advisory</span>
                </Link>
              </div>

              {/* Stats Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-400">98.4%</div>
                  <div className="text-xs text-gray-400 font-heading">AI Diagnostic Precision</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-cyan-400">&lt; 2s</div>
                  <div className="text-xs text-gray-400 font-heading">WhatsApp Speed</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-amber-400">5</div>
                  <div className="text-xs text-gray-400 font-heading">Indian Languages</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-400">100+</div>
                  <div className="text-xs text-gray-400 font-heading">Mandi Commodities</div>
                </div>
              </div>
            </div>

            {/* Hero Right Interactive Widget */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 rounded-2xl border-white/15 space-y-6 shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-400" />
                    <span className="font-heading font-bold text-sm text-gray-200">Live Farming Weather</span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-1 rounded-full">Telangana Zone</span>
                </div>

                <div className="text-center py-4 bg-graphite-900/60 rounded-xl border border-white/5">
                  <div className="font-display text-5xl font-black text-amber-400">28.5°C</div>
                  <div className="text-sm font-semibold text-gray-300 mt-1">Partly Sunny • Humidity 65%</div>
                </div>

                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Gemini AI Agricultural Tip</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Optimal weather window for organic Neem oil foliar spray and field irrigation during early morning hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Engineered For Modern Agriculture
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
            Core Agricultural <span className="gradient-text-emerald">AI Intelligence</span> Modules
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Designed specifically to provide actionable, multilingual farming decisions across desktop, mobile, and WhatsApp channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Multilingual AI Advisory</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Google Gemini 1.5 Flash engine providing instant agricultural answers in English, Hindi, Telugu, Tamil, and Marathi.
            </p>
            <Link href="/chat" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline pt-2">
              <span>Open AI Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Vision Disease Scanner</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Upload leaf images for automated lesion detection, pathogen classification, organic Neem oil, and bio-fungicide care.
            </p>
            <Link href="/diagnosis" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline pt-2">
              <span>Scan Plant Image</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Mandi Market Rates</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Real-time commodity price intelligence, modal rates, weekly price trends, and optimal selling timing advice.
            </p>
            <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline pt-2">
              <span>Check Market Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Soil Health Calculator</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Interactive soil pH meter analyzing acidity/alkalinity classifications and calculating exact Agricultural Lime or Gypsum dosages.
            </p>
            <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline pt-2">
              <span>Analyze Soil pH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* How It Works (4 Steps) */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl font-extrabold">How <span className="gradient-text-emerald">Agrolith-AI</span> Operates</h2>
            <p className="text-sm text-gray-400">4-step workflow connecting farmers to intelligent agricultural decisions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-graphite-900/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm">1</div>
              <h4 className="font-heading font-bold text-white">Select Language</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Choose English, Hindi, Telugu, Tamil, or Marathi for natural localized AI advice.</p>
            </div>

            <div className="bg-graphite-900/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center text-sm">2</div>
              <h4 className="font-heading font-bold text-white">Upload or Query</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Type your crop issue or snap a leaf photo for plant disease vision diagnosis.</p>
            </div>

            <div className="bg-graphite-900/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm">3</div>
              <h4 className="font-heading font-bold text-white">Gemini AI Analysis</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Gemini 1.5 Flash processes soil pH, crop symptoms, weather, and mandi data.</p>
            </div>

            <div className="bg-graphite-900/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm">4</div>
              <h4 className="font-heading font-bold text-white">Organic Action Plan</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Receive bio-pesticide recommendations, selling advisories, and PM-KISAN schemes.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
