import 'dart:convert';

// ignore_for_file: public_member_api_docs, sort_constructors_first
class SearchResult {
  final String category;
  final String theme;
  final String description;
  SearchResult({
    required this.category,
    required this.theme,
    required this.description,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'category': category,
      'theme': theme,
      'description': description,
    };
  }

  factory SearchResult.fromMap(Map<String, dynamic> map) {
    return SearchResult(
      category: map['category'] as String,
      theme: map['theme'] as String,
      description: map['description'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory SearchResult.fromJson(String source) =>
      SearchResult.fromMap(json.decode(source) as Map<String, dynamic>);
}
