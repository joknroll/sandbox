var express = require('express');

var app = express();
var todos = [];

app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});

app.get('/etage/:etagenum/chambre', function(req, res) {

    res.render('chambre.ejs', {etage: req.params.etagenum});
});


app.get('/compter/:nombre', function(req, res) {

    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.get('/todo', function(req, res) {

    res.render('todo.ejs', { todos: todos });
});

app.get('/todo/add', function(req, res) {
    console.log(req.params);

});


app.listen(8181);
