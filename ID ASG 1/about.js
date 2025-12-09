function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

function animateOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

// Achievements Tabs
const achBtns = document.querySelectorAll(".achievement-tab-btn");
const achContents = document.querySelectorAll(".achievement-content");

achBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        achBtns.forEach(b => b.classList.remove("active"));
        achContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});
