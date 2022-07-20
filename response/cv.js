// scroll button
let btn = document.querySelector("#scroll")

window.addEventListener("scroll", e => {
    if (window.scrollY > 20) {
        btn.classList.add("show")
    } else {
        btn.classList.remove("show")
    }
})

btn.addEventListener("click", e => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

function myprint() {
    window.print();
}