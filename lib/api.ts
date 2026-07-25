import axios from 'axios';

// API Base Endpoints with Fallback Sequence
export const API_BASE_CANDIDATES = [
  'http://127.0.0.1:8000/api/v1',
  'https://agrolith-backend.up.railway.app/api/v1',
  'https://agrolith-backend.onrender.com/api/v1'
];

export let activeApiBase = API_BASE_CANDIDATES[0];

export const apiClient = axios.create({
  baseURL: activeApiBase,
  timeout: 10000,
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
