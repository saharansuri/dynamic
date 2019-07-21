const fs = require('fs')
const http = require("http")
const rep = require('./replac.js');
const url = require('url')



var obj = fs.readFileSync('./Data.json');
var jsonobj = JSON.parse(obj);

var templateProduct = fs.readFileSync('./template-product.html').toString();
var templatecards = fs.readFileSync('./template-card.html').toString();
var templateoverview = fs.readFileSync('./template-overview.html').toString();

var q  = '';


const server = http.createServer(function(req, res){
    var Makecard = function(templatecards, json){
        return rep(templatecards, json)
    }
   // console.log("url requested" + req.url);
   
    var path = req.url;
    console.log(url.parse(path, true));

    var id = url.parse(path,true).query.id;
    var path = url.parse(path,true).pathname;


    var cards= "";
    if(path=="/overview" || path=="/home" || path=="/"){
        res.writeHead(200 , {"content-type" : "text/html"})
        for(let i=0 ; i<jsonobj.length; i++){
           cards += Makecard(templatecards, jsonobj[i]);


        }
        let overviewHTML = templateoverview.replace("{%PRODUCT_CARDS%}", cards);
        res.end(overviewHTML);
    
    }
    else if(path=="/product"){
        res.writeHead(200 , {"content-type" : "text/html"})
        var ProductHtml=rep(templateProduct, jsonobj[id]);
        res.end(ProductHtml);
    
    }
})
       
        
// //    res.writeHead(200, {"content-type" : "application/JSON"});
//         fs.readFile("./data (1).json", function( err , matter){
//             res.write(matter)
//             res.end();
            
        
        // res.write(qw);
//     });
// }

    
//     else{
        
//         res.end("not found");
//     }
    
// });
  var port = process.env.PORT||80;
  server.listen(port);
  console.log("server is listening")