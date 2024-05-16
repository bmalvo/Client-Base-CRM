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
        res.render('client/one', {
            client: db.getOne(req.params.id),
        });
    })
    .post('/', (req, res) => {
        res.send('add');
    })
    .put('/:id', (req, res) => {
        res.send('modificate')
    })
    .delete('/:id', (req, res) => {
        // res.send('delete');
        db.delete(req.params.id);
        res.render('client/deleted');
    })

module.exports = {
    clientRouter,
}
