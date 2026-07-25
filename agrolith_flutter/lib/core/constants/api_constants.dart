class ApiConstants {
  static const String baseUrl = "http://127.0.0.1:8000/api/v1";
  
  // Auth Endpoints
  static const String register = "$baseUrl/auth/register";
  static const String login = "$baseUrl/auth/login";
  static const String me = "$baseUrl/auth/me";

  // AI & Voice Services
  static const String aiQuery = "$baseUrl/ai/query";
  static const String stt = "$baseUrl/ai/stt";
  static const String tts = "$baseUrl/ai/tts";
  static const String weather = "$baseUrl/ai/weather";
  static const String recommendations = "$baseUrl/ai/recommendations";
  static String chatHistory(String sessionId) => "$baseUrl/ai/history/$sessionId";

  // Agriculture Intelligence
  static const String diseaseDetection = "$baseUrl/agri/disease-detection";
  static const String marketPrice = "$baseUrl/agri/market-price";
  static const String schemes = "$baseUrl/agri/schemes";
  static const String soilHealth = "$baseUrl/agri/soil-health";
}
