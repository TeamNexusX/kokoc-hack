import 'package:get/get.dart';

import '../bindings/search_binding.dart';
import '../views/search_page.dart';

class AppRoutes {
  static final routes = [
    GetPage(
      name: '/search',
      page: () => SearchPage(),
      binding: SearchBinding(),
    ),
  ];
}
