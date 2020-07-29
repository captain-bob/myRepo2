var targeted = [];
var pressed = false;
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

console.log($(window).height())
var arr = [
    "20154944 孙臣臣",
    "20151010 王莹",
    "20140198 刘阳科",
    "20140196 丁欣烨",
    "20140197 刘睿博",
    "20140198 刘阳科",
    "20140199 彭亮",
    "20140200 彭钊"
];
var bg_music = document.getElementById("bg_music");
var stop_music = document.getElementById("stop_music");

$(document).ready(function() {
    $(".body").css("height", $(window).height())　　;
})
//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }

    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}

function start() {
    if (!pressed) {
        pressed = true;
        bg_music.currentTime = 0;
        bg_music.play();
        $('#btn').text("结束");
        id = setInterval("document.getElementById('target').innerHTML = show();", 50);
    } else {
        clearInterval(id);
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        $('#btn').text("开始");
        swfshow();
        stop_music.currentTime = 0;
        stop_music.play();
        var m = write();
        targeted.push(m)
        arr.remove(m);
        document.getElementById('target').innerHTML = m;
        console.log("已中奖：" + targeted)
        console.log("未中奖：" + arr)
        setTimeout("swfhidden()", 5000) //修改烟花多久后消失。3000代表3秒
    }

}

function swfshow() {
    $('#swfbg').show();
}

function swfhidden() {
    $('#swfbg').hide();
}

function show() {
    var one = getOne()
    var index = $.inArray(one, targeted);
    return one;
}

function write() {
    var one = getOne()
    var index = $.inArray(one, targeted);
    return one;
}

function getOne() {
    var name = '';
    var length = arr.length;
    var num = Math.ceil(Math.random() * length) - 1
    return arr[num];
}