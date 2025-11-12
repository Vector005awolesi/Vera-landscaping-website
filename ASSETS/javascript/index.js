var navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
    if(window.scrollY > 100) {
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
});
var navButton = document.querySelector("#navMenu");
var navagationBar = document.querySelector("#navagationBar");
navButton.addEventListener("click", function() {
    navagationBar.classList.toggle("navagationBarActive");
    var bodyContents = document.querySelector("#pageContents");
    bodyContents.classList.togggle(".fadeContent")
});