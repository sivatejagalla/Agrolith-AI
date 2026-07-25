'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Settings, Globe, Bell, ShieldCheck, LogOut } from 'lucide-react';

export default function ProfilePage() {
  const [language, setLanguage] = useState<string>('English');
  const [whatsappAlerts, setWhatsappAlerts] = useState<boolean>(true);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-2xl shadow-glow">
            👨‍🌾
          </div>
          <div>
            <h1 className="font-display text-2xl font-black text-white">Farmer Profile & Settings</h1>
            <p className="text-xs text-gray-400">Manage language preferences, WhatsApp notifications, and account settings.</p>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="glass-panel p-8 rounded-2xl border-white/10 space-y-6">
        
        {/* Language Preference */}
        <div className="flex items-center justify-between p-4 bg-graphite-900/60 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="font-heading font-bold text-sm text-white">AI Language Preference</div>
              <div className="text-xs text-gray-400">Set primary language for Gemini AI advisory & WhatsApp messages.</div>
            </div>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-graphite-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400"
          >
            <option value="English">English</option>
            <option value="Hindi">हिंदी (Hindi)</option>
            <option value="Telugu">తెలుగు (Telugu)</option>
            <option value="Tamil">தமிழ் (Tamil)</option>
            <option value="Marathi">मराठी (Marathi)</option>
          </select>
        </div>

        {/* WhatsApp Notification Toggle */}
        <div className="flex items-center justify-between p-4 bg-graphite-900/60 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-amber-400" />
            <div>
              <div className="font-heading font-bold text-sm text-white">WhatsApp Mandi Price Alerts</div>
              <div className="text-xs text-gray-400">Receive daily morning market price updates on WhatsApp.</div>
            </div>
          </div>

          <button
            onClick={() => setWhatsappAlerts(!whatsappAlerts)}
            className={`w-12 h-6 rounded-full p-1 transition-colors ${
              whatsappAlerts ? 'bg-emerald-500' : 'bg-graphite-700'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                whatsappAlerts ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Logout Button */}
        <div className="pt-4 border-t border-white/10">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
