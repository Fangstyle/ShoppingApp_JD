/**
 * Created by Administrator on 2016/12/5.
 */
window.onload = function () {
    var headSearch = document.getElementsByClassName("head-content")[0];
    var height = document.getElementById("ad_banner").offsetHeight;
    var timer;
    var timerCount = 4*60*60;
    console.log(height);
    window.onscroll = function () {
        /*头部 标题栏颜色改变*/
        var top = document.body.scrollTop;
        console.log(top);
        if(top > height){
            headSearch.style.background  = "rgba(201,21,35,0.85)";
        }else{
            var op = top/height * 0.8;
            headSearch.style.background  = "rgba(201,21,35,"+op+")";
        }
       /*时钟变化   4小时倒计时*/


    }
    Timer();
    function  Timer() {
        var timerBox = document.getElementsByClassName("timer")[0];
        var timeList = timerBox.getElementsByClassName("time-num");
        timer = setInterval(countDown,1000);
        function countDown () {
            timerCount--;
            var h = Math.floor(timerCount/60/60);
            var m = Math.floor(timerCount/60%60);
            var s = timerCount%60;
            timeList[0].innerHTML = h>10? Math.floor(h/10):0;
            timeList[1].innerHTML = h%10;
            timeList[2].innerHTML = m>10? Math.floor(m/10):0;
            timeList[3].innerHTML = m%10;
            timeList[4].innerHTML = s>10? Math.floor(s/10):0;
            timeList[5].innerHTML = s%10;
        }
    }
}
