module.exports = function (template, json){
const fs = require('fs');


const htmlTemplate = template;
let output = htmlTemplate.replace(/{%PRODUCTNAME%}/g , json["productName"]);
output = output.replace(/{%IMAGE%}/g , json["image"]);
output = output.replace(/{%FROM%}/g , json["from"]);
output = output.replace(/{%NUTRIENTS%}/g , json["nutrients"]);
output = output.replace(/{%QUANTITY%}/g , json["quantity"]);
output = output.replace(/{%DESCRIPTION%}/g , json["description"]);
output = output.replace(/{%ID%}/g, json["id"])
return output;
}



