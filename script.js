// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Dark / Light mode toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (themeToggle) {

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight =
      document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem(
      "theme",
      isLight ? "light" : "dark"
    );
  });
}

// Contact Form + EmailJS
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    formStatus.textContent = "Sending message...";
    formStatus.style.color = "#4ade80";

    emailjs.sendForm(
      "service_o14xr27",
      "template_cua7q7c",
      this
    )
    .then(() => {

      formStatus.textContent =
        "Message sent successfully!";

      formStatus.style.color = "#4ade80";

      contactForm.reset();

    })
    .catch((error) => {

      formStatus.textContent =
        "Failed to send message.";

      formStatus.style.color = "#ff6b6b";

      console.error(error);
    });
  });
}

// Footer year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}