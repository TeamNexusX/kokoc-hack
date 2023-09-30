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
            SizedBox(height: 40.0),
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
    return controller.showResult.value
        ? Column(children: [
            ResultItem(
              title: 'Тема',
              description: 'Интернет-магазин',
            ),
            SizedBox(
              height: 20,
            ),
            ResultItem(
              title: 'Краткое содержание',
              description:
                  "Разнообразный и богатый опыт социально-экономическое развитие требует от нас системного анализа дальнейших направлений развития проекта. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании ключевых компонентов планируемого обновления. Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям! Таким образом, постоянный количественный рост и сфера нашей активности требует определения и уточнения новых предложений.Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности позволяет оценить значение экономической целесообразности принимаемых решений. С другой стороны новая модель организационной деятельности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Равным образом социально-экономическое развитие способствует подготовке и реализации дальнейших направлений развитая системы массового участия.Равным образом начало повседневной работы по формированию позиции требует от нас системного анализа соответствующих условий активизации! С другой стороны постоянное информационно-техническое обеспечение нашей деятельности представляет собой интересный эксперимент проверки всесторонне сбалансированных нововведений? Дорогие друзья, начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач! Таким образом, сложившаяся структура организации требует от нас системного анализа соответствующих условий активизации? Равным образом выбранный нами инновационный путь требует от нас системного анализа всесторонне сбалансированных нововведений! Не следует, однако, забывать о...",
            ),
            SizedBox(
              height: 20,
            ),
            ResultItem(
              title: 'Информация о домене',
              description: 'https://www.youtube.com/ - бла-бля-бла',
            ),
          ])
        : Container();
  }
}
