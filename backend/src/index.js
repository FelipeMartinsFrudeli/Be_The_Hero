const express = require('express');
const routes = require('./routes');

const app = express();
const porta = 3003;

app.use(express.json());
app.use(routes);

app.listen(porta);
