function myFunction() {
    var element = document.getElementById("contents");
    element.classList.remove("content");
}

setTimeout(function(){ 
 myFunction()
}, 3000);