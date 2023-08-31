const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const PORT = 8000;
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 200);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { login, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.login === login && user.password === password,
        );

        if (userFromBd) {
            return res.json({ ...userFromBd, password: '' });
        }

        return res
            .status(403)
            .json({ message: 'пользователь не найден или логин и/или пароль неверные' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    // if (!req.headers.authorization) {
    //     return res.status(403).json({ message: 'AUTH ERROR' });
    // }

    next();
});

server.use(router);

// запуск сервера
server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${PORT}`);
});
