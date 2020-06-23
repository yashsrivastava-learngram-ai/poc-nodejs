const express = require('express')
const app = express()
<<<<<<< HEAD
const port = 4000
=======
const PORT = 8080;
const HOST = '0.0.0.0';
>>>>>>> 0687875f32dcb15ae50a0a0a8bf7dae15a9d517d

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
