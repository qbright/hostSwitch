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


    setProxy();

    storage.bindChange(function(){
        setProxy()  ;
    });

    chrome.browserAction.onClicked.addListener(function(){
        window.open(chrome.extension.getURL("popup/popup.html"))
    });

    function setProxy(){
        storage.get("proxys",function(info){
            var proxys = info.proxys,
                pacScript = proxyHandler.pacBuilder(proxys);

            proxyHandler.setProxy(pacScript);

        });
    }


})();