/**
 * Created by Administrator on 2016/12/5.
 */
window.onload = function () {
    var parentBox =  document.getElementsByClassName("category-left-menu")[0];
    /*左侧的菜单栏*/
    var oUl = parentBox.getElementsByTagName("ul")[0];
    var oLiList = oUl.getElementsByTagName("li");
    var screenHeight = document.getElementById("category-content");
    var oParrentheight = screenHeight.offsetHeight- 45; //左侧菜单栏高度 (屏幕高度-顶部搜索框高度)
    var oLiHeight = oUl.offsetHeight ;//左侧菜单栏中li的总的高度
    var startY = 0; // 滑动开始时的 坐标位置
    var endY  = 0; //滑动结束时的 坐标位置
    var currentY = 0; // 当前的左边位置
    var moveY =0;   // 滑动的距离 endY - startY
    var startTime =0;
    var endTime =0;
    var addTransition = function(){
        oUl.style.webkitTransition = "all .3s ease 0s";
        oUl.style.transition = "all .3s ease 0s";
    };
    /*删除过渡*/
    var removeTransition = function(){
        oUl.style.webkitTransition = "all 0s ease 0s";
        oUl.style.transition = "all 0s ease 0s";
    };
    oUl.addEventListener('touchstart',function (e) {
        console.log(e);
        console.log("****touchstart*****");
        startY = e.touches[0].clientY;
        startTime = new Date().getTime();
    },false);
    oUl.addEventListener('touchcancel',function(e){
        alert(0);
    });
    oUl.addEventListener("touchmove",function (e) {
        e.preventDefault();
        console.log("****touchmove*****");
        endY = e.touches[0].clientY;
        moveY = endY -startY;
        //判断当前位置 是否是在可移动的区间
        /*
        * 可移动区间 currentY(currentY+moveY) + moveY （EndY-startY）表示的是移动后物体的坐标
        *
        * currentY+moveY<150 ↓
        * 表示currentY 一开始为0 当向下滑动时EndY >StartY moveY为正数
        *  moveY 当逐渐增大到150 时 表示菜单栏向下滑动（刷新）位置，自动吸附
        *
        *  currentY+moveY>-(oLiHeight-oParrentheight)-150  ↑
        *  oLiHeight-oParrentheight 表示相当于Li滚动出屏幕的高度即当li滑动到最底部时Li走过的距离
        *  当Li走到底部  再向上走150px 高度时（加载更多），自动吸附
        * */
        if(currentY+moveY<150 && currentY+moveY>-(oLiHeight-oParrentheight)-150){
            removeTransition();
            oUl.style.transform = "translateY("+(moveY+currentY)+"px)";
            oUl.style.webkitTransform = "translateY("+(moveY+currentY)+"px)";
            currentY += moveY;
            moveY = 0;
        }

        var a =-(oLiHeight-oParrentheight)-150;
    },false)
    oUl.addEventListener("touchend",function (e) {
        //当手指离开屏幕时 ，初始化数据
        console.log("******touchend****");
        endTime = new Date().getTime();
        if (currentY + moveY >= 150) {
            addTransition();
            oUl.style.transform = "translateY(" + (0) + "px)";
            oUl.style.webkitTransform = "translateY(" + (0) + "px)";
            startY = 0;
            endY = 0;
            moveY = 0;
            currentY = 0;
        }
        if (currentY + moveY <= -(oLiHeight - oParrentheight) - 150) {
            addTransition();
            oUl.style.transform = "translateY(" + (-(oLiHeight - oParrentheight)) + "px)";
            oUl.style.webkitTransform = "translateY(" + (-(oLiHeight - oParrentheight)) + "px)";
            console.log(-(oLiHeight - oParrentheight));
            startY = 0;
            endY = 0;
            moveY = 0;
            currentY = -(oLiHeight - oParrentheight);
        }
        console.log(endTime - startTime < 200);
        if (moveY == 0 && endTime - startTime < 200) {
            console.log("+++++++++++++++++++++");
            var parentNode = e.target.parentNode; //a的父级
            var target = e.target; //这个是点击i的a
            //清除class给点击的元素加上now
            for (var i = 0; i < oLiList.length; i++) {
                oLiList[i].index = i;
                oLiList[i].className = " ";
            }
            parentNode.className ="category-selected";
            var top =parentNode.index * 50;
             if(top>oLiHeight - oParrentheight){
             currentY=-(oLiHeight - oParrentheight);
             moveY = 0;
           }else{
           addTransition();
           oUl.style.webkitTransform = "translateY(" + (-top) + "px)";
             currentY=-top;
             moveY = 0;
             }
        }
        currentY += moveY;

},false)
}