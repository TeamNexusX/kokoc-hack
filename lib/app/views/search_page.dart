import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../data/controllers/search_controller.dart';
import 'widgets/result_Item.dart';

class SearchPage extends GetView<SearchPageController> {
  const SearchPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20.0),
        child: SingleChildScrollView(
          child: Column(children: [
            Row(
              children: [
                Expanded(
                  child: Container(),
                ),
                _buildThemeSwitcher(),
              ],
            ),
            SizedBox(height: 20.0),
            _buildLogo(),
            SizedBox(height: 20.0),
            _buildServerInputField(context),
            SizedBox(height: 20.0),
            _buildSearchField(context),
            SizedBox(height: 20.0),
            Obx(() => _buildResultList()),
            SizedBox(height: 20.0),
            Image(image: AssetImage('assets/images/preview_image.png')),
          ]),
        ),
      ),
    ));
  }

  TextField _buildServerInputField(BuildContext context) => TextField(
        controller: controller.serverController,
        onSubmitted: (value) {
          // скрыть клавиатуру при нажатии на кнопку поиска на клавиатуре
          FocusScope.of(context).unfocus();
        },
        decoration: InputDecoration(
          labelText: "IP Сервера",
          hintText: 'http://10.0.2.2:5000',
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(20.0),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide:
                BorderSide(color: Get.theme.colorScheme.primary, width: 2.0),
            borderRadius: BorderRadius.circular(20.0),
          ),
        ),
      );

  Text _buildLogo() => Text.rich(
        TextSpan(
          children: [
            TextSpan(
              text: 'NEXUS',
              style: TextStyle(
                fontSize: 36,
                fontWeight: FontWeight.w400,
                height: 0,
              ),
            ),
            TextSpan(
              text: 'X',
              style: TextStyle(
                color: Get.theme.colorScheme.primary,
                fontSize: 36,
                fontWeight: FontWeight.w400,
                height: 0,
              ),
            ),
            TextSpan(
              text: ' TEAM',
              style: TextStyle(
                fontSize: 36,
                fontWeight: FontWeight.w400,
                height: 0,
              ),
            ),
          ],
        ),
      );

  Obx _buildThemeSwitcher() {
    return Obx(
      () => Row(
        children: [
          Text("Темная тема"),
          Switch(
            value: controller.isLightTheme.value,
            onChanged: (val) {
              controller.isLightTheme.value = val;
              Get.changeThemeMode(
                controller.isLightTheme.value
                    ? ThemeMode.dark
                    : ThemeMode.light,
              );
            },
          ),
        ],
      ),
    );
  }

  TextField _buildSearchField(BuildContext context) {
    return TextField(
      controller: controller.searchController,
      onSubmitted: (value) {
        // скрыть клавиатуру при нажатии на кнопку поиска на клавиатуре
        FocusScope.of(context).unfocus();
        controller.search();
      },
      decoration: InputDecoration(
        labelText: "Поиск",
        hintText: 'Вставьте ссылку',
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(20.0),
        ),
        focusedBorder: OutlineInputBorder(
          borderSide:
              BorderSide(color: Get.theme.colorScheme.primary, width: 2.0),
          borderRadius: BorderRadius.circular(20.0),
        ),
        suffixIcon: IconButton(
          icon: Icon(Icons.search),
          onPressed: () {
            // скрыть клавиатуру при нажатии на кнопку поиска
            Get.back();
            controller.search();
          },
        ),
      ),
    );
  }

  Widget _buildResultList() {
    if (controller.showResult.value) {
      return controller.isSearch.value
          ? CircularProgressIndicator()
          : Column(children: [
              ResultItem(title: "Cсылка", description: controller.link.value),
              SizedBox(
                height: 20,
              ),
              ResultItem(
                title: 'Тема',
                description: controller.theme.value,
              ),
              SizedBox(
                height: 20,
              ),
              ResultItem(
                title: 'Краткое содержание',
                description: controller.description.value,
              ),
              SizedBox(
                height: 20,
              ),
              ResultItem(
                title: 'Информация о домене',
                description: controller.category.value,
              ),
              SizedBox(
                height: 20,
              ),
              ResultItem(
                title: 'Дополнительная информация',
                description: controller.subinfo.value,
              )
            ]);
    } else {
      return Container();
    }
  }
}
