const { spawn } = require('child_process');

// Lancer le serveur en utilisant le fichier server.js
const server = spawn('node', ['server.js']);

server.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

server.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`);
});

async function fetchJourneys() {
    try {
        const fetch = await import('node-fetch');
        const response = await fetch('http://localhost:3000/journeys');
        const journeys = await response.json();
        return journeys;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de trajet:', error);
    }
}
