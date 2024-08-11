const navicon = document.querySelector(".nav-icon-items");
const navmenu = document.querySelector(".nav-menu");
const navfilter = document.querySelector(".nav-menu-filter");
const naviconfilter = document.querySelector(".nav-icon-filter");

naviconfilter.addEventListener("click", () => {
    naviconfilter.classList.toggle("active");
    navfilter.classList.toggle("active");
})

navicon.addEventListener("click", () => {
    navicon.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navicon.classList.remove("active");
    navmenu.classList.remove("active");
}))
