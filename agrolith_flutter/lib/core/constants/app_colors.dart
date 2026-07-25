import 'package:flutter/material.dart';

class AppColors {
  // Backgrounds
  static const Color background = Color(0xFF0A0F18);
  static const Color surface = Color(0xFF121A29);
  static const Color surfaceLight = Color(0xFF1B263B);
  
  // Accents & Glows
  static const Color emeraldPrimary = Color(0xFF00E6A1);
  static const Color cyanAccent = Color(0xFF00D4FF);
  static const Color electricPurple = Color(0xFF8A2BE2);
  static const Color amberWarning = Color(0xFFFFB703);
  static const Color coralError = Color(0xFFFF4D6D);
  static const Color infoBlue = Color(0xFF4CC9F0);

  // Glass & Border
  static Color glassBackground = const Color(0xFF16213E).withOpacity(0.45);
  static Color glassBorder = const Color(0xFF00E6A1).withOpacity(0.25);
  static Color glassBorderSubtle = Colors.white.withOpacity(0.12);

  // Text Colors
  static const Color textPrimary = Color(0xFFF8FAFC);
  static const Color textSecondary = Color(0xFF94A3B8);
  static const Color textMuted = Color(0xFF64748B);

  // Gradients
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [Color(0xFF00E6A1), Color(0xFF00D4FF)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient purpleGradient = LinearGradient(
    colors: [Color(0xFF8A2BE2), Color(0xFF4A00E0)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient glassGradient = LinearGradient(
    colors: [
      Color(0x33263750),
      Color(0x1F121A29),
    ],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}
