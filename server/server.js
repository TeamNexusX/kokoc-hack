const port = 9999;

const express = require('express');
const cors = require('cors');
const path = require('path');
const DB = require('./config/db.connect');
const { UserModel } = require('./models');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());

const startServer = async () => {
    try {
        await DB.sync();
        // await DB.sync({ force: true });
        await app.listen(port, () => {
            console.log(`Server started on http://localhost:${port}`);
        });

        // const users = [
        //     {
        //         login: 'valiko',
        //         password: '123',
        //         firstname: 'Валентин',
        //         lastname: 'Кованов',
        //         sex: 'male',
        //         avatar: '',
        //         roles: ['USER'],
        //     },
        //     {
        //         login: 'keyready',
        //         password: '123',
        //         firstname: 'Родион',
        //         lastname: 'Корчак',
        //         sex: 'male',
        //         avatar: '',
        //         roles: ['USER', 'ADMIN'],
        //     },
        //     {
        //         login: 'dimapo',
        //         password: '1233',
        //         firstname: 'Дмитрий',
        //         lastname: 'Поляков',
        //         sex: 'male',
        //         avatar: '',
        //         roles: ['USER'],
        //     },
        // ];
        // for (let i = 0; i < users.length; i += 1) {
        //     await UserModel.create(users[i]);
        // }
    } catch (e) {
        console.log(e);
    }
};

app.get('/', async (req, res) => res.json({ message: 'server started' }));

app.post('/api/login', async (req, res) => {
    try {
        const { login, password } = req.body;

        const users = await UserModel.findAll({ raw: true, where: { login } });
        if (!users.length)
            return res.status(404).json({ message: 'пользователь не найден' });
        if (users[0].password !== password)
            return res.status(403).json({ message: 'неверный пароль' });

        return res.json(users[0]);
    } catch (e) {
        console.log(e);
        return res.json({ message: e.message });
    }
});

app.post('/api/signup', async (req, res) => {
    try {
        const { login, password, firstname, lastname, sex } = req.body;

        const candidate = await UserModel.findAll({ raw: true, where: { login } });
        if (candidate.length)
            return res.status(403).json({ message: 'пользователь уже существует' });

        await UserModel.create({
            login,
            password,
            firstname,
            lastname,
            sex,
        }).catch((e) => res.status(500).json({ message: e.message }));

        const users = await UserModel.findAll({ raw: true, where: { login } });
        return res.json(users[0]);
    } catch (e) {
        console.log(e);
        return res.json({ message: e.message });
    }
});

app.get('/api/disk_stat', (req, res) => {
    const { authorization } = req.headers;
});

startServer();
