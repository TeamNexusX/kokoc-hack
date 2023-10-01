from flask.cli import FlaskGroup
from sqlalchemy import *
from sqlalchemy_utils import database_exists

from src import app
from src.models import db,Category

cli=FlaskGroup(app)

@cli.command('create_db')
def create_db():
    engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])
    inspector = inspect(engine)
    if not database_exists(app.config["SQLALCHEMY_DATABASE_URI"]) or \
            len(inspector.get_table_names()) == 0:
        db.drop_all()
        db.create_all()
        data_list=[
            Category(title='Бизнес', themes=['Бухгалтерские услуги', 'Грузоперевозки и транспортные услуги', 'Создание и продвижение сайтов', 'Юридические услуи']),
            Category(title='Бытовая техника', themes=['Бытовая техника']),
            Category(title='Еда и напитки', themes=['Доставка воды', 'Доставка готовых блюд и продуктов', 'Кулинария']),
            Category(title='Животные', themes=['Домашние животные']),
            Category(title='Канцелярские товары', themes=['Канцелярские товары']),
            Category(title='Красота и здоровье', themes=['Здоровое питание', 'Медицина', 'Парфюмерия и косметика']),
            Category(title='Недвижимость', themes=['Покупка и аренда']),
            Category(title='Образование', themes=['Дополнительное образование и курсы', 'Школа и вуз']),
            Category(title='Одежда, обувь и аксессуары', themes=['Одежда и обувь']),
            Category(title='Отдых и путешествия', themes=['Билеты', 'Зарубежный туризм', 'Прокат автомобилей', 'Российский туризм']),
            Category(title='Подарки и цветы', themes=['Подарки и цветы']),
            Category(title='Работа', themes=['Работа']),
            Category(title='Развлечение и досуг', themes=['Игры', 'Кино', 'Книги', 'Музыка', 'Охота', 'Рестораны', 'Рыбалка', 'Танцы', 'Театры', 'Телевидение']),
            Category(title='Сельскохозяйственное оборудование и техника', themes=['Сельскохозяйственное оборудование и техника']),
            Category(title='Семья и дети', themes=['Беременность и роды', 'Свадьба', 'Товары для детей']),
            Category(title='Спорт', themes=['Спорт']),
            Category(title='Строительство, обустройство и ремонт', themes=['Дизайн интерьера', 'Мебель', 'Ремонт', 'Товары для дома']),
            Category(title='Телеком', themes=['Доступ в интернет и мобильня связь']),
            Category(title='Транспорт', themes=['Авто', 'Мото']),
            Category(title='Финансы', themes=['Банки и кредиты', 'Инвестиции', 'Форекс']),
            Category(title='Электроника', themes=['Компьютерная техника', 'Принтеры и МФУ', 'Смартфоны и гаджеты', 'Фото, видео и аудиотехника']),
        ]
        for item in data_list:
            db.session.add(item)
            db.session.commit()
        print('[+] БД успешно создана и заполнена')
    else:
        print('[-] БД не пустая')


@cli.command('clear_db')
def clear_db():
    action=str(input('Очистить БД? Д/Н: '))
    if action == 'Д':
        db.drop_all()
        db.session.commit()
        print('[+] БД успешно очищена')
    elif action == 'Н':
        print('[-] Отмена удаления')
    else:
        print('[-] Действие не выбрано')

if __name__ == '__main__':
    cli()