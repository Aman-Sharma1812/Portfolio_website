// ======================Toggle icon navbar==================================

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

// ======================Toggle icon navbar==================================

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // ======================Sticky navbar==================================
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)


    // ======================Remove toggle icon and navbar===============================
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ======================Scroll reveal====================================================

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content, p .about-content', { origin: 'right' });

// ======================Typed js====================================================

const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Backend Developer', 'Tech Entrepreneur'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop: true
});

window.onload = function() {
    const form =  document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const templateParams = {
            User_Name: document.getElementById("User_Name").value,
            Email: document.getElementById("Email").value,
            Mobile_No: document.getElementById("Mobile_No").value,
            Email_Subject: document.getElementById("Email_Subject").value,
            Message: document.getElementById("Message").value
        };
        emailjs.send("service_u363b3p", "template_bzruqc7", templateParams)
        .then(function(response){
            alert("Email sent succesfully");
            console.log("success", response.status, response.text);
            form.submit();
        }, function(error){
            alert("Failed to send email. check console for details")
            console.error("Failed", error);
        });
    });
};