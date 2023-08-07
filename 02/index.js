const express = require('express')
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let contador = 0;

app.use('/', (req, res, next) => {
    next();
    contador++;
});

app.get('/', (req, res) => {
    if(contador < jogadores.length) {
        res.send(`É a vez de ${jogadores[contador]} jogar`)
    } else {
        contador = 0;
        res.send(`É a vez de ${jogadores[contador]} jogar`);
    }
})


app.get('/remover', (req, res) => {
    let { indice } = req.query;
    if (indice) {
        indice = Number(indice);
        if (indice < 0 || indice >= jogadores.length || indice === undefined) {
            res.send(`Não existe jogador no índice informado (${indice}) para ser removido`);
        } else {
            jogadores.splice(indice, 1);
        }
    }
});

app.get('/adicionar', (req, res) => {
    let { nome , indice } = req.query
    if (!nome) {
        res.send('Nome não especificado. Nenhum jogador foi adicionado.');
        return;
    }

    let novoNome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    if (indice) {
        indice = Number(indice);
        if (indice < 0 || indice >= jogadores.length || indice === undefined) {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
        } else {
            jogadores.splice(indice, 0, novoNome);
            res.send(jogadores);
        }
    } else {
        jogadores.push(novoNome);
        res.send(jogadores);
    }

});

app.listen(8000);