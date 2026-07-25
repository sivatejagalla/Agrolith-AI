'use client';

import React, { useState, useEffect } from 'react';
import { Sun, CloudRain, Wind, Droplets, Sparkles, MapPin, Eye, Activity } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';
import { WeatherResponse } from '@/types/api';

export default function WeatherPage() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    AgrolithService.getWeather().then(setWeather);
  }, []);

  const forecast = [
    { day: 'Today', temp: '28°C', cond: 'Partly Sunny', rain: '20%' },
    { day: 'Tomorrow', temp: '29°C', cond: 'Clear Sky', rain: '10%' },
    { day: 'Thursday', temp: '27°C', cond: 'Light Rain', rain: '65%' },
    { day: 'Friday', temp: '26°C', cond: 'Overcast', rain: '45%' },
    { day: 'Saturday', temp: '28°C', cond: 'Sunny', rain: '15%' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-black text-white">Weather Intelligence</h1>
          <p className="text-xs text-gray-400 mt-1">Real-time Open-Meteo telemetry & Gemini AI agricultural weather advisory.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400">
          <MapPin className="w-4 h-4" />
          <span>Telangana Agriculture Zone</span>
        </div>
      </div>

      {/* Main Telemetry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <Sun className="w-6 h-6 mx-auto text-amber-400" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">Temperature</div>
          <div className="font-display text-2xl font-black text-white">
            {weather ? `${weather.temperature_c}°C` : '28.5°C'}
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <Activity className="w-6 h-6 mx-auto text-emerald-400" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">AQI Index</div>
          <div className="font-display text-2xl font-black text-emerald-400">42</div>
          <div className="text-[10px] text-emerald-400 font-bold">Good</div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <Droplets className="w-6 h-6 mx-auto text-cyan-400" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">Humidity</div>
          <div className="font-display text-2xl font-black text-white">
            {weather ? `${weather.humidity_percent}%` : '65%'}
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <Wind className="w-6 h-6 mx-auto text-gray-300" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">Wind Speed</div>
          <div className="font-display text-2xl font-black text-white">
            {weather ? `${weather.wind_speed_kmh} km/h` : '12 km/h'}
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <CloudRain className="w-6 h-6 mx-auto text-blue-400" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">Rain Chance</div>
          <div className="font-display text-2xl font-black text-white">
            {weather ? `${weather.rainfall_probability}%` : '20%'}
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-1">
          <Eye className="w-6 h-6 mx-auto text-amber-400" />
          <div className="text-[10px] text-gray-400 font-bold uppercase">UV Index</div>
          <div className="font-display text-2xl font-black text-amber-400">5.8</div>
          <div className="text-[10px] text-amber-400 font-bold">Moderate</div>
        </div>
      </div>

      {/* AI Weather Advice */}
      <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 bg-emerald-950/30 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Gemini AI Farming Weather Advisory:</span>
        </div>
        <p className="text-sm text-gray-200 leading-relaxed font-body">
          {weather ? weather.advice : 'Optimal early morning weather window for organic bio-pesticide spraying and field irrigation.'}
        </p>
      </div>

      {/* 5-Day Forecast Grid */}
      <div className="space-y-4">
        <h2 className="font-display text-xl font-bold text-white">5-Day Forecast & Crop Timeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {forecast.map((item, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border-white/10 text-center space-y-3">
              <div className="font-heading font-bold text-sm text-emerald-400">{item.day}</div>
              <div className="font-display text-2xl font-bold text-white">{item.temp}</div>
              <div className="text-xs text-gray-300 font-medium">{item.cond}</div>
              <div className="text-[10px] text-gray-500 font-semibold">Rain: {item.rain}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
