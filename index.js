const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.static('public'))

app.engine('.hbs', hbs({
    extname: '.hbs',
    // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');
