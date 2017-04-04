var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title:{
		type : String,
		required : true
	},
	genre:{
		type : String,
		required : true
	},
	description:{
		type :  String
	},
	author:{
		type : String,
		required : true
	},
	image_url:{
		type : String,
		required : true
	},
	publisher:{
		type : String
	},
	pages:{
		type : String
	},
	buy_url:{
		type : String,
		required : true
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);
// Get Books
module.exports.getBooks = function(callback,limit) {
	Book.find(callback).limit(limit);
}
//add Books
module.exports.addBook = function(book,callback){
	Book.create(book,callback);
}
//update Books
module.exports.updateBook = function(id,book,options,callback){
	var query = {_id : id};
	var update = {
			title : book.title,
			genre : book.genre,
			description : book.description,
			author : book.author,
			image_url : book.image_url,
			publisher : book.publisher,
			pages : book.pages,
			buy_url : book.buy_url
	}
	Book.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteBook = function(id,callback){
	var query = {_id : id};
	Book.remove(query,callback);
}