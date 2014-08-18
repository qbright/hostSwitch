console.log("hello world");

/*  var config = {
        mode: "pac_script",
        pacScript: {
          data: "function FindProxyForURL(url, host,c,d) {\n" +
                "alert(url + '::::' + host + ':::' + shExpMatch('http://home.netscape.com/people/ari/index.html', 'ari/*')); if (host != 'baidu.com')\n" +
                "    return 'PROXY 127.0.0.1';\n" +
                "  return 'DIRECT';\n" +
                "}"
        }
      };*/
var proxyObj = [{
	host:"www.baidu.com",
	ip:"127.0.0.1",
	enable:true
},{
	host:"test.ddd.com",
	ip:"127.0.0.1",
	enable:true
},{
	host:"cms.duowan.com",
	ip:"183.61.143.2",
	enable:false
}];
var pac_script = pacBuilder(proxyObj)

  /*var config = {
        mode: "pac_script",
        pacScript: {
        	url:"http://127.0.0.1/test.pac"
        }
      };*/
var config = {
	mode:"pac_script",
	pacScript:{
		data:pac_script
	}
}

chrome.proxy.settings.set({
	value:config,
	scope:"regular"
},function(){
	console.log("finish");
});