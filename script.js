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