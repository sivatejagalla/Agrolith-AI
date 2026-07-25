<div align="center">

# 🌾 Agrolith-AI — AI-Powered Smart Farming Assistant

[![Next.js 15](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js&style=flat-square)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi&style=flat-square)](https://fastapi.tiangolo.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-1.5%20Flash-8E44AD?logo=google&style=flat-square)](https://ai.google.dev/)
[![Meta WhatsApp](https://img.shields.io/badge/WhatsApp-Cloud%20API-25D366?logo=whatsapp&style=flat-square)](https://developers.facebook.com/docs/whatsapp)
[![Python Pytest](https://img.shields.io/badge/Tests-27%2F27%20Passed-brightgreen?logo=pytest&style=flat-square)](https://pytest.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**Agrolith-AI** is a production-grade, omnichannel smart farming platform. It combines Next.js 15, FastAPI, Gemini 1.5 AI, and Meta WhatsApp Cloud API to deliver real-time agricultural advisory, crop disease vision diagnosis, soil health calculations, and weather telemetry directly to farmers.

[Live Web App](https://agrolith-ai.vercel.app) • [API Documentation](https://web-production-75741.up.railway.app/docs) • [GitHub Repository](https://github.com/sivatejagalla/Agrolith-AI)

</div>

---

## 🌟 Key Features

- 📱 **Meta WhatsApp Cloud API Integration** — Seamless voice notes, plant photos, and text queries via Meta Webhooks.
- 🤖 **Multilingual Gemini 1.5 Advisory** — Contextual Q&A supporting 5 Indian languages (*English, Hindi, Telugu, Tamil, Marathi*).
- 🔬 **Crop Disease Vision Scanner** — AI vision diagnosis of leaf photos with pathogen classification and organic Neem oil protocols.
- 🌦️ **Live Weather & Air Quality Telemetry** — Open-Meteo integration providing AQI Index, UV Index, Wind, Soil Moisture, and 5-day crop timelines.
- 💰 **Mandi Price Intelligence** — Real-time commodity market prices with optimal selling window advisories.
- 🏛️ **Government Schemes Portal** — Interactive eligibility checker for *PM-KISAN*, *PMFBY*, *PKVY*, and *KCC*.
- 🌱 **Soil Health Analyzer** — Soil pH slider (4.0 – 9.5), NPK deficiency detection, and bio-amendment recommendations.
- 🗣️ **Text-to-Speech (TTS) & Speech-to-Text (STT)** — Multi-language speech synthesis and transcription.

---

## 🌐 Live Production Deployments

- **Production Web Application**: [https://agrolith-ai.vercel.app](https://agrolith-ai.vercel.app)
- **Railway FastAPI Backend**: [https://web-production-75741.up.railway.app](https://web-production-75741.up.railway.app)
- **Interactive Swagger UI**: [https://web-production-75741.up.railway.app/docs](https://web-production-75741.up.railway.app/docs)
- **Meta WhatsApp Webhook**: `https://web-production-75741.up.railway.app/api/v1/whatsapp/webhook`

---

## 🏗️ Architecture Overview

```text
               +----------------------------------+
               |        Agrolith-AI Clients       |
               | (Next.js 15 App / WhatsApp Cloud) |
               +----------------+-----------------+
                                |
                                v
               +----------------------------------+
               |   FastAPI Production Backend     |
               | (ASGI Async Engine / Uvicorn)    |
               +----------------+-----------------+
                                |
        +-----------------------+-----------------------+
        |                       |                       |
        v                       v                       v
+---------------+       +---------------+       +---------------+
| Gemini 1.5 AI |       |  Open-Meteo   |       | Meta Webhooks |
| Advisory/Vision|      | Weather Tele. |       | Messaging API |
+---------------+       +---------------+       +---------------+
```

---

## 📁 Repository Structure

```text
├── app/                        # FastAPI Application Package
│   ├── api/
│   │   ├── endpoints/          # API Routers (ai, agri, whatsapp, auth, health)
│   │   └── router.py           # Root API Router
│   ├── core/                   # Configuration, Logger, JWT Security
│   ├── models/                 # Database & Data Models
│   ├── schemas/                # Pydantic Input/Output Schemas
│   ├── services/               # Gemini AI, Speech, WhatsApp, Weather Services
│   └── main.py                 # FastAPI Application Entry Point
├── app/ (Next.js App Router)   # Frontend App Directory
│   ├── chat/                   # Multilingual AI Advisory Interface
│   ├── dashboard/              # AI Control Centre & Weather Telemetry
│   ├── diagnosis/              # Crop Vision Disease Scanner
│   ├── schemes/                # Government Schemes Portal
│   ├── weather/                # Weather Intelligence Dashboard
│   ├── layout.tsx              # Root Layout & Typography
│   └── page.tsx                # SaaS Landing Page & Workflow
├── components/                 # Reusable React UI Components (Navbar, Footer, WhatsAppCard)
├── lib/                        # API Client & Host Autodetect
├── services/                   # Frontend Agrolith Service Layer
├── tests/                      # Pytest Test Suite (27/27 Test Cases Passing)
├── Dockerfile                  # Production Multi-Stage Dockerfile
├── railway.json                # Railway Nixpacks Deployment Configuration
├── vercel.json                 # Vercel Production Build Specification
├── requirements.txt            # Python Dependencies
├── package.json                # Next.js Frontend Dependencies
└── README.md                   # Project Documentation
```

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js**: v18.0 or higher
- **Python**: 3.11 or higher
- **Git**: Installed

### 1. Clone the Repository

```bash
git clone https://github.com/sivatejagalla/Agrolith-AI.git
cd Agrolith-AI
```

### 2. Frontend Setup (Next.js 15)

```bash
# Install frontend dependencies
npm install

# Start local Next.js development server
npm run dev
```

The frontend will be available at `http://localhost:3000`.

### 3. Backend Setup (FastAPI)

```bash
# Create and activate Python virtual environment
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt

# Launch FastAPI development server
python -m uvicorn main:app --reload --port 8000
```

The FastAPI backend will be available at `http://127.0.0.1:8000` with Swagger UI at `http://127.0.0.1:8000/docs`.

---

## ⚙️ Environment Configuration

Create a `.env` file in the root directory using the template below:

```ini
# Frontend Environment
NEXT_PUBLIC_API_BASE_URL=https://web-production-75741.up.railway.app/api/v1
NEXT_PUBLIC_BACKEND_URL=https://web-production-75741.up.railway.app
NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER=919000000000

# Backend Server Settings
PROJECT_NAME="Agrolith-AI Production Backend"
SECRET_KEY="your_jwt_secret_key"
GEMINI_API_KEY="your_google_gemini_api_key"

# Meta WhatsApp Cloud API
WHATSAPP_TOKEN="your_meta_access_token"
PHONE_NUMBER_ID="your_whatsapp_phone_number_id"
WHATSAPP_BUSINESS_ACCOUNT_ID="your_whatsapp_business_account_id"
VERIFY_TOKEN="agrolith_whatsapp_verify_token_2026"
```

---

## 🧪 Testing

The repository includes a comprehensive automated test suite powering **100% test coverage**:

```bash
# Run the complete Pytest backend test suite
python -m pytest tests/ -v
```

---

## 📖 API Endpoints Reference

### 🏥 Health & Webhooks
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/health` | Server health check & status metadata |
| `GET` | `/api/v1/whatsapp/webhook` | Meta WhatsApp Cloud API webhook challenge verification |
| `POST` | `/api/v1/whatsapp/webhook` | Meta WhatsApp event receiver (async background processing) |

### 🤖 AI Advisory (`/api/v1/ai`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/ai/query` | Unified farmer advisory (Multilingual text/voice Q&A) |
| `POST` | `/api/v1/ai/tts` | Text-to-speech audio synthesis (base64 MP3 output) |
| `POST` | `/api/v1/ai/stt` | Speech-to-text base64 audio transcription |
| `GET` | `/api/v1/ai/weather` | Live Open-Meteo weather & crop advisory (`?lat=...&lon=...`) |

### 🌾 Agriculture Intelligence (`/api/v1/agri`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/agri/disease-detection` | Plant vision disease analysis (Gemini Vision) |
| `POST` | `/api/v1/agri/market-price` | Mandi market price & selling advisory |
| `POST` | `/api/v1/agri/schemes` | Government scheme matching (*PM-KISAN*, *PMFBY*) |
| `POST` | `/api/v1/agri/soil-health` | Soil pH interpretation & organic remedies |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
