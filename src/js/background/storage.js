
var storage = {
	_storage:chrome.storage,
	l_storage:_storage.local,
	set:function(obj,cb){
		l_storage.set(obj,cb)	
	}	
}