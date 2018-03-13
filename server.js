var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + "/";

app.use(express.static('public'));

app.set("port", process.env.PORT || 3000);

router.use(function (req,res,next) {
	console.log("/" + req.method);
	next();
});

router.get("/",function(req,res){
	res.sendFile(path + "view/index.html");
});

app.use("/",router);

app.use("*",function(req,res){
	res.sendFile(path + "view/404.html");
});

app.listen(app.get("port"),function(){
	console.log("Live at http://localhost:" + app.get("port") + "\n" +
		"Press CTRL-C to terminate.");
});
