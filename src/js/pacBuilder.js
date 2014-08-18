console.log(0);

function pacBuilder(proxyObj){
	var pac = [];
	buildHeader(pac);
	buildProxy(pac,proxyObj);
	buildFooter(pac)	;
	console.log(pac.join("\n"));
	return pac.join("\n");
}
function buildHeader(pac){

	pac.push("function FindProxyForURL(url,host){");
	pac.push("var urlParse = /^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;");
	pac.push("var parseObj = urlParse.exec(url);");
	pac.push("var port = parseObj[7];");
	pac.push("if(!port){port = 80}");

}

function buildProxy(pac,proxys){
	for(var i = 0,proxy;proxy = proxys[i]; i ++ ){
		if(proxy.enable){
			pac.push("if(host == \"" + proxy.host + "\"){");
			pac.push("alert(host + '=============' + port)");
			pac.push("\treturn \"PROXY " + proxy.ip +":\" + port;");
			pac.push("}");
		}
	}
}


function buildFooter(pac){
	pac.push("\treturn \"DIRECT\";");
	pac.push("}\n");

}