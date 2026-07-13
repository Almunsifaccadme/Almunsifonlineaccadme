// ================= FAQ =================
const faq = document.querySelectorAll(".faq-question");

faq.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// ================= Mobile Menu =================
const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ================= Counter =================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// ================= Scroll Top =================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= Dark Mode =================
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ================= Loader =================
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ================= EmailJS =================
emailjs.init({
    publicKey: "kHqIOIof8ckIobMMo"
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_7a0wb7b",
        "template_ivx4e8s",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Error: " + JSON.stringify(error));
    });
});