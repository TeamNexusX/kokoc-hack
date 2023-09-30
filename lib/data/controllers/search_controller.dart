import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;

import '../utils/server_responce_model.dart';

class SearchPageController extends GetxController {
  final serverController = TextEditingController();
  final searchController = TextEditingController();
  final theme = ''.obs;
  final description = ''.obs;
  final category = ''.obs;
  final isSearch = false.obs;
  final showResult = false.obs;
  final isLightTheme = false.obs;

  Future<void> search() async {
    try {
      isSearch.value = true;
      showResult.value = true;

      final response = await http.get(Uri.parse('http://192.168.56.1:5001'));

      if (response.statusCode == 200) {
        // хакатон идет , какой спать
        print(response.body);
        SearchResult result = SearchResult.fromJson(response.body);
        theme.value = result.theme;
        description.value = result.description;
        category.value = result.category;
      } else {
        // If the server returns an unsuccessful response code, throw an exception.
        throw Exception('Failed to load data');
      }
    } catch (e) {
      print('Caught error: ');
      // Handle the error here. You might want to show a notification or alert dialog with the error.
    } finally {
      isSearch.value = false;
    }
  }
}
