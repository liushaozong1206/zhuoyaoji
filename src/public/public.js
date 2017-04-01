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



var proxyUrl = 'http://192.168.84.1:3000';


export { proxyUrl}