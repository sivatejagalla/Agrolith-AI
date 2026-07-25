export interface User {
  id?: string;
  email: string;
  full_name: string;
  phone_number?: string;
  language_preference?: string;
  created_at?: string;
}

export interface HealthResponse {
  status: string;
  project_name: string;
  version: string;
  timestamp?: string;
}

export interface AIQueryRequest {
  query: string;
  language?: string;
}

export interface AIQueryResponse {
  status: string;
  query: string;
  language: string;
  response_text: string;
  timestamp: string;
}

export interface DiseaseDiagnosisRequest {
  crop_name?: string;
  image_url?: string;
}

export interface DiseaseDiagnosisResponse {
  crop_name: string;
  disease_name: string;
  confidence_score: number;
  severity: 'Low' | 'Moderate' | 'Severe';
  symptoms: string[];
  organic_treatments: string[];
  chemical_treatments: string[];
  prevention_tips: string[];
  timestamp: string;
}

export interface MarketPriceRequest {
  crop_name: string;
  mandi_location?: string;
}

export interface MarketPriceResponse {
  crop_name: string;
  mandi_location: string;
  modal_price: number;
  min_price: number;
  max_price: number;
  price_trend: 'Upward' | 'Downward' | 'Stable';
  trend_percentage: number;
  recommendation: string;
  updated_at: string;
}

export interface SoilHealthRequest {
  ph_level: number;
  nitrogen_level?: number;
  phosphorus_level?: number;
  potassium_level?: number;
}

export interface SoilHealthResponse {
  ph_level: number;
  classification: string;
  nutrient_deficiencies: string[];
  organic_amendments: string[];
  recommended_crops: string[];
  updated_at: string;
}

export interface WeatherResponse {
  temperature_c: number;
  condition: string;
  humidity_percent: number;
  wind_speed_kmh: number;
  rainfall_probability: number;
  advice: string;
  location: string;
}

export interface GovernmentScheme {
  scheme_id: string;
  scheme_name: string;
  ministry: string;
  target_beneficiary: string;
  benefit_description: string;
  eligibility: string[];
  documents_required: string[];
  application_process: string;
  official_website: string;
  helpline: string;
  crops_covered: string[];
}
