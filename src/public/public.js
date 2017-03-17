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


var proxyUrl = 'http://opm.8864.com/api/barrage';

var isMobile = function(){
    var u = navigator.userAgent.toLowerCase();

    if(u.indexOf('iphone')>0 || u.indexOf('android')>0 || u.indexOf('xiaomi')>0){

        window.location.href = 'http://swl.8864.com/mobile_test/html/index.html';
        return false;
    }
}



export { proxyUrl,isMobile}