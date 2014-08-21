var ProxyHandler = Class.extend({
    init:function(){},
    pacBuilder:function(proxyObj){
        var pac = [];

        this._buildHeader(pac);
        this._buildProxy(pac,proxyObj);
        this._buildFooter(pac);

        return pac.join("\n") ;

    },
    _buildHeader:function(pac){
        pac.push("function FindProxyForURL(url,host){");
        pac.push("var urlParse = /^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/;");
        pac.push("var parseObj = urlParse.exec(url);");
        pac.push("var port = parseObj[7];");
        pac.push("if(!port){port = 80}");
    },
    _buildProxy:function(pac,proxys){
        for(var proxy in proxys){
            var host = proxy,
                ips = proxys[proxy],
                ip = "";
            for(var i = 0, ipInfo; ipInfo = ips[i]; i ++){
                if(ipInfo.enable) {
                    ip = ipInfo.ip;
                    break;
                }
            }
            if(ip){
                pac.push("if(host == \"" + host + "\"){");
                pac.push("alert(host + '=============' + port)");
                pac.push("\treturn \"PROXY " + ip +":\" + port;");
                pac.push("}");
            }
        }
    },
    _buildFooter:function(pac){
        pac.push("\treturn \"DIRECT\";");
        pac.push("}\n");
    },
    setProxy:function(pacScript){
        var config = {
            mode:"pac_script",
            pacScript:{
                data:pacScript
            }
        }
        chrome.proxy.settings.set({
            value:config,
            scope:"regular"
        })
    },
    getProxy:function(cb){
        if(cb){
            chrome.proxy.settings.get({},cb);
        }
    },
    clearProxy:function(){
        chrome.proxy.settings.clear({});
    }
});


