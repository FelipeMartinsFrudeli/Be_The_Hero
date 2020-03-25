const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const porta = 3003;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(porta);
