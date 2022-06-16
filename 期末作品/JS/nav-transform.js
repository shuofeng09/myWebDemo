window.addEventListener("scroll", function () {
    //alert(window.scrollY);
    //获取header导航栏元素
    var header = document.getElementById("header");
    //获取导航栏元素字体
    var font = document.querySelectorAll(".nav-font");
    //获取导航栏login字体
    var login_font = document.getElementById("nav-login-font");
    //获取header头部logo
    var header_logo = document.querySelector(".header-img");
    if (window.scrollY > 0) {
        header.classList.add("transform-nav");
        login_font.style.backgroundColor = "#3056d3";
        header_logo.classList.add("transform-header-image");
        for (i = 0; i < font.length; i++) {
            font[i].classList.add("transform-nav-font");
        }
    } else {
        header.classList.remove("transform-nav");
        header_logo.classList.remove("transform-header-image");
        login_font.style.backgroundColor = "#5978dc";
        login_font.style.color = "white";
        for (i = 0; i < font.length; i++) {
            font[i].classList.remove("transform-nav-font");
        }
    }
}, false);
document.getElementById("nav-login-font").addEventListener('mouseenter', function () {
    if (window.scrollY > 0) {
        document.getElementById("nav-login-font").style.backgroundColor = "black";
        document.getElementById("nav-login-font").style.color = "white";
    } else {
        document.getElementById("nav-login-font").style.backgroundColor = "white";
        document.getElementById("nav-login-font").style.color = "black";
    }
});
document.getElementById("nav-login-font").addEventListener("mouseleave",function () {
    if (window.scrollY > 0) {
        document.getElementById("nav-login-font").style.backgroundColor = "#3056d3";
    } else {
        document.getElementById("nav-login-font").style.backgroundColor = "#5978dc";
        document.getElementById("nav-login-font").style.color = "white";
    }
});
