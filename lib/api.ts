import axios from 'axios';

// Production Railway Backend URL
export const PRODUCTION_BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://web-production-75741.up.railway.app/api/v1';

// API Base Endpoints with Fallback Sequence
export const API_BASE_CANDIDATES = [
  PRODUCTION_BACKEND_URL,
  'https://web-production-75741.up.railway.app/api/v1',
  'http://127.0.0.1:8000/api/v1'
];

export let activeApiBase = API_BASE_CANDIDATES[0];

export const apiClient = axios.create({
  baseURL: activeApiBase,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function detectBackendHost(): Promise<string> {
  for (const baseUrl of API_BASE_CANDIDATES) {
    try {
      const res = await fetch(`${baseUrl}/health`, { signal: AbortSignal.timeout(3000) });
      if (res.ok) {
        activeApiBase = baseUrl;
        apiClient.defaults.baseURL = baseUrl;
        return baseUrl;
      }
    } catch (e) {
      // try next candidate
    }
  }
  return activeApiBase;
}
