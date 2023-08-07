const express = require('express')
const app = express();

const { somarNum, subtrairNum, multiplicarNum, dividirNum } = require('./calcular');

app.get('/somar',somarNum);

app.get('/subtrair',subtrairNum);

app.get('/multiplicar', multiplicarNum);

app.get('/dividir', dividirNum);

app.listen(3000)