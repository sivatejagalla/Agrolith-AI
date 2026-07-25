import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="glass-panel border-t border-white/10 mt-20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-xl">🌾</div>
            <span className="font-display text-xl font-bold gradient-text-emerald">Agrolith-AI</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            AI-Powered Smart Farming Assistant delivering Gemini 1.5 plant vision diagnosis, soil health calculations, and Mandi price intelligence.
          </p>
        </div>

        {/* Column 2: Platform Links */}
        <div>
          <h4 className="font-heading text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/dashboard" className="hover:text-white transition-colors">AI Control Centre</Link></li>
            <li><Link href="/chat" className="hover:text-white transition-colors">Multilingual AI Advisory</Link></li>
            <li><Link href="/diagnosis" className="hover:text-white transition-colors">Crop Disease Vision Scanner</Link></li>
            <li><Link href="/weather" className="hover:text-white transition-colors">Weather Intelligence</Link></li>
          </ul>
        </div>

        {/* Column 3: Agricultural Intelligence */}
        <div>
          <h4 className="font-heading text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">Intelligence</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/schemes" className="hover:text-white transition-colors">PM-KISAN & PKVY Schemes</Link></li>
            <li><a href="http://127.0.0.1:8000/docs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">FastAPI Swagger UI (/docs)</a></li>
            <li><a href="http://127.0.0.1:8000/api/v1/health" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Health Metadata API</a></li>
          </ul>
        </div>

        {/* Column 4: WhatsApp Integration */}
        <div>
          <h4 className="font-heading text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">Meta Integration</h4>
          <p className="text-xs text-gray-400 mb-3">WhatsApp Cloud API Assistant active for text & voice notes.</p>
          <a
            href="https://wa.me/?text=Hello%20Agrolith%20AI"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-glow"
          >
            💬 Open WhatsApp Chat
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Agrolith-AI — Production Hackathon Release. All rights reserved.
      </div>
    </footer>
  );
}
