import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';
import '../../../../core/widgets/glowing_button.dart';

class SchemesScreen extends StatelessWidget {
  const SchemesScreen({Key? key}) : super(key: key);

  final List<Map<String, String>> _schemes = const [
    {
      "name": "PM-KISAN Samman Nidhi",
      "benefit": "₹6,000 / year direct cash subsidy",
      "eligibility": "Small & Marginal Farmers (< 2 Hectares)",
      "status": "ELIGIBLE",
    },
    {
      "name": "PM Fasal Bima Yojana (PMFBY)",
      "benefit": "Comprehensive crop insurance against natural calamities",
      "eligibility": "All farmers growing notified crops",
      "status": "ELIGIBLE",
    },
    {
      "name": "Sub-Mission on Agricultural Mechanization (SMAM)",
      "benefit": "50% - 80% subsidy on tractor & farm machinery",
      "eligibility": "Registered Farmer Cooperatives",
      "status": "APPLY NOW",
    },
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "GOVERNMENT SCHEMES & SUBSIDIES",
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppColors.textMuted, letterSpacing: 1.2),
          ),
          const SizedBox(height: 12),

          // Search glass input
          GlassCard(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            child: const TextField(
              style: TextStyle(color: AppColors.textPrimary),
              decoration: InputDecoration(
                hintText: "Search subsidies (e.g. tractor, insurance, seeds)...",
                hintStyle: TextStyle(color: AppColors.textMuted),
                prefixIcon: Icon(Icons.search_rounded, color: AppColors.emeraldPrimary),
                border: InputBorder.none,
              ),
            ),
          ),

          const SizedBox(height: 20),

          ..._schemes.map((scheme) => Container(
                margin: const EdgeInsets.only(bottom: 16),
                child: GlassCard(
                  borderColor: AppColors.electricPurple.withOpacity(0.3),
                  padding: const EdgeInsets.all(18),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            child: Text(
                              scheme["name"]!,
                              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppColors.textPrimary),
                            ),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: AppColors.emeraldPrimary.withOpacity(0.2),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              scheme["status"]!,
                              style: const TextStyle(color: AppColors.emeraldPrimary, fontSize: 11, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      Text("Benefit: ${scheme['benefit']}", style: const TextStyle(color: AppColors.cyanAccent, fontSize: 13, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 4),
                      Text("Eligibility: ${scheme['eligibility']}", style: const TextStyle(color: AppColors.textSecondary, fontSize: 12)),
                      const SizedBox(height: 14),
                      GlowingButton(
                        height: 44,
                        text: "AI ASSISTED APPLICATION",
                        gradient: AppColors.purpleGradient,
                        onPressed: () {},
                      ),
                    ],
                  ),
                ),
              )),
        ],
      ),
    );
  }
}
