require("dotenv").config();
var express= require ("express");
var app = express();
app.get("/",  function (request, respond){
	// respond.send("Helloooo world");
	respond.json({
		"user": process.env.DB_USER,
		"pass": process.env.DB_PASS
	});
});
app.listen(8080);
console.log("server is running")