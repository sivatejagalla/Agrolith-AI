import 'package:flutter/material.dart';
import 'core/constants/app_colors.dart';
import 'core/constants/app_theme.dart';
import 'core/widgets/custom_bottom_nav.dart';
import 'features/splash/presentation/splash_screen.dart';
import 'features/onboarding/presentation/onboarding_screen.dart';
import 'features/auth/presentation/login_screen.dart';
import 'features/dashboard/presentation/home_dashboard_screen.dart';
import 'features/chat_ai/presentation/chat_ai_screen.dart';
import 'features/crop_scanner/presentation/crop_scanner_screen.dart';
import 'features/market_price/presentation/market_price_screen.dart';
import 'features/schemes/presentation/schemes_screen.dart';
import 'features/soil_health/presentation/soil_health_screen.dart';
import 'features/profile/presentation/profile_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const AgrolithApp());
}

class AgrolithApp extends StatelessWidget {
  const AgrolithApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Agrolith-AI',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: const AppFlowManager(),
    );
  }
}

class AppFlowManager extends StatefulWidget {
  const AppFlowManager({Key? key}) : super(key: key);

  @override
  State<AppFlowManager> createState() => _AppFlowManagerState();
}

enum AppStep { splash, onboarding, login, mainOS }

class _AppFlowManagerState extends State<AppFlowManager> {
  AppStep _currentStep = AppStep.splash;
  int _currentNavIndex = 0;

  @override
  Widget build(BuildContext context) {
    switch (_currentStep) {
      case AppStep.splash:
        return SplashScreen(onFinish: () => setState(() => _currentStep = AppStep.onboarding));
      case AppStep.onboarding:
        return OnboardingScreen(onFinish: () => setState(() => _currentStep = AppStep.login));
      case AppStep.login:
        return LoginScreen(onLoginSuccess: () => setState(() => _currentStep = AppStep.mainOS));
      case AppStep.mainOS:
        return Scaffold(
          backgroundColor: AppColors.background,
          body: SafeArea(
            child: Stack(
              children: [
                // Active Screen View
                IndexedStack(
                  index: _currentNavIndex,
                  children: [
                    HomeDashboardScreen(onNavigate: (idx) => setState(() => _currentNavIndex = idx)),
                    const ChatAiScreen(),
                    const CropScannerScreen(),
                    const MarketPriceScreen(),
                    const SchemesScreen(),
                  ],
                ),

                // Floating Glass Navigation Bar
                Align(
                  alignment: Alignment.bottomCenter,
                  child: CustomBottomNav(
                    currentIndex: _currentNavIndex,
                    onTap: (idx) => setState(() => _currentNavIndex = idx),
                  ),
                ),
              ],
            ),
          ),
        );
    }
  }
}
