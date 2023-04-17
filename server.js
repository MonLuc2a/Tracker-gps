const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/run-script', (req, res) => {
    exec('sh git.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error}`);
            return res.status(500).send(`Error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        res.send('Script executed successfully');
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
