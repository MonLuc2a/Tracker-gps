const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Stockage des points GPS dans un tableau pour simplifier. Utilisez une base de données dans une vraie application.
let gpsData = [];

app.post('/api/gps', (req, res) => {
const { lat, lng } = req.body;
const timestamp = new Date();
gpsData.push({ lat, lng, timestamp });
res.sendStatus(200);
});

app.get('/api/trajets', (req, res) => {
// Implémentez la logique pour obtenir des trajets à partir des données GPS stockées.
res.json({ trajets: gpsData });
});

app.get('/api/vitesse', (req, res) => {
// Implémentez la logique pour calculer la vitesse à partir des données GPS stockées.
res.json({ vitesse: "Non implémenté" });
});

app.listen(port, () => {
console.log('Serveur en écoute sur le port ${port}');
});
