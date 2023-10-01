import 'dart:convert';

// ignore_for_file: public_member_api_docs, sort_constructors_first
class SearchResult {
  final String category;
  final String theme;
  final String description;
  final String link;
  final String subinfo;
  SearchResult({
    required this.category,
    required this.theme,
    required this.description,
    required this.link,
    required this.subinfo,
  });

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'category': category,
      'theme': theme,
      'description': description,
      'link': link,
      'subinfo': subinfo,
    };
  }

  factory SearchResult.fromMap(Map<String, dynamic> map) {
    return SearchResult(
      category: map['category'] as String,
      theme: map['theme'] as String,
      description: map['description'] as String,
      link: map['link'] as String,
      subinfo: map['subinfo'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory SearchResult.fromJson(String source) =>
      SearchResult.fromMap(json.decode(source) as Map<String, dynamic>);
}
