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

    return res.status(500).json({ message: 'ошибка сервера' });
});

app.listen(port, () => {
    console.log('Сервер запущен');
});
