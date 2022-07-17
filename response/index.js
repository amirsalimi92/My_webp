let lastTheme = localStorage.getItem("mode")
let theme = document.querySelector("#theme")
var design = document.querySelector(".design")
var contacts = document.querySelectorAll(".contact")
var cvbut = document.querySelector(".cvbut")
var linkedin = document.querySelector("#linkedin")
var github = document.querySelector("#github")
var body = document.querySelector("body")
var header = document.querySelector("#header")



function devTheme() {
    body.classList.add("devTheme")
    header.classList.remove("sticky-top-bg")
    design.classList.add("designDev")
    cvbut.classList.add("cvbutDev")
    linkedin.classList.add("linkedinDev")

    contacts.forEach(contact => {
        contact.classList.add("contactDev")
    });
    localStorage.setItem('mode', 'dev')
}

function normal() {
    body.classList.remove("devTheme")
    header.classList.add("sticky-top-bg")
    design.classList.remove("designDev")
    cvbut.classList.remove("cvbutDev")
    linkedin.classList.remove("linkedinDev")

    contacts.forEach(contact => {
        contact.classList.remove("contactDev")
    });
    localStorage.setItem('mode', 'normal')
}


// Check the last theme
if (lastTheme) {
    if (lastTheme === 'normal') {
        normal()
    } else if (lastTheme === 'dev') {
        devTheme()
    }
} else {
    normal()
}

// theme changer
theme.addEventListener("click", e => {
    if (body.classList.contains("devTheme")) {
        normal()
    } else {
        devTheme()
    }
})


// Time
var welTime = document.getElementById("welTime")
var time = new Date()
hour = time.getHours()
var welcome = "Hi!"

if (hour >= 11 && hour <= 14) {
    welTime.innerText = "Hello!"
} else if (hour >= 4 && hour <= 10) {
    welTime.innerText = "Good morning!"
} else if (hour >= 15 && hour <= 18) {
    welTime.innerText = "Good evening!"
} else {
    welTime.textContent = "Good night!"
}
