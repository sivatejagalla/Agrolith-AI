'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Cpu, Send, Sparkles, User, Image as ImageIcon, Copy, Check } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: '🌾 **Welcome to Agrolith-AI Advisory**!\n\nI am your smart farming assistant powered by Google Gemini 1.5 Flash. Select your language and ask any crop, fertilizer, pest control, or soil health question.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputQuery, setInputQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsLoading(true);

    const res = await AgrolithService.queryAI({ query: textToSend, language: selectedLanguage });

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'assistant',
      text: res.response_text || 'Thank you for your question. Agrolith AI recommends proper field aeration and organic bio-pesticide spray.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const presetPrompts = [
    '🌾 How to cure rice blast in paddy crop organically?',
    '🌱 Best bio-fertilizers for wheat crop in acidic soil?',
    '📜 PM Kisan scheme eligibility and installment dates?',
    '💧 Recommended irrigation schedule for tomato during fruiting?',
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 h-[85vh] flex flex-col">
      
      {/* Header */}
      <div className="glass-panel p-4 rounded-2xl border-white/10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-white">Multilingual Gemini AI Advisory</h1>
            <p className="text-xs text-gray-400">Google Gemini 1.5 Flash Engine</p>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-semibold hidden sm:inline">Language:</span>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-graphite-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400"
          >
            <option value="English">English</option>
            <option value="Hindi">हिंदी (Hindi)</option>
            <option value="Telugu">తెలుగు (Telugu)</option>
            <option value="Tamil">தமிழ் (Tamil)</option>
            <option value="Marathi">मराठी (Marathi)</option>
          </select>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 glass-panel p-6 rounded-2xl border-white/10 overflow-y-auto space-y-6">
        
        {/* Preset Prompt Chips */}
        {messages.length <= 1 && (
          <div className="space-y-2 mb-6">
            <div className="text-xs font-heading font-bold text-gray-400">Suggested One-Click Prompts:</div>
            <div className="flex flex-wrap gap-2">
              {presetPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="bg-graphite-900/80 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-xs text-emerald-300 px-3.5 py-2 rounded-xl transition-all text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message Stream */}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-3xl ${
              msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-sm ${
                msg.sender === 'user'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-graphite-800 border border-white/10 text-emerald-400'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            </div>

            <div
              className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.sender === 'user'
                  ? 'bg-emerald-600/90 text-white border border-emerald-500/30'
                  : 'bg-graphite-900/90 text-gray-200 border border-white/10'
              }`}
            >
              {msg.text}
              <div className="text-[10px] text-gray-400 mt-2 text-right">{msg.timestamp}</div>
            </div>
          </div>
        ))}

        {/* Typing Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-3 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 max-w-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Consulting Agrolith Gemini AI...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="mt-4 flex items-center gap-3 glass-panel p-2 rounded-2xl border-white/10"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask Agrolith AI any crop, fertilizer, pest, or soil health question..."
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
        />

        <button
          type="submit"
          disabled={isLoading || !inputQuery.trim()}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white p-3 rounded-xl transition-all shadow-glow"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
