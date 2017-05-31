ar express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	bcrypt = require("bcrypt-nodejs")
	hbs = require("hbs"),
	app = express(),
	id = require("uuid/v4"),
	User = require("./user");
	path = require("path");

app.use("/static", path.join(__dirname, "app/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/client"));


}};

app.use("/style.css"());



	}
}

mongoose.connect("mongodb://localhost/api")
app.listen(8080);

console.log("server is running")