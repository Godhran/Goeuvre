const express = require('express');

const app = express();

app.use(express.static('./dist/GOEUVRE'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/GOEUVRE/' }),
);

app.listen(process.env.PORT || 8080);