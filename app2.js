//express rendre les api disponible
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./server2/config/db')
const api = require('./server2/routes/api')
const app = express();

//body-parser obligatoire pour  le fonctionnement de POST et PUT
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors permet de sécurisé le backend
app.use(cors());
app.options('*', cors());

//path permet de partager des fichiers dans le backend
app.use(express.static(path.join(__dirname, 'server2/public')));

app.use('',api)
//pour lancer le backend
const port = 3001
app.listen(port, () => console.log(`app listening on port ${port}!`))
