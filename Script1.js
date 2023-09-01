// JavaScript to toggle navigation menu
function toggleMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}


 //JavaScript to lazy load background images
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section1, .section2"); // Corrected selector
    const options = {
        threshold: 0 // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute("data-bg-image");
                entry.target.style.backgroundImage = `url('${bgImage}')`;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


//when clicked button it scrolls to the section but slowly
document.querySelectorAll('.scroll_button').forEach(button => {
    button.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
}