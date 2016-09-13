var express = require('express');
var url = require('url');
var querystring = require('querystring');

var app = express();
var myTodos = [];

app.get('/', function(req, res) {

    res.render('todo.ejs', { todos: myTodos });
});

app.get('/todo', function(req, res) {
    console.log('todo');
    for( var i = 0; i < myTodos.length; i++){
      console.log(myTodos[i]);
    }
    res.end('> '+myTodos);
});

app.get('/todo/add', function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    console.log(params);

    if(params['item']){
        var elt = { name : params['item'], done:false};
        myTodos.push( elt ) ;
        console.log("push "+elt.name);
    }

    res.end();
});

app.get('/todo/done/:item', function(req, res) {

    console.log(req.params.item);

    var toBeDone = req.params.item;

    for( var i = 0; i < myTodos.length; i++){
      if(myTodos[i].name === toBeDone){
        myTodos[i].done = true;
        console.log(myTodos[i].name+ " done");
      }

    }

    res.end();
});



app.listen(8181);
