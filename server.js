const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const journeys = [
    {
        id: '1',
        name: 'Ajaccio - Corte',
        center: [8.78096, 42.08719],
        zoom: 10,
        coordinates: [
            [8.737625, 41.919229],
            [8.841647, 42.112946],
        ],
    },
    {
        id: '2',
        name: 'Toulouse - Montpellier',
        center: [3.876716, 43.610769],
        zoom: 10,
        coordinates: [
            [1.444246, 43.604652],
            [3.873869, 43.61092],
        ],
    },
    {
        id: '3',
        name: 'Toulouse - Bordeaux',
        center: [-0.57918, 44.837789],
        zoom: 10,
        coordinates: [
            [1.444246, 43.604652],
            [-0.57918, 44.837789],
        ],
    },
];



app.get('/journeys', (req, res) => {
    res.json(journeys);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
