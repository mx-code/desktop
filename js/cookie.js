function setCookie(c_name, value, maxAge) {
    var time = new Date();
    time.setDate(time.getDate() + maxAge);
    document.cookie = c_name + '=' + escape(value) + ((maxAge == null) ? '' : ';expires=' + time.toGMTString());
}
//setCookie('username','username',30)


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + '=');
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(';', c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return '';
}


function deleteCookie(name) {
    var time = new Date();
    time.setTime(time.getTime() - 10000);
    document.cookie = name + '=v; expires = ' + time.toGMTString();
}


function getCookie2(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}