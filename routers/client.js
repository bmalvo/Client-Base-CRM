const express = require('express');
const { db } = require('../utils/db');

const clientRouter = express.Router();

clientRouter
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll()
        });
    })
    .get('/:id', (req, res) => {
        res.send('get one');
    })
    .post('/', (req, res) => {
        res.send('add');
    })
    .put('/:id', (req, res) => {
        res.send('modificate')
    })
    .delete('/:id', (req, res) => {
        res.send('delete');
    })

module.exports = {
    clientRouter,
}
