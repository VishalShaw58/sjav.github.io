const mobile_nav = document.querySelector(".mobile-navbar-btn")
const nav_header = document.querySelector(".header");
const clkfnc = document.querySelector(".clkfnc");
const clkfn = document.querySelector(".clkfn");
const clkf = document.querySelector(".clkf");
const clk = document.querySelector(".clk");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click", (active) => toggleNavbar());
clkfnc.addEventListener("click", (active) => toggleNavbar());
clkfn.addEventListener("click", (active) => toggleNavbar());
clkf.addEventListener("click", (active) => toggleNavbar());
clk.addEventListener("click", (active) => toggleNavbar());


const goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
});

goTopBtn.addEventListener("click", () => {
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});