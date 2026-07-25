import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';

class SoilHealthScreen extends StatelessWidget {
  const SoilHealthScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "SOIL HEALTH ADVISORY & NPK METRICS",
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppColors.textMuted, letterSpacing: 1.2),
          ),
          const SizedBox(height: 12),

          // Soil Health Meter Glass Card
          GlassCard(
            borderColor: AppColors.emeraldPrimary.withOpacity(0.4),
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("Overall Soil Quality Score", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppColors.textPrimary)),
                    Text("94 / 100", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20, color: AppColors.emeraldPrimary)),
                  ],
                ),
                const SizedBox(height: 16),
                ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: LinearProgressIndicator(
                    value: 0.94,
                    minHeight: 10,
                    backgroundColor: AppColors.surfaceLight,
                    valueColor: const AlwaysStoppedAnimation<Color>(AppColors.emeraldPrimary),
                  ),
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildMetric("Nitrogen (N)", "180 kg/ha", "Optimal"),
                    _buildMetric("Phosphorus (P)", "35 kg/ha", "Slight Deficit"),
                    _buildMetric("Potassium (K)", "210 kg/ha", "High"),
                  ],
                ),
              ],
            ),
          ),

          const SizedBox(height: 20),

          // Bio Product Amendment Recommendations
          const Text("RECOMMENDED ORGANIC AMENDMENTS", style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.textMuted)),
          const SizedBox(height: 10),

          GlassCard(
            padding: const EdgeInsets.all(16),
            child: const Row(
              children: [
                Icon(Icons.spa_rounded, color: AppColors.emeraldPrimary, size: 32),
                SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("PSB Bio-Fertilizer (Phosphorus Solubilizing Bacteria)", style: TextStyle(fontWeight: FontWeight.bold, color: AppColors.textPrimary)),
                      SizedBox(height: 4),
                      Text("Recommended rate: 5kg per acre mixed with compost.", style: TextStyle(fontSize: 12, color: AppColors.textSecondary)),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMetric(String title, String value, String status) {
    return Column(
      children: [
        Text(title, style: const TextStyle(fontSize: 12, color: AppColors.textMuted)),
        const SizedBox(height: 4),
        Text(value, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: AppColors.textPrimary)),
        const SizedBox(height: 2),
        Text(status, style: const TextStyle(fontSize: 11, color: AppColors.emeraldPrimary, fontWeight: FontWeight.w600)),
      ],
    );
  }
}
