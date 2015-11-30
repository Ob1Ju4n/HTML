var mongodb = require("mongodb");

var connURL = "mongodb://localhost:27017/example";
mongodb.MongoClient.connect(connURL, function(err, db){
	if(err){
		console.log(err);
		process.exit(1);
	}
	
	var doc = {
		title:"Jaws",
		year:1975,
		director:"Steven Spielberg",
		rating:"PG",
		reviews:{
			critics:80,
			audience:97
		},
		screenplay:["Peter Benchley","Carl Gotlieb"]
	};
	db.collection("movies").insert(doc, function(err, result){
		if(err){
			console.log(err);
			process.exit(1);
		}
		
		//find with query:
		//var query = {year:1975, rating:"PG", screenplay:"Peter Benchley", reviews:{"$gte":90}};
		//db.collection("movies").find(query).toArray(function(err, docs){
		db.collection("movies").find().toArray(function(err, docs){
			if(err){
				console.log(err);
				process.exit(1);
			}
			console.log("Found docs!");
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc));
			});
			process.exit(0);
		});
	});
});