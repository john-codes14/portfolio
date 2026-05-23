
const navToggle=document.getElementById("navToggle");
const navLinks=document.getElementById("navLinks");

navToggle.addEventListener("click",()=>{
navLinks.classList.toggle("open");
});

const themeToggle=document.getElementById("themeToggle");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){
document.body.classList.add("light-theme");
themeToggle.textContent="☀️";
}

themeToggle.addEventListener("click",()=>{
document.body.classList.toggle("light-theme");

const isLight=document.body.classList.contains("light-theme");

themeToggle.textContent=isLight?"☀️":"🌙";

localStorage.setItem("theme",isLight?"light":"dark");
});

emailjs.init("Qq1B7HFaMk5e-e_aE");

const contactForm=document.getElementById("contact-form");
const formStatus=document.getElementById("formStatus");

contactForm.addEventListener("submit",function(e){

e.preventDefault();

formStatus.textContent="Sending...";

emailjs.sendForm(
"service_o14xr27",
"template_cua7q7c",
this
)

.then(()=>{

formStatus.textContent="Message sent successfully!";
contactForm.reset();

})

.catch(()=>{

formStatus.textContent="Failed to send message.";

});

});

const revealElements=document.querySelectorAll(
".fade-in,.skill-card,.project-card"
);

const revealOnScroll=()=>{

const triggerBottom=window.innerHeight*0.88;

revealElements.forEach((element)=>{

const rect=element.getBoundingClientRect();

if(rect.top<triggerBottom){
element.classList.add("show");
}

});

};

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);
