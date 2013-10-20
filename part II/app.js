
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/canary', function(req, res){
	var json = {
		place : 'The Canary Islands',
		desc : 'The fleet stopped briefly in the Canary Islands for more provisions; later, Magellan learned that his suppliers had swindled him by misrepresenting the quantity and quality of supplies they provided.'
	}
	res.send(json)
})
app.get('/verde', function(req, res){
	var json = {
		place : 'Cape Verde',
		desc : 'Magellan arrived at the Cape Verde Islands, where they set course for Cape St. Augustine in Brazil. On November 20, the equator was crossed; on December 6, the crew sighted Brazil.'
	}
	res.send(json)
})
app.get('/strait', function(req, res){
	var json = {
		place : 'The Strait of Magellan',
		desc : 'Ferdinand Magellan, a Portuguese sailor in the service of Charles I of Spain, became the first European to navigate the strait in 1520 during his global circumnavigation voyage.'
	}
	res.send(json)
})
app.get('/guam', function(req, res){
	var json = {
		place : 'Guam',
		desc : 'The first known contact between Guam and Western Europe occurred when Ferdinand Magellan, a Portuguese explorer, anchored his small 3-ship fleet in Umatac Bay on March 6, 1521. Magellan had started out in Spain with five ships but by the time they reached the Marianas they were down to three ships and lost close to half their crew. One of the five original ships got destroyed, and after seeing the first ship go down another ship had a mutiny and took off.'
	}
	res.send(json)
})
app.get('/philippines', function(req, res){
	var json = {
		place : 'The Philippines',
		desc : 'p On 17 March Magellan reached the island of Homonhon in the Philippines, with 150 crew left. Members of his expedition became the first Spaniards to reach the Philippine archipelago, but they were not the first Europeans.  On the morning of 27 April 1521, Magellan sailed to Mactan with a small attack force. During the resulting battle against Lapu-Lapu\'s troops, Magellan was struck by a bamboo spear, and later surrounded and finished off with other weapons.'
	}
	res.send(json)
})
