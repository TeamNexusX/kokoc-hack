const port = 5000;

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());

app.post('/api/load_link', (req, res) => {
    const { link } = req.query;

    res.status(200).json({
        category: 'Бизнес',
        theme: 'Что-то на бизнесевском',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam deserunt doloribus eos harum minus nemo officiis omnis, perspiciatis possimus quod reiciendis, sint tenetur unde vero voluptate voluptates voluptatum.',
        domainInfo: 'Расположение: Россия',
    });
});

app.listen(port, () => {
    console.log('Сервер запущен');
});
