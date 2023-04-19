/* -- Glow effect -- */
const blob = document.getElementById("blob");
window.onpointermove = ({ clientX, clientY }) =>
    blob.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 3000, fill: "forwards" }
    );
$(function () {
    $(".navbar-icon").click(() => $(".navbar").toggleClass("active"));
});

// 3D Image Effect
if (window.matchMedia("(min-width: 767px)").matches) {
    const headRight = document.querySelector(".head-right");
    const img = headRight.querySelector("img");
    const boundingRect = headRight.getBoundingClientRect();

    headRight.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX - boundingRect.left;
        const mouseY = event.clientY - boundingRect.top;
        const centerX = headRight.clientWidth / 2;
        const centerY = headRight.clientHeight / 2;
        const percentX = (mouseX / centerX) * 100;
        const percentY = (mouseY / centerY) * 100;

        img.style.setProperty("--mouse-x", `${percentX}`);
        img.style.setProperty("--mouse-y", `${percentY}`);
    });
}

/* For smooth scroll behaviour */
// Get all the links with class 'scroll-link'
const linksss = document.querySelectorAll(".scc");
// Loop through each link and add an event listener
linksss.forEach((link) => {
    link.addEventListener("click", (event) => {
        // Prevent default anchor behavior
        event.preventDefault();
        // Get the href attribute of the link and remove the '#' character
        const targetId = link.getAttribute("href").substring(1);
        // Scroll to the target element with smooth animation
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        // to close the navbar in mobile mode on clicking a link
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.querySelector(".navbar").classList.remove("active");
            navIcon.classList.toggle("fa-bars");
            navIcon.classList.toggle("fa-times");
            document.getElementById("nav-close-icon").classList.toggle("hide"); // Show/hide cross icon
        }
    });
});

/* to get a cross icon when clicking bars icon in navbar */
const navIcon = document.getElementById("nav-bars-icon");
navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("fa-bars");
    navIcon.classList.toggle("fa-times");
    document.getElementById("nav-close-icon").classList.toggle("hide"); // Show/hide cross icon
});

// Jumbled Words Effect
const letters = "abcdefghijklmnopqrstuvwxyz";
let interval = null;

const jumbleLetters = (target) => {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return target.dataset.value[index];
                }
                return index === 0
                    ? letters[Math.floor(Math.random() * 26)].toUpperCase()
                    : letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        if (iteration >= target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 30);
};
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseover", (event) => {
        jumbleLetters(event.target);
    });
    link.addEventListener("mouseout", (event) => {
        event.target.innerText = event.target.dataset.value;
    });
});
