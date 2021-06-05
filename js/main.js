var burgerMenu = document.getElementById("header__burger-menu");
var show = document.getElementById("header__menu")

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");

    show.classList.toggle("show")
})



