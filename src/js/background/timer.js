/**
 * Created with WebStorm.
 * User: zqbright
 * Date: 2014/8/19 0019
 * Time: 16:06
 * To change this template use File | Settings | File Templates.
 */

function startPacStatus(proxyHandler){
    var TIME = 10000;

    var loopCheckPacStatus = function(){
        proxyHandler.getProxy(function(info){
            window.GLB["PACSTATUS"] = info.levelOfControl;
            window.GLB["MODE"] = info.value.mode;
        });

        setTimeout(function(){
            loopCheckPacStatus();
        },TIME) ;
    }

    loopCheckPacStatus();
}




