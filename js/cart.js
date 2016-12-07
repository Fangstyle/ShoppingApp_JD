/**
 * Created by Administrator on 2016/12/7.
 */
window.onload = function () {
    taggleDelete(); //删除的taggle按钮
    deletes(); //点击删除按钮弹出删除动画
    deleteMenu();
}
/*点击左侧删除选项*/
function  taggleDelete() {
    var toggleList = document.getElementsByClassName("item-taggle");
    for (var i = 0 ; i < toggleList.length ; i++){
        toggleList[i].index = i;
        toggleList[i].onclick = function () {
            var isChecked = this.getAttribute("checked");
            if (isChecked){
                this.removeAttribute("checked");
            }else{
                this.setAttribute("checked" ," ");
            }
        }
    }
}
function  deletes() {
    var popShadow = document.getElementById('pop-delete');
    var popContent = popShadow.getElementsByClassName('delete-content')[0];
    var deleteIconList =   document.getElementsByClassName("delete");
    for (var i = 0 ; i < deleteIconList.length ; i++){
        deleteIconList[i].index = i;
        deleteIconList[i].onclick = function (e) {
/*            document.body.style.position = "absolute";
            document.body.style.overflow = "hidden";*/
            var a = window.scrollY;
            popShadow.style.marginTop = a+"px";
            popShadow.style.display = "block"
            popContent.className ="delete-content deleteAnimation"


            /*垃圾井盖 动画*/
            /*动画*/
            delBtnTop = this.getElementsByClassName('bgc-top')[0];
            delBtnTop.style.webkitTransition = 'all 0.5s ease 0s';
            delBtnTop.style.transition = 'all 0.5s ease 0s';
            delBtnTop.style.webkitTransform = 'translateX(3px) translateY(-5px) rotate(45deg) scale(0.8,1) ';
            delBtnTop.style.transform = 'translateX(3px) translateY(-5px) rotate(45deg) scale(0.8,1)';
        }
    }
}
function deleteMenu() {
    var popShadow = document.getElementById('pop-delete');
    var popContent = popShadow.getElementsByClassName('delete-content')[0];
    var btnCancel = popContent.getElementsByClassName("cancel")[0];
    var btnConfirm = popContent.getElementsByClassName("submit")[0];
    btnCancel.onclick = function () {
        popShadow.style.display ="none";
    }
    btnConfirm.onclick = function () {
        popShadow.style.display ="none";
    }
}