const contWidth = document.getElementById("content");

function marginSize() {
    if (window.innerWidth<= window.innerHeight) {
        contWidth.style.margin = "0 3%"
    }
    else {
        contWidth.style.margin = "0 23%"
    }
}

window.addEventListener("resize", () => marginSize())