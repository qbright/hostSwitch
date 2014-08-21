var pacBuilder = Class.extend({
   // init:function(){},
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
        for(var i = 0,proxy;proxy = proxys[i]; i ++ ){
            if(proxy.enable){
                pac.push("if(host == \"" + proxy.host + "\"){");
                pac.push("alert(host + '=============' + port)");
                pac.push("\treturn \"PROXY " + proxy.ip +":\" + port;");
                pac.push("}");
            }
        }
    },
    _buildFooter:function(pac){
        pac.push("\treturn \"DIRECT\";");
        pac.push("}\n");
    }
});


