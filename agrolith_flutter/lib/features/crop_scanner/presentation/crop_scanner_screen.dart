import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';
import '../../../../core/widgets/glowing_button.dart';

class CropScannerScreen extends StatefulWidget {
  const CropScannerScreen({Key? key}) : super(key: key);

  @override
  State<CropScannerScreen> createState() => _CropScannerScreenState();
}

class _CropScannerScreenState extends State<CropScannerScreen> with SingleTickerProviderStateMixin {
  late AnimationController _scanController;
  bool _isScanning = false;
  bool _hasResult = false;

  @override
  void initState() {
    super.initState();
    _scanController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _scanController.dispose();
    super.dispose();
  }

  void _triggerScan() {
    setState(() {
      _isScanning = true;
      _hasResult = false;
    });

    Future.delayed(const Duration(milliseconds: 2200), () {
      if (mounted) {
        setState(() {
          _isScanning = false;
          _hasResult = true;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text(
            "AI CROP VISION SCANNER",
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppColors.textMuted, letterSpacing: 1.2),
          ),
          const SizedBox(height: 12),

          // Camera Viewport Simulation
          Container(
            height: 320,
            decoration: BoxDecoration(
              color: AppColors.surface,
              borderRadius: BorderRadius.circular(24),
              border: Border.all(
                color: _isScanning ? AppColors.emeraldPrimary : AppColors.glassBorderSubtle,
                width: 2,
              ),
              boxShadow: [
                BoxShadow(
                  color: (_isScanning ? AppColors.emeraldPrimary : Colors.transparent).withOpacity(0.3),
                  blurRadius: 25,
                ),
              ],
            ),
            child: Stack(
              children: [
                Center(
                  child: Icon(
                    Icons.eco_rounded,
                    size: 140,
                    color: AppColors.emeraldPrimary.withOpacity(0.2),
                  ),
                ),
                if (_isScanning)
                  AnimatedBuilder(
                    animation: _scanController,
                    builder: (context, child) {
                      return Positioned(
                        top: _scanController.value * 280 + 10,
                        left: 20,
                        right: 20,
                        child: Container(
                          height: 3,
                          decoration: BoxDecoration(
                            gradient: AppColors.primaryGradient,
                            boxShadow: [
                              BoxShadow(
                                color: AppColors.emeraldPrimary,
                                blurRadius: 12,
                                spreadRadius: 2,
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                Positioned(
                  bottom: 16,
                  left: 16,
                  right: 16,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton.icon(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.emeraldPrimary,
                          foregroundColor: const Color(0xFF0A0F18),
                        ),
                        onPressed: _triggerScan,
                        icon: const Icon(Icons.camera_alt_rounded),
                        label: Text(_isScanning ? "SCANNING LEAF..." : "RUN AI SCAN"),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 24),

          // AI Diagnosis Result Card
          if (_hasResult) ...[
            GlassCard(
              borderColor: AppColors.coralError.withOpacity(0.5),
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Row(
                        children: [
                          Icon(Icons.bug_report_rounded, color: AppColors.coralError),
                          SizedBox(width: 8),
                          Text(
                            "Yellow Rust (Puccinia striiformis)",
                            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppColors.textPrimary),
                          ),
                        ],
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppColors.coralError.withOpacity(0.2),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Text("98.4% Confidence", style: TextStyle(color: AppColors.coralError, fontSize: 11, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  const Text("ORGANIC TREATMENT PROTOCOL", style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.textMuted)),
                  const SizedBox(height: 6),
                  const Text(
                    "1. Spray Neem Oil Extract (5ml/L water) early morning.\n2. Apply Trichoderma viride bio-fungicide.\n3. Avoid excess leaf moisture during high humidity.",
                    style: TextStyle(color: AppColors.textSecondary, height: 1.4, fontSize: 13),
                  ),
                  const SizedBox(height: 16),
                  GlowingButton(
                    text: "ORDER BIO-RECOMMENDED PRODUCTS",
                    onPressed: () {},
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}
