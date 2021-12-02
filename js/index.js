// 获取 DOM 元素
// 这里记得前面加前缀
var btn = document.querySelector('#header button')
var ul = document.querySelector('#header ul');
var display = true;

// 初始化变量


// 点击汉堡按钮对应的事件
// 出现菜单
btn.onclick = () => { 
    // 之前显示点击后不显示
    ul.style.overflow = display ? 'visible' : 'hidden'
    console.log(ul.style.overflow)
    display = !display

}


// 轮播图
var swiper = document.querySelector("#pic ul")
var i = 0;
setInterval(function () {
    let length = -i*100
    // swiper.style.left = `${length}vw`
    swiper.style.transform = `translateX(${length}vw)`;
    i += 1
    if (i > 2) {
        i = 0
    }
}
,1000)