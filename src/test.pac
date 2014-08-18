function FindProxyForURL(url, host) {
	
	alert(url + ":::" + host);
    return 'PROXY 127.0.0.1';
}