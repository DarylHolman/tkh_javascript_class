var mongoose = require("mongoose");

var blogPost = new mongoose.Schema({}
	title: String,
	post: String,
	date: {
		month: String,
		day: String,
		year: String
	},
	user: String,
	time: string,

	comments: [{
		comment: String,
		user: String
	}

]
});

blog.exports = mongoose.model("posts", blogPost);
