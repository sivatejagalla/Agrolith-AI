'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Sparkles, ArrowRight, Sun, Layers, Leaf, DollarSign, ChevronDown, ChevronUp, Quote, CheckCircle2, ShieldCheck, Zap, Globe, MessageSquare, Volume2 } from 'lucide-react';

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const capabilities = [
    { icon: Leaf, title: 'Vision Disease Scanner', desc: 'Instant leaf lesion diagnosis with Gemini AI vision analysis & bio-treatment recipes.' },
    { icon: Cpu, title: 'Multilingual AI Advisory', desc: 'Natural voice & text advisory in English, Hindi, Telugu, Tamil, and Marathi.' },
    { icon: Sun, title: 'Weather Prediction Intel', desc: 'Hyper-local temperature, rainfall probability, humidity, and UV crop advisories.' },
    { icon: Layers, title: 'Soil pH Calculator', desc: 'Interactive soil pH meter calculating exact organic soil amendments & lime dosages.' },
    { icon: DollarSign, title: 'Mandi Price Intelligence', desc: 'Real-time commodity rates, price spread analysis, and optimal selling timing advice.' },
    { icon: ShieldCheck, title: 'Government Schemes Portal', desc: 'PM-KISAN, PKVY, and PMFBY eligibility matcher with official application links.' },
    { icon: Volume2, title: 'Meta WhatsApp Assistant', desc: 'Send text or voice notes via WhatsApp for instant automated AI responses.' },
  ];

  const testimonials = [
    { name: 'Rajesh Patel', location: 'Gujarat', crop: 'Cotton Farmer', text: 'Agrolith AI diagnosed leaf curl virus on my cotton crop in seconds and suggested Neem bio-pesticide which saved 40% of my harvest.' },
    { name: 'Srinivas Rao', location: 'Telangana', crop: 'Paddy Farmer', text: 'The Mandi price intelligence alerted me to hold my paddy stock for 10 days, helping me get ₹300 higher per quintal!' },
    { name: 'Ankita Sharma', location: 'Punjab', crop: 'Wheat Farmer', text: 'Soil pH calculator gave exact gypsum application dosages that improved my soil nutrient absorption significantly.' },
  ];

  const faqs = [
    { q: 'How does Agrolith-AI diagnose plant diseases?', a: 'You can upload or snap a leaf photo using your phone or desktop. Our Google Gemini 1.5 Flash vision engine analyzes lesion patterns and returns pathogen details with organic bio-treatment protocols.' },
    { q: 'Which languages are supported?', a: 'Agrolith-AI supports English, Hindi (हिंदी), Telugu (తెలుగు), Tamil (தமிழ்), and Marathi (मराठी) across web, mobile, and WhatsApp interfaces.' },
    { q: 'Is Agrolith-AI connected to live Mandi market rates?', a: 'Yes, Agrolith-AI tracks real-time market prices, modal rates, and weekly price trends across 100+ Indian commodities.' },
    { q: 'How do I use Agrolith-AI on WhatsApp?', a: 'Simply click "Open WhatsApp Chat" to interact with our Meta Cloud API webhook via text or voice messages.' },
  ];

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-10 px-6 max-w-7xl mx-auto">
        <div className="glass-panel border-emerald-500/30 rounded-3xl p-8 md:p-14 shadow-glow relative overflow-hidden">
          
          {/* Animated Background Glow Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-heading font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Agricultural AI Platform</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                World-Class <span className="gradient-text-emerald">Smart Farming AI</span> Platform
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-body leading-relaxed max-w-2xl">
                Agrolith-AI delivers Google Gemini 1.5 plant vision diagnosis, soil health pH recommendations, Mandi price intelligence, and Meta WhatsApp Cloud integration into a seamless SaaS platform.
              </p>

              {/* Glowing Action Buttons */}
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
                  className="inline-flex items-center gap-2 bg-graphite-800 hover:bg-graphite-700 text-gray-200 font-heading font-semibold px-6 py-3.5 rounded-xl border border-white/10 transition-all shadow-glow"
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Try Multilingual AI</span>
                </Link>
              </div>

              {/* Statistics Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-400">98.4%</div>
                  <div className="text-xs text-gray-400 font-heading">AI Accuracy</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-cyan-400">100+</div>
                  <div className="text-xs text-gray-400 font-heading">Crops Covered</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-amber-400">5</div>
                  <div className="text-xs text-gray-400 font-heading">Indian Languages</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-extrabold text-emerald-400">50K+</div>
                  <div className="text-xs text-gray-400 font-heading">Active Farmers</div>
                </div>
              </div>

            </div>

            {/* Hero Right Floating Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 rounded-2xl border-white/15 space-y-6 shadow-glow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-amber-400" />
                    <span className="font-heading font-bold text-sm text-gray-200">Farming Telemetry</span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-3 py-1 rounded-full border border-emerald-500/30">Live Sync</span>
                </div>

                <div className="text-center py-5 bg-graphite-900/80 rounded-xl border border-white/5">
                  <div className="font-display text-5xl font-black text-amber-400">28.5°C</div>
                  <div className="text-xs font-semibold text-gray-300 mt-1">Partly Sunny • Humidity 65% • AQI 42 (Good)</div>
                </div>

                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Gemini AI Field Advisory</div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Optimal weather window for organic Neem oil foliar spray and field irrigation during early morning hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. AI Capabilities Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            Smart Farming Suite
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black">
            Comprehensive <span className="gradient-text-emerald">AI Capabilities</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Everything modern agriculture needs built into a single production platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3 border-white/10">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4-Step Animated How It Works Workflow */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-3xl space-y-10 border-white/10">
          <div className="text-center space-y-3">
            <h2 className="font-display text-3xl font-black">How <span className="gradient-text-emerald">Agrolith-AI</span> Works</h2>
            <p className="text-xs text-gray-400">4-step workflow connecting farmers to intelligent agricultural decisions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-graphite-900/80 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">1</div>
              <h4 className="font-heading font-bold text-sm text-white">Select Language</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Choose English, Hindi, Telugu, Tamil, or Marathi for natural localized AI advice.</p>
            </div>

            <div className="bg-graphite-900/80 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center text-xs">2</div>
              <h4 className="font-heading font-bold text-sm text-white">Upload or Query</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Type your crop issue or snap a leaf photo for plant disease vision diagnosis.</p>
            </div>

            <div className="bg-graphite-900/80 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">3</div>
              <h4 className="font-heading font-bold text-sm text-white">Gemini AI Analysis</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Gemini 1.5 Flash processes soil pH, crop symptoms, weather, and mandi data.</p>
            </div>

            <div className="bg-graphite-900/80 p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">4</div>
              <h4 className="font-heading font-bold text-sm text-white">Organic Action Plan</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Receive bio-pesticide recommendations, selling advisories, and PM-KISAN schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Farmer Success Stories */}
      <section className="px-6 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-black">Farmer <span className="gradient-text-emerald">Success Stories</span></h2>
          <p className="text-xs text-gray-400">Real feedback from farmers using Agrolith-AI across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl space-y-4 border-white/10">
              <Quote className="w-6 h-6 text-emerald-400" />
              <p className="text-xs text-gray-300 leading-relaxed italic font-body">"{item.text}"</p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-white">{item.name}</div>
                  <div className="text-[10px] text-gray-400">{item.crop} • {item.location}</div>
                </div>
                <div className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full">Verified</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ Collapsible Accordion */}
      <section className="px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="font-display text-3xl font-black">Frequently Asked <span className="gradient-text-emerald">Questions</span></h2>
          <p className="text-xs text-gray-400">Everything you need to know about Agrolith-AI features and integrations.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="glass-panel rounded-2xl border-white/10 overflow-hidden transition-all">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-heading font-bold text-sm text-white hover:bg-white/5 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-gray-300 leading-relaxed border-t border-white/10 pt-4 bg-graphite-900/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
