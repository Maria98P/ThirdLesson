
console.log("Script is running!");
window.onscroll= function() {
    scrollFunction();
};

function scrollFunction() {
    if (window.scrollY>20 ) {
        document.getElementById("nav").style.top="0";
    } else {
        document.getElementById("nav").style.top="-50px";
    }
}