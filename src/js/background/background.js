/**
 * Created with WebStorm.
 * User: zqbright
 * Date: 2014/8/19 0019
 * Time: 14:12
 * To change this template use File | Settings | File Templates.
 */

(function(){
    var GLB = {
        CTRL_BY_OTHER:"controlled_by_other_extensions",
        CTRL_BY_THIS:"controlled_by_this_extension",
        PROXY_MODE_SYSTEM:"system",
        PROXY_MODE_DIRECT:"direct",
        PROXY_MODE_AUTO_DETECT:"auto_detect",
        PROXY_MODE_PAC_SCRIPT:"pac_script",
        PROXY_MODE_FIXED_SERVERS:"fixed_servers",
        PROXY_MODE_SYSTEM:"system"
    }
    window.GLB = GLB;
    var proxyHandler = new ProxyHandler();


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
        };

    var pacScript = proxyHandler.pacBuilder(proxy);

    proxyHandler.setProxy(pacScript);


    console.log(pacScript);
   
    chrome.browserAction.onClicked.addListener(function(){
        window.open(chrome.extension.getURL("popup/popup.html"))
    });





})();