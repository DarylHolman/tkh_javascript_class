var http = require("http");
var data = require("./movies.json");

var server = http.createServer(function(req,res){
			res.writeHead(200);
			arr.forEach(function(numbers){console.log(movies)})
			res.write(movies.name);
			res.end();
});

server.listen(8080);