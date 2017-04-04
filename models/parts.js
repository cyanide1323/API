var mongoose = require('mongoose');

var partSchema = mongoose.Schema({
	name:{
		type : String,
		required : true
	},
	description:{
		type :  String
	},
	vehicleType:{
		type : String
	},
	image_url:{
		type : String
	},
	dealerName:{
		type : String
	},
	dealerAddress:{
		type : String
	},
	dealerPhone:{
		type : String
	},
	cost:{
		type : String
	},
	latitude:{
		type : String
	},
	longitude:{
		type : String
	},
	buy_url:{
		type : String
	}
});

var Part = module.exports = mongoose.model('Part', partSchema);
// Get Parts
module.exports.getParts = function(callback,limit) {
	Part.find(callback).limit(limit);
}
//add Parts
module.exports.addPart = function(part,callback){
	Part.create(part,callback);
}
//update Parts
module.exports.updatePart = function(id,part,options,callback){
	var query = {_id : id};
	var update = {
			name : part.name
	}
	Part.findOneAndUpdate(query,update,options,callback);
}

module.exports.deletePart = function(id,callback){
	var query = {_id : id};
	Part.remove(query,callback);
}