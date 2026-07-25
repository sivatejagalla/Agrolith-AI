'use client';

import React, { useState } from 'react';
import { Leaf, Upload, Camera, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';
import { AgrolithService } from '@/services/agrolith-service';
import { DiseaseDiagnosisResponse } from '@/types/api';

export default function DiagnosisPage() {
  const [cropInput, setCropInput] = useState<string>('Paddy');
  const [diagnosisResult, setDiagnosisResult] = useState<DiseaseDiagnosisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [selectedSample, setSelectedSample] = useState<string | null>(null);

  const sampleLeaves = [
    { crop: 'Paddy', disease: 'Rice Blast (Magnaporthe oryzae)', icon: '🌾' },
    { crop: 'Tomato', disease: 'Late Blight (Phytophthora infestans)', icon: '🍅' },
    { crop: 'Wheat', disease: 'Leaf Rust (Puccinia triticina)', icon: '🌽' },
    { crop: 'Cotton', disease: 'Cotton Leaf Curl Virus', icon: '🪴' },
  ];

  const handleDiagnose = async (cropName?: string) => {
    const targetCrop = cropName || cropInput || 'Paddy';
    setIsAnalyzing(true);
    const res = await AgrolithService.diagnoseCropDisease({ crop_name: targetCrop });
    setDiagnosisResult(res);
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-black text-white">Crop Disease Vision Scanner</h1>
          <p className="text-xs text-gray-400 mt-1">Google Gemini AI plant vision lesion analysis and organic treatment prescriptions.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400">
          <Sparkles className="w-4 h-4" />
          <span>Vision AI Ready</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Upload & Controls */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Sample Leaf Cards */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-3">
            <label className="text-xs font-heading font-bold text-gray-300">Click Sample Leaf Photo to Test:</label>
            <div className="grid grid-cols-2 gap-3">
              {sampleLeaves.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSample(sample.crop);
                    setCropInput(sample.crop);
                    handleDiagnose(sample.crop);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedSample === sample.crop
                      ? 'bg-emerald-500/20 border-emerald-400 text-white'
                      : 'bg-graphite-900/60 border-white/10 text-gray-300 hover:border-emerald-500/40'
                  }`}
                >
                  <div className="text-2xl mb-1">{sample.icon}</div>
                  <div className="font-heading font-bold text-xs">{sample.crop}</div>
                  <div className="text-[10px] text-gray-400 truncate">{sample.disease}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Upload Area */}
          <div className="glass-panel p-6 rounded-2xl border-white/10 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-heading font-bold text-gray-300">Crop Name:</label>
              <input
                type="text"
                value={cropInput}
                onChange={(e) => setCropInput(e.target.value)}
                placeholder="e.g. Paddy / Tomato / Cotton"
                className="w-full bg-graphite-900 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="border-2 border-dashed border-white/20 hover:border-emerald-400 rounded-2xl p-8 text-center space-y-3 transition-colors cursor-pointer bg-graphite-900/40">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                <Upload className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-gray-300">Drag & Drop Plant Image Here</div>
              <div className="text-[10px] text-gray-500">Supports JPG, PNG, WEBP (Max 10MB)</div>
            </div>

            <button
              onClick={() => handleDiagnose()}
              disabled={isAnalyzing}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-heading font-bold rounded-xl shadow-glow transition-all flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyzing Leaf Tissue...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Run Vision AI Diagnosis</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Diagnosis Results Display */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 md:p-8 rounded-2xl border-white/10 space-y-6 h-full">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Vision Diagnostic Report</span>
            </h2>

            {diagnosisResult ? (
              <div className="space-y-6">
                
                {/* Status Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-graphite-900/80 p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Confidence Meter</div>
                    <div className="font-display text-xl font-extrabold text-emerald-400 mt-0.5">
                      {diagnosisResult.confidence_score}%
                    </div>
                  </div>

                  <div className="bg-graphite-900/80 p-3.5 rounded-xl border border-white/10">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Severity Meter</div>
                    <div className="font-heading text-sm font-bold text-amber-400 mt-1">
                      {diagnosisResult.severity}
                    </div>
                  </div>

                  <div className="bg-graphite-900/80 p-3.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Target Crop</div>
                    <div className="font-heading text-sm font-bold text-gray-200 mt-1">
                      {diagnosisResult.crop_name}
                    </div>
                  </div>
                </div>

                {/* Identified Disease Name */}
                <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-amber-400">Pathogen / Disease Identified:</div>
                  <div className="font-display text-lg font-bold text-white">
                    {diagnosisResult.disease_name}
                  </div>
                </div>

                {/* Organic Treatments */}
                <div className="space-y-2">
                  <div className="text-xs font-heading font-bold text-emerald-400 uppercase tracking-wider">🌿 Organic Bio-Treatment Protocol:</div>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {diagnosisResult.organic_treatments.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-graphite-900/60 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prevention Tips */}
                <div className="space-y-2">
                  <div className="text-xs font-heading font-bold text-cyan-400 uppercase tracking-wider">🛡️ Field Prevention Guidelines:</div>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {diagnosisResult.prevention_tips.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-graphite-900/60 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ) : (
              <div className="py-16 text-center text-gray-500 space-y-3">
                <Leaf className="w-12 h-12 mx-auto text-gray-600 animate-pulse" />
                <p className="text-sm">Click a sample leaf card or upload an image to run Gemini AI Vision diagnosis.</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
