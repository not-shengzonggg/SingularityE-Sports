//Sidebar Toggle
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// reveal animation
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

// Carousel Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
let index = 0;

function showTab(i) {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    tabButtons[i].classList.add("active");
    tabContents[i].classList.add("active");
}

// Auto Slide Duration/Timing
setInterval(() => {
    index = (index + 1) % tabButtons.length;
    showTab(index);
}, 5000);

// Manual click
tabButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        index = i;
        showTab(i);
    });
});
