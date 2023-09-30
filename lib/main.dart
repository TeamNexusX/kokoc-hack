import 'package:client_mobile/routes/app_routes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'views/search_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      themeMode: ThemeMode.dark,
      darkTheme: ThemeData(brightness: Brightness.dark, useMaterial3: true),
      theme: ThemeData(
        brightness: Brightness.light,
        useMaterial3: true,
      ),
      initialRoute: "/search",
      getPages: AppRoutes.routes,
    );
  }
}
