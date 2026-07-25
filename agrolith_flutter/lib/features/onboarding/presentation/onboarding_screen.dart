import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';
import '../../../../core/widgets/glowing_button.dart';

class OnboardingScreen extends StatefulWidget {
  final VoidCallback onFinish;
  const OnboardingScreen({Key? key, required this.onFinish}) : super(key: key);

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;

  final List<Map<String, String>> _pages = [
    {
      "icon": "center_focus_strong",
      "title": "AI Crop Disease Vision",
      "desc": "Instantly scan leaf symptoms with Gemini Vision AI to detect diseases & get 100% organic bio-remedies."
    },
    {
      "icon": "mic",
      "title": "Multilingual Voice AI",
      "desc": "Speak naturally in Hindi, English, Punjabi, or local regional dialects. Instant speech-to-text advisory."
    },
    {
      "icon": "show_chart",
      "title": "Mandi Prices & Govt Schemes",
      "desc": "Track real-time market prices across mandis and discover eligible government subsidies instantly."
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.background,
      body: SafeArea(
        child: Column(
          children: [
            Align(
              alignment: Alignment.topRight,
              child: TextButton(
                onPressed: widget.onFinish,
                child: const Text(
                  "SKIP",
                  style: TextStyle(color: AppColors.textMuted, letterSpacing: 1.2),
                ),
              ),
            ),
            Expanded(
              child: PageView.builder(
                controller: _pageController,
                onPageChanged: (idx) => setState(() => _currentPage = idx),
                itemCount: _pages.length,
                itemBuilder: (context, index) {
                  final page = _pages[index];
                  return Padding(
                    padding: const EdgeInsets.all(24.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        GlassCard(
                          padding: const EdgeInsets.all(36),
                          borderColor: AppColors.emeraldPrimary.withOpacity(0.3),
                          child: Icon(
                            _getIconData(page["icon"]!),
                            size: 80,
                            color: AppColors.emeraldPrimary,
                          ),
                        ),
                        const SizedBox(height: 36),
                        Text(
                          page["title"]!,
                          style: const TextStyle(
                            fontSize: 26,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textPrimary,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 16),
                        Text(
                          page["desc"]!,
                          style: const TextStyle(
                            fontSize: 15,
                            color: AppColors.textSecondary,
                            height: 1.5,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(
                _pages.length,
                (idx) => AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  margin: const EdgeInsets.symmetric(horizontal: 4),
                  width: _currentPage == idx ? 24 : 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color: _currentPage == idx ? AppColors.emeraldPrimary : AppColors.surfaceLight,
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(24.0),
              child: GlowingButton(
                text: _currentPage == _pages.length - 1 ? "GET STARTED" : "CONTINUE",
                onPressed: () {
                  if (_currentPage < _pages.length - 1) {
                    _pageController.nextPage(
                      duration: const Duration(milliseconds: 300),
                      curve: Curves.ease,
                    );
                  } else {
                    widget.onFinish();
                  }
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  IconData _getIconData(String name) {
    switch (name) {
      case "center_focus_strong":
        return Icons.center_focus_strong;
      case "mic":
        return Icons.mic_rounded;
      default:
        return Icons.show_chart_rounded;
    }
  }
}
