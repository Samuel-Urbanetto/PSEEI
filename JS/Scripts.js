const contWidth = document.getElementById("content");
const parFont = document.querySelectorAll("#content > p");
let mobile;

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true;
    }
    else {
        mobile = false;
    }
}

function marginSize() {
    if (window.innerWidth<= window.innerHeight) {
        contWidth.style.margin = "0 3%"
        if (mobile == true) {
            parFont.style.fontSize = "3.5vh";
        }
    }
    else {
        contWidth.style.margin = "0 23%"
        parFont.style.fontSize = "2.75vh";
    }
}
//executes code checking window aspect ratio 
marginSize()

window.addEventListener("resize", () => marginSize())