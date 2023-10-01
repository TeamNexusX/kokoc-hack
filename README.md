# Kokoc Hack 2023 | NexusX Team
___

## Трек
Разработка сервиса для определения тематики веб-ресурса
___

## Команда:
- Кофанов Валентин __backend developer__
- Терещенко Антон __backend developer__
- Поляков Дмитрий __UI/UX designer__
- Корчак Родион __frontend developer__
___

## Стек
 - [ ] Python (Flask)
 - [ ] React Typescript
 - [ ] Flutter
 - [ ] Keras
___

## Скрипты клиента
 - `npm run init` - установить все зависимости клиента
 - `npm run lint_project` - запустить все линтеры клиента
 - `npm start` - запустить клиент в режиме разработки
 - `npm run build` - собрать клиент в продакшн-режиме
___

## Запуск продакшн-варианта
 - [ ] __Заполнить бд__:  
перейти в backend-kokos контейнер и выполнить команду  
`python3 manage.py create_db`  
 - [ ] __Собрать docker-контейнер__  
`cd deploy && docker-compose up —build`
