// ===============================
// MANASHA PORTFOLIO JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Manasha Portfolio Loaded");

    // Scroll reveal animation
    const revealElements = document.querySelectorAll(
        ".section, .stat-card, .about-card, .skill-card, .project-card, .timeline-item, .training-card, .recognition-card, .certification-card"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});