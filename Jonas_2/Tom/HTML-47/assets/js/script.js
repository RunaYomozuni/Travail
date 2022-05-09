let nav = document.querySelector("header")
document.addEventListener("scroll", function (){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.opacity = "0.8";
    } else {
        nav.style.opacity = "1";
    }
})