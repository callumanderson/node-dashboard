var querystring = require("querystring");
var jquery = require("jquery");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>Latest Desktop builds</h1>'+
    '<ul class="desktop_builds">'+
    '<li><a href="http://jenkins.dhcp.wby.chonp.net:8080/job/desktop.release.linux64/lastSuccessfulBuild/artifact/build-release-with-debug-info/">Linux 64 bit</a></li>'+
		'<li><a href="http://jenkins.dhcp.wby.chonp.net:8080/job/desktop.release.linux32/lastSuccessfulBuild/artifact/build-release-with-debug-info/">Linux 32 bit</a></li>'+
		'<li><a href="http://jenkins.dhcp.wby.chonp.net:8080/job/desktop.release.windows/lastSuccessfulBuild/artifact/build-release-with-debug-info/">Windows exe</a></li>'+
		'<li><a href="http://jenkins.dhcp.wby.chonp.net:8080/job/desktop.release.osx/lastSuccessfulBuild/artifact/build-release-with-debug-info/">Mac OSX dmg</a></li>'+
    '</ul>'
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(403, {"Content-Type": "text/plain"});
  response.write("Access Denied");
  //querystring.parse(postData.text);
  //process(postData);
  response.end();
}

function process(postData) {
	console.log("Processing... ")
	var input = querystring.parse(postData).text
	var splitInput = input.split("\n")
	for(var i in splitInput) {
		console.log(getPost(splitInput[i]))
	}
}

//A google API found via a bit of reverse engineering (403's after too many subsequent hits)
function getPost(term) {
	var url = "http://www.google.com/tbproxy/spell?lang=en&hl=en"
	var queryString = 
	'<?xml version="1.0" encoding="utf-8" ?>' + 
    '<spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1">'+
    '<text>'+ 
    term +
    '</text></spellrequest>' 
	//Use jquery to make the post and deal with resp
	
}

function name(response, postData) {
  console.log("Request handler 'name' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You submitted name");
  //querystring.parse(postData.text);
  //respondTo(postData);
  response.end();
}

function respondTo(postData) {
	console.log("responding to Name");
}

function favicon(response, postData) {
  console.log("Request handler 'favicon' was called.");
  response.writeHead(200, {"Content-Type": "image/x-icon"});
  response.end();
  return;
}

exports.start = start;
exports.upload = upload;
exports.favicon = favicon;
