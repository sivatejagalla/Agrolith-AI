import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.all(4),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: AppColors.emeraldPrimary, width: 2),
              boxShadow: [
                BoxShadow(
                  color: AppColors.emeraldPrimary.withOpacity(0.3),
                  blurRadius: 20,
                )
              ],
            ),
            child: const CircleAvatar(
              radius: 44,
              backgroundColor: AppColors.surfaceLight,
              child: Icon(Icons.person_rounded, size: 50, color: AppColors.emeraldPrimary),
            ),
          ),
          const SizedBox(height: 14),
          const Text("Sardar Gurpreet Singh", style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.textPrimary)),
          const SizedBox(height: 4),
          const Text("Ludhiana, Punjab • Member since 2025", style: TextStyle(fontSize: 13, color: AppColors.textMuted)),
          const SizedBox(height: 24),

          GlassCard(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                _buildProfileItem(Icons.landscape_rounded, "Land Holding", "12.5 Acres (Clay Loam Soil)"),
                const Divider(color: Colors.white10),
                _buildProfileItem(Icons.water_drop_rounded, "Irrigation Method", "Drip & Tube Well Hybrid"),
                const Divider(color: Colors.white10),
                _buildProfileItem(Icons.translate_rounded, "Preferred Voice AI Language", "Punjabi / English"),
                const Divider(color: Colors.white10),
                _buildProfileItem(Icons.cloud_done_rounded, "Offline AI Cache", "Enabled (14 MB synced)"),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildProfileItem(IconData icon, String title, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Icon(icon, color: AppColors.emeraldPrimary, size: 22),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 12, color: AppColors.textMuted)),
                const SizedBox(height: 2),
                Text(value, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppColors.textPrimary)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
