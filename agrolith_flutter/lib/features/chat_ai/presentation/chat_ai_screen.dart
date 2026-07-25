import 'package:flutter/material.dart';
import '../../../../core/constants/app_colors.dart';
import '../../../../core/widgets/glass_card.dart';

class ChatAiScreen extends StatefulWidget {
  const ChatAiScreen({Key? key}) : super(key: key);

  @override
  State<ChatAiScreen> createState() => _ChatAiScreenState();
}

class _ChatAiScreenState extends State<ChatAiScreen> {
  final TextEditingController _textController = TextEditingController();
  final List<Map<String, String>> _messages = [
    {
      "sender": "ai",
      "text": "Namaste Sardar Gurpreet! I am your Agrolith AI Assistant. How can I help your farm today in Ludhiana?"
    },
  ];
  bool _isListening = false;
  String _selectedLanguage = "en";

  void _sendMessage(String text) {
    if (text.trim().isEmpty) return;
    setState(() {
      _messages.add({"sender": "user", "text": text});
      _textController.clear();
      _messages.add({
        "sender": "ai",
        "text": "Analyzing weather and crop data for '$text'...\nRecommendation: Apply Trichoderma viride (2kg/acre) mixed with farmyard manure for soil root protection."
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // App Bar Header with Language Selector
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            color: AppColors.surface.withOpacity(0.9),
            border: Border(bottom: BorderSide(color: AppColors.glassBorderSubtle)),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Row(
                children: [
                  Icon(Icons.psychology_rounded, color: AppColors.emeraldPrimary),
                  SizedBox(width: 8),
                  Text(
                    "Agrolith AI Advisor",
                    style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: AppColors.textPrimary),
                  ),
                ],
              ),
              DropdownButton<String>(
                value: _selectedLanguage,
                dropdownColor: AppColors.surfaceLight,
                style: const TextStyle(color: AppColors.emeraldPrimary, fontWeight: FontWeight.bold),
                underline: const SizedBox(),
                items: const [
                  DropdownMenuItem(value: "en", child: Text("English")),
                  DropdownMenuItem(value: "hi", child: Text("हिंदी")),
                  DropdownMenuItem(value: "pa", child: Text("ਪੰਜਾਬੀ")),
                ],
                onChanged: (val) => setState(() => _selectedLanguage = val!),
              ),
            ],
          ),
        ),

        // Chat Message List
        Expanded(
          child: ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: _messages.length,
            itemBuilder: (context, index) {
              final msg = _messages[index];
              final isAi = msg["sender"] == "ai";
              return Align(
                alignment: isAi ? Alignment.centerLeft : Alignment.centerRight,
                child: Container(
                  margin: const EdgeInsets.only(bottom: 12),
                  constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.8),
                  child: GlassCard(
                    borderColor: isAi ? AppColors.emeraldPrimary.withOpacity(0.3) : AppColors.cyanAccent.withOpacity(0.3),
                    backgroundColor: isAi ? AppColors.surfaceLight.withOpacity(0.6) : AppColors.emeraldPrimary.withOpacity(0.15),
                    padding: const EdgeInsets.all(14),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              isAi ? Icons.eco_rounded : Icons.person_rounded,
                              size: 16,
                              color: isAi ? AppColors.emeraldPrimary : AppColors.cyanAccent,
                            ),
                            const SizedBox(width: 6),
                            Text(
                              isAi ? "AGROLITH AI" : "YOU",
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                                color: isAi ? AppColors.emeraldPrimary : AppColors.cyanAccent,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 6),
                        Text(
                          msg["text"]!,
                          style: const TextStyle(color: AppColors.textPrimary, fontSize: 14, height: 1.4),
                        ),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),

        // Quick Suggestion Chips
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
          child: Row(
            children: [
              _buildChip("Best fertilizer for wheat?"),
              _buildChip("Check rain forecast"),
              _buildChip("Cotton Mandi prices"),
            ],
          ),
        ),

        // Voice Input & Text Box Controls
        Container(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 90),
          decoration: BoxDecoration(
            color: AppColors.surface,
            border: Border(top: BorderSide(color: AppColors.glassBorderSubtle)),
          ),
          child: Row(
            children: [
              GestureDetector(
                onTap: () {
                  setState(() => _isListening = !_isListening);
                  if (_isListening) {
                    Future.delayed(const Duration(seconds: 2), () {
                      if (mounted) {
                        _sendMessage("What bio-fertilizer is recommended for my wheat crop?");
                        setState(() => _isListening = false);
                      }
                    });
                  }
                },
                child: Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _isListening ? AppColors.coralError : AppColors.emeraldPrimary.withOpacity(0.2),
                    border: Border.all(color: _isListening ? AppColors.coralError : AppColors.emeraldPrimary),
                  ),
                  child: Icon(
                    _isListening ? Icons.mic_rounded : Icons.mic_none_rounded,
                    color: _isListening ? Colors.white : AppColors.emeraldPrimary,
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: TextField(
                  controller: _textController,
                  style: const TextStyle(color: AppColors.textPrimary),
                  decoration: const InputDecoration(
                    hintText: "Ask AI farming question...",
                    hintStyle: TextStyle(color: AppColors.textMuted),
                    border: InputBorder.none,
                  ),
                  onSubmitted: _sendMessage,
                ),
              ),
              IconButton(
                icon: const Icon(Icons.send_rounded, color: AppColors.emeraldPrimary),
                onPressed: () => _sendMessage(_textController.text),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildChip(String label) {
    return GestureDetector(
      onTap: () => _sendMessage(label),
      child: Container(
        margin: const EdgeInsets.only(right: 8),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: AppColors.surfaceLight,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: AppColors.glassBorderSubtle),
        ),
        child: Text(label, style: const TextStyle(fontSize: 12, color: AppColors.textSecondary)),
      ),
    );
  }
}
