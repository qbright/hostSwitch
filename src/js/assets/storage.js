
var storage = {
	l_storage:chrome.storage.local,
	_getEmptyFun:function(){
		return function(){};
	},
	set:function(obj,cb){

		cb = cb || this._getEmptyFun;
		this.l_storage.set(obj,cb)
	},
	get:function(key,cb){

		cb = cb || this._getEmptyFun;
		this.l_storage.get(key,cb);
	},
	getUsed:function(key,cb){

		cb = cb || this._getEmptyFun;
		this.l_storage.getBytesInUse(key,cb);
	},
	remove:function(key,cb){

		cb = cb || this._getEmptyFun;
		this.l_storage.remove(key,cb);
	},
	clear:function(cb){

		cb = cb || this._getEmptyFun;
		this._storage.clear(cb);
	},
	bindChange:function(cb){
		cb = cb || this._getEmptyFun;
		this.l_storage.onChanged.addListener(cb);
	}
}