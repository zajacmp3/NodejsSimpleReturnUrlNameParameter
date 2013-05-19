var http = require('http');
http.createServer(function (req, res) {
	console.log("Recived request url " + req.url);
	var sname = req.url.search("name");
	if(sname != -1){
		sname = sname + "name".length + 1;
		var from = sname;
		while(req.url[sname] != '?' && sname<req.url.length){
			sname++;
		}
		var name = req.url.substring(from,sname);
		console.log("Returning parameter of name - " + name);
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(name+'\n');
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Error - ask about name\n');
	}

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
