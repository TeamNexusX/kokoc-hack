import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SearchPageController extends GetxController {
  final searchController = TextEditingController();
  final isSearch = false.obs;
  final showResult = false.obs;

  search() {
    isSearch.value = true;
    showResult.value = true;
  }
}
