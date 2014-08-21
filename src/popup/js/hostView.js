/**
 * Created with WebStorm.
 * User: zqbright
 * Date: 2014/8/21 0021
 * Time: 10:03
 * To change this template use File | Settings | File Templates.
 */


var View = Class.extend({
    init:function(){
        this.bindEvent();
        this.renderHostList();
    },
    bindEvent:function(){




        var add_btn = document.querySelector(".add_btn"),
            return_btn = document.querySelector(".return_btn");
        var container_left = document.querySelector(".container_left");

        var form_host_input = document.getElementById("form_host_input");
        var form_ip_input = document.getElementById("form_ip_input");
        add_btn.addEventListener("click",function(){
            container_left.classList.add("hide");
        });

        return_btn.addEventListener("click",function(){
            container_left.classList.remove("hide") ;
            form_host_input.value = "";
            form_ip_input.value = "";

            document.querySelector(".ip_list").innerHTML = "";

        });

        var host_container = document.querySelector(".host");

        host_container.addEventListener("click",function(e){
            var target = e.target;

            if(target.classList.contains("title")){
                this.modify(target);
                return;
            }

            if(target.classList.contains("host_link")){
                this.delHost(target);
                return;
            }


            if(target.classList.contains("ip_remove")){
                this.removeIp(target);
                return;
            }


            if(target.classList.contains("host_entry") | target.classList.contains("ip_text") || target.classList.contains("ip_active")){
                this.activeIp(target);
                return;
            }

            console.log(e.target, e.currentTarget) ;
        }.bind(this));

        storage.bindChange(function(){
            this.renderHostList();
        }.bind(this));


        form_host_input.addEventListener("keypress",function(e){
            if(e.keyCode == 13){
                e.target.setAttribute("readonly","true");
            }
        });

        form_ip_input.addEventListener("keypress",function(e){
            if(e.keyCode == 13 && e.target.value) {
                if(!form_host_input.value){
                    alert("请输入Host域名");
                }else{
                    form_host_input.setAttribute("readonly","true");
                    var ip = e.target.value;

                    var temp_ = document.createElement("li");
                    temp_.innerText = ip;
                    temp_.setAttribute("data-ip",ip);
                    document.querySelector(".ip_list").appendChild(temp_)
                    e.target.value = "";
                }


            }
        }.bind(this))

        document.getElementById("commit_rule").addEventListener("click",function(){

            var host = form_host_input.value,
                ipList_ = document.querySelectorAll(".ip_list > li"),
                ipList = [];
            if(!host || !ipList_.length){
                alert("请输入完整信息");
                return;
            }

            for(var i = 0, ip;ip = ipList_[i];i ++){
                var tempIp = ip.innerText;
                if(ipList.indexOf(tempIp) == -1){
                    ipList.push(tempIp);
                }
            }

            storage.get("proxys",function(info){
                var proxys = info.proxys;
                if(!proxys[host]){
                   proxys[host] = [];
                }

                for(var i = 0, ipt; ipt = ipList[i]; i ++){
                    proxys[host].push({
                        ip:ipt,
                        enable:false
                    });
                }

                console.log(proxys);

                storage.set({"proxys":proxys},function(){
                    document.querySelector(".return_btn").click();
                });

            });
        });


    },

    activeIp:function(target){
        var link = target.dataset["link"],
            ip =  target.dataset["ip"];
        console.log("activeIp",link,ip);

        storage.get("proxys",function(info){
            var proxys = info.proxys,
                links = proxys[link];


            for(var i = 0, link_; link_ = links[i]; i ++ ){
                if(link_.ip == ip){

                    link_.enable = !link_.enable;
                }else{
                    link_.enable = false;
                }
            }

            storage.set({"proxys":proxys});
        });


    } ,

    removeIp:function(target){
        var ip = target.dataset["ip"],
            host = target.dataset["link"];
        if(ip){


            storage.get("proxys",function(info){
                    var proxys = info.proxys,
                        links = proxys[host];
                for(var i = 0, ip_ ; ip_ = links[i]; i ++) {
                    if(ip_.ip == ip){

                        proxys[host] = links.slice(0,i).concat(links.splice((i + 1),links.length));
                    }
                }

                if(!proxys[host].length){
                     delete  proxys[host];
                }

                storage.set({"proxys":proxys});


            });
            console.log("remove ip " , ip,host);
        }

    },
    delHost:function(target){
        var link = target.dataset["link"];

        if(link){

            storage.get("proxys",function(info){
                var proxys = info.proxys;

                delete proxys[link];

                storage.set({"proxys":proxys});
            });
        }
    },
    modify:function(target) {
        var link = target.dataset["link"];

        if(link){
            var form_host_input = document.getElementById("form_host_input");
            form_host_input.value = link;
            form_host_input.setAttribute("readonly","true");

            document.querySelector(".add_btn").click();

        }
    },

    toggerHost:function(target){

    },


    renderHostList:function(){
        storage.get("proxys",function(info){
                var proxys = info.proxys;
            var tmpl = document.getElementById("host_list_tmpl").innerHTML;

            var host = document.querySelector(".host");
            host.innerHTML = _.template(tmpl,{proxys:proxys});

        });

    },



});