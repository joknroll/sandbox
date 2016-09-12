var http = require('http');
var url = require('url');
var mymodule = require('./mymodule');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;
var markdown = require('markdown').markdown;


var server = http.createServer(function(req, res) {


    var jeu = new EventEmitter();

    jeu.on('gameover', function(message) {
      console.log(message)
    });

  var params = querystring.parse(url.parse(req.url).query);

  var page = url.parse(req.url).pathname;
  console.log(page);
  console.log(params);
  res.writeHead(200, {"Content-Type": "text/plain"});

  if('bla' in params){
    jeu.emit('gameover', 'Vous avez perdu !');


    res.write('welcome '+ params['bla']+' ');
    mymodule.direBonjour();
    mymodule.direByeBye();

    console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
  }

  if(page === "/test"){
    res.write('test bla');
  }else{
    res.write('no bla');
  }

  res.end('hey');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

server.listen(8181);

//server.close();
