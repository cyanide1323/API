var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/parts_table");
var Parts = require("/home/phantom/Desktop/models/parts.js");
var server = app.listen(3000,function(){
	console.log("Server is running on port 3000");
});


app.use(bodyParser.json());

app.get('/',function(req,res){
	res.send("Please use the designated pass to get the data you want");
});

app.get('/api1',function(req,res){
	res.send("Please be more specific and enter part related queries");
});

app.get('/api1/parts',function(req,res){
	Parts.getParts(function(err,parts){
		if(err) { throw err; }
		res.json(parts);
	})
});

app.post('/api1/parts',function(req,res){
	var part = req.body;
	Parts.addPart(part,function(err,part){
		if(err) { throw err; }
		res.json(part);
	})
});

app.put('/api1/parts/:_id',function(req,res){
	var id = req.params._id;
	var part = req.body;
	Parts.updatePart(id,part,{},function(err,part){
		if(err) { throw err; }
		res.json(part);
	})
});

app.delete('/api1/parts/:_id',function(req,res){
	var id = req.params._id;
	Parts.deletePart(id,function(err,part){
		if(err) { throw err; }
		res.json(part);
	})
});

