'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, DollarSign, Layers, Activity, Sparkles, ArrowRight, ShieldCheck, TrendingUp, AlertCircle, Droplets, Wind, CloudRain, Sunrise, Sunset, Eye, CheckCircle2 } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';
import { WeatherResponse, MarketPriceResponse, SoilHealthResponse } from '@/types/api';

export default function DashboardPage() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [selectedCrop, setSelectedCrop] = useState<string>('Wheat');
  const [marketData, setMarketData] = useState<MarketPriceResponse | null>(null);
  const [phValue, setPhValue] = useState<number>(6.5);
  const [soilData, setSoilData] = useState<SoilHealthResponse | null>(null);

  useEffect(() => {
    AgrolithService.getWeather().then(setWeather);
    fetchMarketPrice('Wheat');
    fetchSoilHealth(6.5);
  }, []);

  const fetchMarketPrice = async (crop: string) => {
    const res = await AgrolithService.getMarketPrice({ crop_name: crop });
    setMarketData(res);
  };

  const fetchSoilHealth = async (ph: number) => {
    const res = await AgrolithService.calculateSoilHealth({ ph_level: ph });
    setSoilData(res);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border-white/10">
        <div>
          <h1 className="font-display text-3xl font-black text-white">AI Control Centre</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time farm telemetry, AI recommendations, AQI, and Mandi intelligence.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-heading text-xs font-bold px-4 py-2.5 rounded-xl shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consult Gemini AI</span>
          </Link>
        </div>
      </div>

      {/* 3. Weather Card Dashboard */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">Live Weather & Micro-Climate Telemetry</h2>
              <p className="text-xs text-gray-400">Telangana Agriculture Zone • Updated Live</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Crop Suitability: Excellent 🌾
            </span>
          </div>
        </div>

        {/* Weather Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Temperature</div>
            <div className="font-display text-2xl font-black text-amber-400">
              {weather ? `${weather.temperature_c}°C` : '28.5°C'}
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold">Optimal</div>
          </div>

          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">AQI Index</div>
            <div className="font-display text-2xl font-black text-emerald-400">42</div>
            <div className="text-[10px] text-emerald-400 font-semibold">Good Air Quality</div>
          </div>

          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Humidity</div>
            <div className="font-display text-2xl font-black text-cyan-400">
              {weather ? `${weather.humidity_percent}%` : '65%'}
            </div>
            <div className="text-[10px] text-cyan-400 font-semibold">Moist</div>
          </div>

          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Wind Speed</div>
            <div className="font-display text-2xl font-black text-gray-200">
              {weather ? `${weather.wind_speed_kmh} km/h` : '12 km/h'}
            </div>
            <div className="text-[10px] text-gray-400 font-semibold">Moderate Breeze</div>
          </div>

          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Rain Probability</div>
            <div className="font-display text-2xl font-black text-blue-400">
              {weather ? `${weather.rainfall_probability}%` : '20%'}
            </div>
            <div className="text-[10px] text-blue-400 font-semibold">Low Chance</div>
          </div>

          <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-[10px] font-bold text-gray-400 uppercase">Soil Moisture</div>
            <div className="font-display text-2xl font-black text-emerald-400">72%</div>
            <div className="text-[10px] text-emerald-400 font-semibold">Hydrated</div>
          </div>

        </div>

        {/* AI Weather Advice Banner */}
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs">
            <div className="font-bold text-emerald-400 uppercase tracking-wider">Gemini AI Agricultural Advisory:</div>
            <p className="text-gray-300 leading-relaxed font-body">
              {weather ? weather.advice : 'Optimal early morning window for organic bio-pesticide spraying and field irrigation.'}
            </p>
          </div>
        </div>
      </div>

      {/* Grid Row: Soil pH & Mandi Prices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Soil Health Calculator Widget */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span className="font-heading font-bold text-sm text-gray-200">Soil Health & pH Meter</span>
            </div>
            <span className="font-display text-xl font-bold text-emerald-400">pH {phValue.toFixed(1)}</span>
          </div>

          <div className="space-y-3">
            <label className="text-xs font-heading font-semibold text-gray-400">Adjust Interactive Soil pH Meter:</label>
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
              <span>4.0 (Acidic)</span>
              <span>6.5 (Optimal)</span>
              <span>9.5 (Alkaline)</span>
            </div>
          </div>

          {soilData && (
            <div className="p-4 bg-graphite-900/80 border border-white/10 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300">Soil Classification:</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {soilData.classification}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {soilData.organic_amendments[0]}
              </p>
            </div>
          )}
        </div>

        {/* Mandi Commodity Prices */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-400" />
              <span className="font-heading font-bold text-sm text-gray-200">Mandi Price Intelligence</span>
            </div>

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

          {marketData && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="text-[10px] text-gray-400 font-bold uppercase">Modal Benchmark Rate</div>
                <div className="font-display text-2xl font-black text-amber-400">
                  ₹{marketData.modal_price}
                </div>
                <div className="text-[10px] text-gray-400">per Quintal</div>
              </div>

              <div className="bg-graphite-900/80 p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="text-[10px] text-gray-400 font-bold uppercase">Weekly Trend</div>
                <div className="font-display text-xl font-bold text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>+{marketData.trend_percentage}%</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-semibold">{marketData.recommendation}</div>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
