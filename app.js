

var http = require('http');
var fs = require("fs");
const PORT = process.env.PORT || 10025
http.createServer(function (req, res) {
    if(req.method === "GET") {
       if (req.url === "/") {
         fs.readFile("index.js", function(err, data){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
    }
else if(req.method === "POST") {
  if (req.url === "/page") {
    callback  = function(){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('{"response":"Successfully lit the lamp !!"}');
      }
    req.on('data', function (data) {
    var msg= data.toString('utf8').split('=')[1];
    var mqtt= require("mqtt");
   	var client = mqtt.connect("mqtt://iot.eclipse.org");
   	client.subscribe('group12');
   	client.publish('group12', msg);
    callback();
    });


}
}
}).listen(PORT);

console.log ("Server is started");