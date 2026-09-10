const contactForm=document.getElementById('contact-form');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const phoneInput=document.getElementById('phone');
const messageInput=document.getElementById('message');
const formMessage=document.getElementById('form-message'); 

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Process form submission
    const name=nameInput.value.trim();
    const email=emailInput.value.trim();
    const phone=phoneInput.value.trim();
    const message=messageInput.value.trim();

    if(name==="") {
        alert("Please enter your name.");
        return false;
    }
    if(email==="") {
       alert("Please enter your email address.");
        return false;
    }
    if(!email.includes("@")||!email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }
    if(phone==="") {
        alert("Please enter your phone number.");    
        return false;
    }
    if(message==="") {
        alert("Please enter your message.");    
        return false;
    }
    formMessage.innerText="Thank you for contacting us! We will get back to you soon.";
    formMessage.style.color = "green";
    formMessage.style.display = "block";
    contactForm.reset();
});
// ================= Mobile nav toggle =================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the menu after tapping a link
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ================= Scroll-triggered section animations =================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const animatedSections = document.querySelectorAll('.services, .membership, .contact, .footer');

    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    animatedSections.forEach(function (section) {
        sectionObserver.observe(section);
    });
} else {
    // Reduced motion: reveal everything immediately, no observer needed
    document.querySelectorAll('.services, .membership, .contact, .footer').forEach(function (section) {
        section.classList.add('in-view');
    });
}
