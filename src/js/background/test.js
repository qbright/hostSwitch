





 var config_ = {
        mode: "pac_script",
        pacScript: {
          data: "function FindProxyForURL(url, host,c,d) {\n" +
                "if (host == 'www.baidu.com')\n" +
                "    return 'PROXY 127.0.0.1';\n" +
                "  return 'DIRECT';\n" +
                "}"
        }
      };


var proxy = {
    "www.baidu.com":[{
        ip:"127.0.0.1",
        enable:true
    },{
        ip:"127.0.0.0",
        enable:false
    }],
    "yyexplorer.game.yy.com":[{
        ip:"172.17.6.31",
        enable:true
    }],
    "yeconfig.game.yy.com":[{
        ip:"172.17.6.156",
        enable:true
    }],
    "cms.duowan.com":[{
        ip:"183.61.143.2",
        enable:true
    }],
    "aa.domain.com":[{
        ip:"192.168.1.1",
        enable:true
    }],
    "bb.domain.com":[{
        ip:"192.168.1.2",
        enable:true
    }],
    "cc.domain.com":[{
        ip:"192.168.1.3",
        enable:true
    }]
}

var proxyObj = [{
	host:"www.baidu.com",
	ip:"127.0.0.1",
	enable:true
},{
    host:"yyexplorer.game.yy.com",
    ip:"172.17.6.31",
    enable:true
},{
	host:"yeconfig.game.yy.com",
	ip:"172.17.6.156",
	enable:true
},{
	host:"cms.duowan.com",
	ip:"183.61.143.2",
	enable:true
},{
    host:"aa.domain.com",
    ip:"192.168.132.134",
    enable:true
},{
    host:"bb.domain.com",
    ip:"192.168.132.135",
    enable:true
},{
    host:"cc.domain.com",
    ip:"192.168.132.136",
    enable:true
}];


handler

/*//var pac_script = pacBuilder(proxyObj)

  *//*var config = {
        mode: "pac_script",
        pacScript: {
        	url:"http://127.0.0.1/test.pac"
        }
      };*//*
var config = {
	mode:"pac_script",
	pacScript:{
		data:pac_script
	}
}



chrome.proxy.settings.set({
	value:config_,
	scope:"regular"
})

chrome.webRequest.onBeforeRequest.addListener(function(a){
	console.log(a.url);
	if(a.url == "http://www.baidu.com/"){

		chrome.proxy.settings.clear({});
		console.log("match",a);
	}else if(a.url == "http://cms.duowan.com/login/toLogin.do"){
			chrome.proxy.settings.set({
	value:config,
	scope:"regular"
},function(){
	console.log("finish");
});
	}

},{urls:["<all_urls>"]},["blocking"]);*/
