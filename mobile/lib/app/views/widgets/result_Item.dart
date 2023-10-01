import 'package:flutter/material.dart';
import 'package:get/get.dart';

// ignore: must_be_immutable
class ResultItem extends StatelessWidget {
  String title;
  String description;
  ResultItem({
    Key? key,
    required this.title,
    required this.description,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
      child: Container(
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            border: Border.all(
              color: Get.theme.colorScheme.primary,
              width: 1,
            )),
        width: Get.width,
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: ExpansionTile(
            initiallyExpanded: true, // ExpansionTile изначально открыт
            title: Center(child: Text(title)),
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10.0),
                child: Text(description),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
