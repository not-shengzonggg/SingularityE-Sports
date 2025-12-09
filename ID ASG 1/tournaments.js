function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// reveal animation
const reveals = document.querySelectorAll(".reveal");
function checkReveal() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", checkReveal);
checkReveal();

// Switching of Tabs
const tabButtons = document.querySelectorAll(".match-tab-btn");
const tabContents = document.querySelectorAll(".match-tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
