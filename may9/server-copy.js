var express = require("express");
var body parser = require("body-parser");
var sqlite = require("sqlite3").verbose();
var path = require("path");
var app = express ();
var db = new sqlite.database("example");
var db.serialize(function(){
	db.run(CREATE TABLE lorem(name STRING, age INTERGER))
})
db.serialize(function(){
	db.run
	$name = data.name
})

app.use(bodyParser.urlencoded({
		extended:true
}));

app.use(bodyParser.json())
app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(8080);

console.log("server is running");
app.post("/",function(req,res){
var data = {
	name: req.body.name,
	age: req.body.age
};

})
