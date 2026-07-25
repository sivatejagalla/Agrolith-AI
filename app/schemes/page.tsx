'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, Award, FileText, CheckCircle2, Calendar } from 'lucide-react';
import { GovernmentScheme } from '@/types/api';

export default function SchemesPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('pm-kisan');

  const schemes: GovernmentScheme[] = [
    {
      scheme_id: 'pm-kisan',
      scheme_name: 'PM Kisan Samman Nidhi (PM-KISAN)',
      ministry: 'Ministry of Agriculture & Farmers Welfare',
      target_beneficiary: 'All landholding farmer families across India',
      benefit_description: 'Financial benefit of ₹6,000 per year in three equal installments of ₹2,000 directly transferred to bank account.',
      eligibility: ['Farmer families holding cultivable land in their name', 'Aadhaar linked bank account', 'e-KYC verified'],
      documents_required: ['Aadhaar Card', 'Land holding documents / Khasra-Khatauni', 'Bank Account passbook'],
      application_process: 'Self-register via PM-KISAN Portal or visit nearest Common Service Centre (CSC).',
      official_website: 'https://pmkisan.gov.in',
      helpline: '155261 / 1800-115-526',
      crops_covered: ['All Crops'],
    },
    {
      scheme_id: 'pkvy',
      scheme_name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
      ministry: 'Ministry of Agriculture & Farmers Welfare',
      target_beneficiary: 'Farmer clusters adopting organic farming practices',
      benefit_description: '₹50,000 per hectare financial assistance over 3 years for organic inputs, PGS-India certification, and marketing.',
      eligibility: ['Farmer clusters of 50 or more farmers covering 50 acres', 'Commitment to 3-year organic conversion'],
      documents_required: ['Aadhaar Card', 'Land ownership certificates', 'Cluster formation document'],
      application_process: 'Apply through State Agriculture Department to form a cluster under PKVY guidelines.',
      official_website: 'https://pgsindia-ncof.gov.in',
      helpline: '011-23382477',
      crops_covered: ['Paddy', 'Wheat', 'Pulses', 'Spices', 'Vegetables'],
    },
    {
      scheme_id: 'pmfby',
      scheme_name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      ministry: 'Ministry of Agriculture & Farmers Welfare',
      target_beneficiary: 'All farmers including sharecroppers and tenant farmers',
      benefit_description: 'Comprehensive crop insurance against non-preventable natural risks from pre-sowing to post-harvest.',
      eligibility: ['All farmers growing notified crops in notified areas', 'Kisan Credit Card (KCC) holders automatically enrolled unless opted out'],
      documents_required: ['Aadhaar Card', 'Land sowing certificate', 'KCC / Bank passbook'],
      application_process: 'Apply online through PMFBY portal, insurance companies, or CSC centers within cutoff date.',
      official_website: 'https://pmfby.gov.in',
      helpline: '14447',
      crops_covered: ['Food Crops', 'Oilseeds', 'Annual Commercial Crops'],
    },
  ];

  const filteredSchemes = schemes.filter((s) => {
    return s.scheme_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.benefit_description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-black text-white">Government Schemes Portal</h1>
          <p className="text-xs text-gray-400 mt-1">Official Central & State agricultural subsidy, insurance, and organic farming schemes.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-400">
          <Award className="w-4 h-4" />
          <span>Verified Govt Portal</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="glass-panel p-4 rounded-2xl border-white/10 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search schemes by keyword (e.g. PM-KISAN, Organic, Insurance)..."
            className="w-full bg-graphite-900 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Expandable Scheme Cards */}
      <div className="space-y-4">
        {filteredSchemes.map((scheme) => {
          const isExpanded = expandedId === scheme.scheme_id;
          return (
            <div key={scheme.scheme_id} className="glass-panel rounded-2xl border-white/10 overflow-hidden transition-all">
              
              {/* Header Bar */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : scheme.scheme_id)}
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400">{scheme.ministry}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">Active Scheme</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{scheme.scheme_name}</h3>
                  <p className="text-xs text-gray-400">{scheme.benefit_description}</p>
                </div>
                <div className="p-2 text-gray-400 hover:text-white">
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-emerald-400" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expanded Scheme Details */}
              {isExpanded && (
                <div className="p-6 border-t border-white/10 bg-graphite-900/60 space-y-6">
                  
                  {/* Eligibility */}
                  <div className="space-y-2">
                    <div className="text-xs font-heading font-bold text-amber-400 uppercase tracking-wider">Eligibility Criteria:</div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {scheme.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Required Documents */}
                  <div className="space-y-2">
                    <div className="text-xs font-heading font-bold text-cyan-400 uppercase tracking-wider">Required Documents:</div>
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {scheme.documents_required.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <a
                      href={scheme.official_website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-glow"
                    >
                      <span>Visit Official Government Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs text-gray-400">Toll-Free Helpline: <strong className="text-white">{scheme.helpline}</strong></span>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
