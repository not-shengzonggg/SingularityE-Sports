function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function animateOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

// This section is made so that clicking on a team card scrolls to its details
const teamCards = document.querySelectorAll(".team-card");
teamCards.forEach(card => {
    card.addEventListener("click", () => {
        const targetId = card.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
