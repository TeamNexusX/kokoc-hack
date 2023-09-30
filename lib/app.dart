import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'app/routes/app_routes.dart';
import 'core/theme/app_theme.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      themeMode: ThemeMode.light,
      darkTheme: ThemeData(
          brightness: Brightness.dark,
          useMaterial3: true,
          colorScheme: darkColorScheme),
      theme: ThemeData(
        brightness: Brightness.light,
        useMaterial3: true,
        colorScheme: lightColorScheme,
      ),
      initialRoute: "/search",
      getPages: AppRoutes.routes,
    );
  }
}
