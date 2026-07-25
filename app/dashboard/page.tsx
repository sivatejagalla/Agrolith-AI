'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, DollarSign, Layers, Activity, Sparkles, ArrowRight, ShieldCheck, TrendingUp, AlertCircle } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';
import { WeatherResponse, MarketPriceResponse, SoilHealthResponse } from '@/types/api';

export default function DashboardPage() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<string>('Wheat');
  const [marketData, setMarketData] = useState<MarketPriceResponse | null>(null);
  const [phValue, setPhValue] = useState<number>(6.5);
  const [soilData, setSoilData] = useState<SoilHealthResponse | null>(null);
  const [isLoadingPrice, setIsLoadingPrice] = useState<boolean>(false);

  useEffect(() => {
    AgrolithService.getWeather().then(setWeather);
    fetchMarketPrice('Wheat');
    fetchSoilHealth(6.5);
  }, []);

  const fetchMarketPrice = async (crop: string) => {
    setIsLoadingPrice(true);
    const res = await AgrolithService.getMarketPrice({ crop_name: crop });
    setMarketData(res);
    setIsLoadingPrice(false);
  };

  const fetchSoilHealth = async (ph: number) => {
    const res = await AgrolithService.calculateSoilHealth({ ph_level: ph });
    setSoilData(res);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      
      {/* Dashboard Top Greeting Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-white/10">
        <div>
          <h1 className="font-display text-3xl font-black text-white">AI Control Centre</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time farm telemetry, AI recommendations, and Mandi intelligence.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-heading text-xs font-bold px-4 py-2.5 rounded-xl shadow-glow"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consult Gemini AI</span>
          </Link>
        </div>
      </div>

      {/* Grid Row 1: Weather & Soil pH Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Weather Intelligence Card */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-400" />
              <span className="font-heading font-bold text-sm text-gray-200">Location Weather Intelligence</span>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Live Sync</span>
          </div>

          <div className="bg-graphite-900/80 p-6 rounded-xl border border-white/5 text-center">
            <div className="font-display text-4xl font-extrabold text-amber-400">
              {weather ? `${weather.temperature_c}°C` : '28.5°C'}
            </div>
            <div className="text-sm font-semibold text-gray-300 mt-1">
              {weather ? weather.condition : 'Partly Sunny'} • Humidity {weather ? `${weather.humidity_percent}%` : '65%'}
            </div>
          </div>

          <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Agricultural Recommendation</div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {weather ? weather.advice : 'Optimal morning weather for bio-fertilizer spraying and soil moisture maintenance.'}
            </p>
          </div>
        </div>

        {/* Soil Health pH Calculator Widget */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span className="font-heading font-bold text-sm text-gray-200">Soil Health & pH Meter</span>
            </div>
            <span className="font-display text-xl font-bold text-emerald-400">pH {phValue.toFixed(1)}</span>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-heading font-semibold text-gray-400">Adjust Interactive Soil pH Range:</label>
            <input
              type="range"
              min="4.0"
              max="9.5"
              step="0.1"
              value={phValue}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setPhValue(val);
                fetchSoilHealth(val);
              }}
              className="w-full h-2 bg-graphite-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-bold">
              <span>4.0 (Very Acidic)</span>
              <span>6.5 (Optimal)</span>
              <span>9.5 (Very Alkaline)</span>
            </div>
          </div>

          {soilData && (
            <div className="p-4 bg-graphite-900/80 border border-white/10 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300">Soil Diagnosis:</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  {soilData.classification}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {soilData.organic_amendments[0]}
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Grid Row 2: Mandi Market Rates */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-400" />
            <span className="font-heading font-bold text-sm text-gray-200">Mandi Commodity Market Intelligence</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-semibold">Select Crop:</span>
            <select
              value={selectedCrop}
              onChange={(e) => {
                setSelectedCrop(e.target.value);
                fetchMarketPrice(e.target.value);
              }}
              className="bg-graphite-900 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-400"
            >
              <option value="Wheat">Wheat (गेहूँ / గోధుమలు)</option>
              <option value="Paddy">Paddy / Rice (धान / వరి)</option>
              <option value="Cotton">Cotton (कपास / ప్రత్తి)</option>
              <option value="Maize">Maize (मक्का / మొక్కజొన్న)</option>
            </select>
          </div>
        </div>

        {marketData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-graphite-900/60 p-4 rounded-xl border border-white/5">
              <div className="text-xs text-gray-400 font-semibold">Modal Price</div>
              <div className="font-display text-2xl font-extrabold text-amber-400 mt-1">
                ₹{marketData.modal_price} / Quintal
              </div>
            </div>

            <div className="bg-graphite-900/60 p-4 rounded-xl border border-white/5">
              <div className="text-xs text-gray-400 font-semibold">Min - Max Spread</div>
              <div className="font-display text-lg font-bold text-gray-200 mt-1">
                ₹{marketData.min_price} - ₹{marketData.max_price}
              </div>
            </div>

            <div className="bg-graphite-900/60 p-4 rounded-xl border border-white/5">
              <div className="text-xs text-gray-400 font-semibold">Weekly Trend</div>
              <div className="flex items-center gap-1.5 font-heading text-sm font-bold text-emerald-400 mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+{marketData.trend_percentage}% Upward</span>
              </div>
            </div>

            <div className="bg-graphite-900/60 p-4 rounded-xl border border-white/5">
              <div className="text-xs text-gray-400 font-semibold">Mandi Location</div>
              <div className="font-heading text-sm font-bold text-gray-300 mt-1">
                {marketData.mandi_location}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
