/**
 * Created with WebStorm.
 * User: zqbright
 * Date: 2014/8/19 0019
 * Time: 14:12
 * To change this template use File | Settings | File Templates.
 */

(function(){

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


    var webRequestConf = {
            urls:["<all_urls>"]
        },
        blockConf = ["blocking"],
        requestCb = function(info){
            var url = info.url;
            console.log(proxy[parseUri(url).host]);

        };
    chrome.webRequest.onBeforeRequest.addListener(requestCb,webRequestConf,blockConf);






})();