
var storage = {
	_storage:chrome.storage,
	l_storage:_storage.local,
	_getEmptyFun:function(){
		return function(){};
	}
	set:function(obj,cb){

		cb = cb || _getEmptyFun;
		l_storage.set(obj,cb)	
	},
	get:function(key,cb){

		cb = cb || _getEmptyFun;
		l_storage.get(key,cb);
	},
	getUsed:function(key,cb){

		cb = cb || _getEmptyFun;
		l_storage.getBytesInUse(key,cb);
	},
	remove:function(key){

		cb = cb || _getEmptyFun;
		l_storage.remove(key,cb);
	},
	clear:function(cb){

		cb = cb || _getEmptyFun;
		_storage.clear(cb);
	}
	bindChange:function(cb){
		cb = cb || _getEmptyFun;
		l_storage.onChanged.addListener(cb);
	}
}