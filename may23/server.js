var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	bcrypt = require("bcrypt-nodejs")
	hbs = require("hbs"),
	app = express(),
	id = require("uuid/v4"),
	User = require("./user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});

app.get("/login", function(req,res){
	res.render("login");
});
app.get("/signup", function(req,res){
	res.render("signup");
});
app.get("/user", function(req,res){
	res.render("user");
});

app.post("/login",function(req,res){
		User.findOne({"username": req.body.username}, function(err, user){
			if(err){
				console.log(err);
			}else {
				someUser = user;
				res.direct("/data");
app.post("/signup",function(req,res){
		User.findOne({"username": req.body.username}, function(err, user){
			new user({
				username: req.body.username
				password: req.body.password
				password
				token id()
			})
			if(err){
				console.log(err);
			}else {
				someUser = user;
				res.redirect("/login");
	}
});
});

app.post("/signup",function(req,res){
	new User ({
		username: req.body.username,
		password: req.body.password
	}).save(function(err){
		if(err){
			console.log(err);
		}else{
			res.redirect("/login");

	}
});
});
app.post("/login", function(req,res) {
	User.findOne({"username":req.body.username}, function(err,user){
		if (err){
			console.log(err);
		} else {
		}
	}
}

mongoose.connect("mongodb://localhost/api")
app.listen(8080);

console.log("server is running")