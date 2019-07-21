const http = require("http")
const server = http.createServer(function(req, res){
    console.log("url requested" + req.url);
    res.writeHead(200, {"content-type" : "text/html"});
    res.write("hi we are serving");
    res.end();
});
  server.listen(3000)