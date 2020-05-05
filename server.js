const express = require('express');

const app = express();

app.use(express.static('./dist/my-portfolio-website'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-portfolio-website/'}),
);

app.listen(process.env.PORT || 8080);
