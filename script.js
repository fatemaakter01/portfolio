const roles = [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Angular Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function type() {

    if (charIndex < roles[roleIndex].length) {

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }
}

function erase() {

    if (charIndex > 0) {

        typing.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(type, 300);
    }
}

type();

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);

document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});