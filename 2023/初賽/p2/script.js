const d = document;
var time;

function start(e) {
    var et = e.target;
    var func = et.getAttribute("data-target");

    if (func == 1) {
        var clock = d.querySelector(".clock");
        var nowTime = new Date();

        if (clock == "" || clock.value < nowTime) {
            alert("請輸入正確時間");
            return;
        }

        et.setAttribute("data-target", "2");
        et.innerHTML = "暫停";

        var targetTime = new Date(clock.value);

        time = setInterval(function () {
            nowTime = new Date();

            if (nowTime >= targetTime) {
                alert("時間到");
                clearInterval(time);
                location.reload();
                return;
            }

            var diff = targetTime - nowTime;
            var h = Math.floor(diff / 1000 / 60 / 60);
            var m = Math.floor(diff / 1000 / 60) % 60;
            var s = Math.floor(diff / 1000) % 60;
            var timeStr =
                (h >= 10 ? h : "0" + h) +
                ":" +
                (m >= 10 ? m : "0" + m) +
                ":" +
                (s >= 10 ? s : "0" + s);
            d.querySelector(".clockText").innerHTML = timeStr;
        }, 1000);
    } else if (func == 2) {
        et.setAttribute("data-target", "1");
        et.innerHTML = "繼續";
        clearInterval(time);
    }
}

function reset() {
    location.reload();
}