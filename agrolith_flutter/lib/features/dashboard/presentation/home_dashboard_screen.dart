import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';

class HomeDashboardScreen extends StatelessWidget {
  final Function(int) onNavigate;

  const HomeDashboardScreen({Key? key, required this.onNavigate}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header Profile Bar
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(3),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: AppColors.emeraldPrimary, width: 2),
                    ),
                    child: const CircleAvatar(
                      radius: 22,
                      backgroundColor: AppColors.surfaceLight,
                      child: Icon(Icons.person_outline, color: AppColors.emeraldPrimary),
                    ),
                  ),
                  const SizedBox(width: 12),
                  const Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Sardar Gurpreet",
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.textPrimary),
                      ),
                      Row(
                        children: [
                          Icon(Icons.location_on_outlined, size: 14, color: AppColors.emeraldPrimary),
                          SizedBox(width: 4),
                          Text("Ludhiana, Punjab • 12.5 Acres", style: TextStyle(fontSize: 12, color: AppColors.textSecondary)),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: AppColors.emeraldPrimary.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: AppColors.emeraldPrimary.withOpacity(0.4)),
                ),
                child: const Row(
                  children: [
                    Icon(Icons.check_circle_rounded, size: 14, color: AppColors.emeraldPrimary),
                    SizedBox(width: 4),
                    Text("AI ONLINE", style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: AppColors.emeraldPrimary)),
                  ],
                ),
              ),
            ],
          ),

          const SizedBox(height: 24),

          // Weather & Advisory Glass Banner
          GlassCard(
            borderColor: AppColors.cyanAccent.withOpacity(0.3),
            padding: const EdgeInsets.all(20),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: AppColors.cyanAccent.withOpacity(0.15),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Icon(Icons.thunderstorm_rounded, size: 36, color: AppColors.cyanAccent),
                ),
                const SizedBox(width: 16),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text("28°C • Moderate Rain", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: AppColors.textPrimary)),
                          Text("84% Humidity", style: TextStyle(fontSize: 12, color: AppColors.textMuted)),
                        ],
                      ),
                      SizedBox(height: 6),
                      Text(
                        "AI Advisory: Delay nitrogen top-dressing by 24h due to rain forecast.",
                        style: TextStyle(fontSize: 13, color: AppColors.textSecondary, height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 24),

          // Core Feature Quick Grid
          const Text(
            "AI OPERATING MODULES",
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppColors.textMuted, letterSpacing: 1.2),
          ),
          const SizedBox(height: 12),

          GridView.count(
            crossAxisCount: 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            mainAxisSpacing: 14,
            crossAxisSpacing: 14,
            childAspectRatio: 1.2,
            children: [
              _buildFeatureTile(
                icon: Icons.mic_rounded,
                title: "AI Voice Advisory",
                subtitle: "Multilingual Voice",
                color: AppColors.emeraldPrimary,
                onTap: () => onNavigate(1),
              ),
              _buildFeatureTile(
                icon: Icons.qr_code_scanner_rounded,
                title: "Crop Scan Vision",
                subtitle: "Gemini AI Diagnosis",
                color: AppColors.cyanAccent,
                onTap: () => onNavigate(2),
              ),
              _buildFeatureTile(
                icon: Icons.show_chart_rounded,
                title: "Mandi Price Live",
                subtitle: "Wheat ₹2,275/qtl",
                color: AppColors.amberWarning,
                onTap: () => onNavigate(3),
              ),
              _buildFeatureTile(
                icon: Icons.policy_rounded,
                title: "Govt Schemes",
                subtitle: "PM-KISAN Subsidies",
                color: AppColors.electricPurple,
                onTap: () => onNavigate(4),
              ),
            ],
          ),

          const SizedBox(height: 24),

          // Real-time Alerts Banner
          GlassCard(
            borderColor: AppColors.amberWarning.withOpacity(0.4),
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                const Icon(Icons.warning_amber_rounded, color: AppColors.amberWarning, size: 28),
                const SizedBox(width: 14),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Pest Alert: Yellow Rust Risk", style: TextStyle(fontWeight: FontWeight.bold, color: AppColors.textPrimary, fontSize: 14)),
                      SizedBox(height: 2),
                      Text("High humidity detected in Ludhiana district. Apply bio-fungicide.", style: TextStyle(color: AppColors.textSecondary, fontSize: 12)),
                    ],
                  ),
                ),
                Icon(Icons.chevron_right_rounded, color: AppColors.glassBorder),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFeatureTile({
    required IconData icon,
    required String title,
    required String subtitle,
    required Color color,
    required VoidCallback onTap,
  }) {
    return GlassCard(
      onTap: onTap,
      borderColor: color.withOpacity(0.3),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: color.withOpacity(0.15),
              borderRadius: BorderRadius.circular(14),
            ),
            child: Icon(icon, color: color, size: 26),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 15, color: AppColors.textPrimary),
              ),
              const SizedBox(height: 2),
              Text(
                subtitle,
                style: const TextStyle(fontSize: 12, color: AppColors.textMuted),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
