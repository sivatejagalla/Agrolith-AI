import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';

class MarketPriceScreen extends StatefulWidget {
  const MarketPriceScreen({Key? key}) : super(key: key);

  @override
  State<MarketPriceScreen> createState() => _MarketPriceScreenState();
}

class _MarketPriceScreenState extends State<MarketPriceScreen> {
  String _selectedCrop = "Wheat";

  final List<Map<String, dynamic>> _mandiData = [
    {"mandi": "Khanna Mandi, Ludhiana", "price": "₹2,275", "trend": "+4.2%", "status": "BEST PRICE", "isHigh": true},
    {"mandi": "Jalandhar Mandi", "price": "₹2,230", "trend": "+1.8%", "status": "STABLE", "isHigh": true},
    {"mandi": "Moga Central Mandi", "price": "₹2,190", "trend": "-0.5%", "status": "MODERATE", "isHigh": false},
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(16, 20, 16, 100),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "MANDI MARKET PRICE ADVISORY",
            style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppColors.textMuted, letterSpacing: 1.2),
          ),
          const SizedBox(height: 12),

          // Crop Selector Horizontal Scroll
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: ["Wheat", "Paddy", "Cotton", "Mustard", "Tomato"].map((crop) {
                final isSel = _selectedCrop == crop;
                return GestureDetector(
                  onTap: () => setState(() => _selectedCrop = crop),
                  child: Container(
                    margin: const EdgeInsets.only(right: 10),
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                    decoration: BoxDecoration(
                      color: isSel ? AppColors.emeraldPrimary : AppColors.surfaceLight,
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: isSel
                          ? [
                              BoxShadow(
                                color: AppColors.emeraldPrimary.withOpacity(0.4),
                                blurRadius: 12,
                              )
                            ]
                          : [],
                    ),
                    child: Text(
                      crop,
                      style: TextStyle(
                        color: isSel ? const Color(0xFF0A0F18) : AppColors.textSecondary,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                );
              }).toList(),
            ),
          ),

          const SizedBox(height: 20),

          // AI Sell / Hold Recommendation Banner
          GlassCard(
            borderColor: AppColors.emeraldPrimary.withOpacity(0.4),
            padding: const EdgeInsets.all(18),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppColors.emeraldPrimary.withOpacity(0.15),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: const Icon(Icons.trending_up_rounded, color: AppColors.emeraldPrimary, size: 32),
                ),
                const SizedBox(width: 14),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "AI RECOMMENDATION: SELL NOW",
                        style: TextStyle(fontWeight: FontWeight.bold, color: AppColors.emeraldPrimary, fontSize: 14),
                      ),
                      SizedBox(height: 4),
                      Text(
                        "Khanna Mandi price peaked at ₹2,275/qtl (+4.2% above MSP). Demand expected to stabilize next week.",
                        style: TextStyle(fontSize: 12, color: AppColors.textSecondary, height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 20),

          const Text(
            "NEARBY MANDI PRICING",
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.textMuted),
          ),
          const SizedBox(height: 10),

          ..._mandiData.map((item) => Container(
                margin: const EdgeInsets.only(bottom: 12),
                child: GlassCard(
                  padding: const EdgeInsets.all(16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(item["mandi"], style: const TextStyle(fontWeight: FontWeight.bold, color: AppColors.textPrimary, fontSize: 15)),
                          const SizedBox(height: 4),
                          Text("Trend: ${item['trend']}", style: TextStyle(color: item["isHigh"] ? AppColors.emeraldPrimary : AppColors.coralError, fontSize: 12)),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Text(item["price"], style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: AppColors.emeraldPrimary)),
                          Text(item["status"], style: const TextStyle(fontSize: 10, color: AppColors.textMuted)),
                        ],
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
