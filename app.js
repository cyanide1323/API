var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/books");
var Genre = require("/home/phantom/Desktop/api/models/genre.js");
var Book = require("/home/phantom/Desktop/api/models/books.js");

app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send("Please use the designated pass to get the data you want");
}).listen(3000);

app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err) { throw err; }
		res.json(genres);
	})
});

app.get('/api/books',function(req,res){
	Book.getBooks(function(err,books){
		if(err) { throw err; }
		res.json(books);
	})
});

app.post('/api/genres',function(req,res){
	var genre = req.body;
	Genre.addGenres(genre,function(err,genre){
		if(err) { throw err; }
		res.json(genre);
	})
});

app.post('/api/books',function(req,res){
	var book = req.body;
	Book.addBook(book,function(err,book){
		if(err) { throw err; }
		res.json(book);
	})
});

app.put('/api/genres/:_id',function(req,res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenres(id,genre,{},function(err,book){
		if(err) { throw err; }
		res.json(genre);
	})
});

app.put('/api/books/:_id',function(req,res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id,book,{},function(err,book){
		if(err) { throw err; }
		res.json(book);
	})
});

app.delete('/api/genres/:_id',function(req,res){
	var id = req.params._id;
	Genre.deleteGenre(id,function(err,genre){
		if(err) { throw err; }
		res.json(genre);
	})
});

app.delete('/api/books/:_id',function(req,res){
	var id = req.params._id;
	Book.deleteBook(id,function(err,book){
		if(err) { throw err; }
		res.json(book);
	})
});

