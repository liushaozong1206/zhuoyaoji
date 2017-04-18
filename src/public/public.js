/*
var ajaxGet = function (url, fn) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data) {
            fn.call(window, data);
        }
    })
};
*/

/*var Superagent = function(url,data,fn){
	Superagent
		.get(url)
		.query(data)
		.end(function (err, res) {
			fn.call(window,res)
		});
}*/
var isMobile = function(){
	var u = navigator.userAgent.toLowerCase();
	
	if(u.indexOf('iphone')>0 || u.indexOf('android')>0 || u.indexOf('xiaomi')>0){
		
		window.location.href = 'http://zyj.8864.com/mobile';
		return false;
	}
}



var proxyUrl = 'http://192.168.84.1:3000';


export { proxyUrl,isMobile}

