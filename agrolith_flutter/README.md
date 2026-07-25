# 🌿 Agrolith-AI Frontend (Flutter MVP)

**Tagline**: AI-Powered Smart Farming Assistant — *"An AI Operating System for Farmers"*  
**Design Theme**: Dark-First Glassmorphism, Glow Accents, Minimalist AI OS Aesthetic

---

## 🚀 Key Highlights & Design System

- **Clean Architecture (MVVM)**: Decoupled into `core/` (network, constants, widgets, themes) and `features/` (splash, onboarding, auth, dashboard, chat_ai, crop_scanner, market_price, schemes, soil_health, profile).
- **Dark Glassmorphic UI**: Premium `#0A0F18` deep background, `#00E6A1` emerald glowing accents, `#00D4FF` cyan glow, and `#8A2BE2` electric purple gradient highlights.
- **FastAPI End-to-End Integration**:
  - `POST /api/v1/auth/login` - User Authentication
  - `POST /api/v1/ai/query` - Multilingual Voice/Text AI Advisory
  - `POST /api/v1/agri/disease-detection` - Gemini Vision Crop Scan
  - `POST /api/v1/agri/market-price` - Live Mandi Prices & Trend Analysis
  - `POST /api/v1/agri/schemes` - Government Subsidies Matcher
  - `POST /api/v1/agri/soil-health` - Soil Health & NPK Diagnostics

---

## 📁 Directory Architecture

```
lib/
├── main.dart                      # App entry point & stateful step manager
├── core/
│   ├── constants/
│   │   ├── api_constants.dart      # REST API endpoints
│   │   ├── app_colors.dart         # Glassmorphism dark color system
│   │   └── app_theme.dart          # Outfit & Inter typography theme
│   ├── network/
│   │   └── api_client.dart         # Dio network client with timeout/interceptors
│   └── widgets/
│       ├── glass_card.dart         # BackdropFilter glass backdrop container
│       ├── glowing_button.dart     # Gradient button with glowing shadow
│       └── custom_bottom_nav.dart  # Floating glass bottom bar
└── features/
    ├── splash/                    # Animated splash logo with glowing ring
    ├── onboarding/                # 3-slide feature introduction
    ├── auth/                      # Glass login card + Quick Demo login
    ├── dashboard/                 # Hero Farmer AI OS dashboard & live metrics
    ├── chat_ai/                   # Multilingual AI Voice Assistant chat
    ├── crop_scanner/              # Leaf disease laser scanning vision UI
    ├── market_price/              # Mandi live price advisory & trends
    ├── schemes/                   # PM-KISAN & govt subsidy search
    ├── soil_health/               # NPK gauge & bio-fertilizer advice
    └── profile/                   # Farmer land profile & offline sync status
```

---

## ⚙️ Setup & Execution Instructions

1. Ensure **Flutter 3.x+** is installed on your development machine.
2. Navigate to the project folder:
   ```bash
   cd agrolith_flutter
   ```
3. Fetch dependencies:
   ```bash
   flutter pub get
   ```
4. Run the application:
   ```bash
   flutter run -d chrome --web-renderer canvaskit
   ```
   *or targeting Android / iOS:*
   ```bash
   flutter run
   ```

---

## ⚡ Live Web Preview Integration

The project also comes with a live interactive web preview served directly by the FastAPI backend server at `http://127.0.0.1:8000/demo`.
