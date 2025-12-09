// Sidebar toggle
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// Popup controls
function showPopup() {
    document.getElementById("successPopup").classList.add("active");
}

function closePopup() {
    document.getElementById("successPopup").classList.remove("active");
}

// Form Submit, Validation and Success Popup
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = form.querySelectorAll("input, textarea, select");
    for (let f of fields) {
        if (!f.value.trim()) {
            alert("Please fill out all fields.");
            return;
        }
    }

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(() => {
        form.reset();
        showPopup();
    });
});

// Reveal animation
const reveals = document.querySelectorAll(".reveal");
function animateOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const winH = window.innerHeight;
        const top = reveals[i].getBoundingClientRect().top;
        if (top < winH - 120) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();

// Feather icons
feather.replace();
