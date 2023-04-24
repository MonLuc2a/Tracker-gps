const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const journeysFilePath = 'public/journeys.json';

function readJourneys() {
    return JSON.parse(fs.readFileSync(journeysFilePath, 'utf8'));
}

function writeJourneys(journeys) {
    fs.writeFileSync(journeysFilePath, JSON.stringify(journeys, null, 2));
}

app.get('/journeys', (req, res) => {
    const journeys = readJourneys();
    res.json(journeys);
});

app.post('/journeys', (req, res) => {
    const newJourney = req.body;
    const journeys = readJourneys();
    journeys.push(newJourney);
    writeJourneys(journeys);
    res.status(201).json(newJourney);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
