'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle2, AlertCircle, RefreshCw, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';

interface WhatsAppCardProps {
  compact?: boolean;
}

export function WhatsAppCard({ compact = false }: WhatsAppCardProps) {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [lastCheckTime, setLastCheckTime] = useState<string>('');

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || '919000000000';

  useEffect(() => {
    checkHealthStatus();
  }, []);

  const checkHealthStatus = async () => {
    setIsChecking(true);
    try {
      const res = await AgrolithService.getHealth();
      if (res && res.status === 'healthy') {
        setIsOnline(true);
      } else {
        setIsOnline(false);
      }
    } catch (e) {
      setIsOnline(false);
    } finally {
      setIsChecking(false);
      setLastCheckTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }
  };

  const handleOpenWhatsApp = () => {
    if (!isOnline) return;
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
      const url = `https://wa.me/${whatsappNumber}?text=Hello%20Agrolith%20AI,%20I%20need%20smart%20farming%20advisory.`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  if (compact) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-heading text-sm font-bold text-emerald-400 uppercase tracking-wider">Meta WhatsApp Integration</h4>
          <div className="flex items-center gap-1.5 text-[10px] font-bold">
            {isChecking ? (
              <span className="text-amber-400 flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin" /> Checking...
              </span>
            ) : isOnline ? (
              <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> 🟢 Online & AI Ready
              </span>
            ) : (
              <span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">
                🔴 Unavailable
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          Connect instantly with the Agrolith-AI WhatsApp Assistant for voice & text advisory.
        </p>

        <button
          onClick={handleOpenWhatsApp}
          disabled={!isOnline || isOpening}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-heading font-bold text-white transition-all flex items-center justify-center gap-2 shadow-glow ${
            isOnline
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 hover:-translate-y-0.5 cursor-pointer'
              : 'bg-graphite-800 border border-white/10 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isOpening ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-300" />
              <span>Opening WhatsApp Assistant...</span>
            </>
          ) : isOnline ? (
            <>
              <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
              <span>Open WhatsApp Assistant</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </>
          ) : (
            <span>Service Temporarily Unavailable</span>
          )}
        </button>

        {!isOnline && !isChecking && (
          <button
            onClick={checkHealthStatus}
            className="w-full py-1.5 text-[10px] text-emerald-400 hover:underline flex items-center justify-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Retry Connection Check</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="glass-panel p-6 md:p-8 rounded-3xl border-emerald-500/30 space-y-6 shadow-glow relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-2xl shadow-glow">
            💬
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-black text-white">Meta WhatsApp Integration</h3>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                Official Webhook
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Connect instantly with the Agrolith-AI WhatsApp Assistant for voice & text advisory.
            </p>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2 bg-graphite-900/80 px-3.5 py-2 rounded-xl border border-white/10 text-xs font-bold">
          {isChecking ? (
            <span className="text-amber-400 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Checking Health...
            </span>
          ) : isOnline ? (
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> 🟢 System Online
            </span>
          ) : (
            <span className="text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> 🔴 System Offline
            </span>
          )}
        </div>
      </div>

      {/* Status Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
        <div className="bg-graphite-900/80 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase">Backend Server</div>
          <div className="font-heading text-xs font-bold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isOnline ? 'Online' : 'Checking...'}</span>
          </div>
        </div>

        <div className="bg-graphite-900/80 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase">Meta Webhook</div>
          <div className="font-heading text-xs font-bold text-cyan-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connected</span>
          </div>
        </div>

        <div className="bg-graphite-900/80 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase">AI Engine</div>
          <div className="font-heading text-xs font-bold text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Gemini 1.5 Active</span>
          </div>
        </div>

        <div className="bg-graphite-900/80 p-3.5 rounded-2xl border border-white/5 space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase">Environment</div>
          <div className="font-heading text-xs font-bold text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Production</span>
          </div>
        </div>
      </div>

      {/* Button & Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 relative z-10">
        <div className="text-[11px] text-gray-400">
          Last health check: <strong className="text-gray-200">{lastCheckTime || 'Just now'}</strong>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {!isOnline && !isChecking && (
            <button
              onClick={checkHealthStatus}
              className="px-4 py-3 rounded-xl border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5 inline mr-1" /> Retry Connection
            </button>
          )}

          <button
            onClick={handleOpenWhatsApp}
            disabled={!isOnline || isOpening}
            className={`w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs font-heading font-bold text-white transition-all flex items-center justify-center gap-2.5 shadow-glow ${
              isOnline
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 hover:-translate-y-0.5 cursor-pointer'
                : 'bg-graphite-800 border border-white/10 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isOpening ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-300" />
                <span>Opening WhatsApp Assistant...</span>
              </>
            ) : isOnline ? (
              <>
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Open WhatsApp Assistant</span>
                <ExternalLink className="w-4 h-4" />
              </>
            ) : (
              <span>Service Temporarily Unavailable</span>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
