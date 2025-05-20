/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('hidden')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.add('hidden')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-blue-600')
        link.classList.add('text-gray-800')
        link.querySelector('.underline-bar').classList.add('hidden')
    })
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              link = document.querySelector('.nav-link[href*=' + sectionId + ']')
        if(link && scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            link.classList.add('text-blue-600')
            link.classList.remove('text-gray-800')
            link.querySelector('.underline-bar').classList.remove('hidden')
        }
    })
}
window.addEventListener('scroll', scrollActive)
scrollActive();

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .competence__subtitle, .competence__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .competence__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.competence__data, .certificate__img, .contact__input',{interval: 200}); 

/*===== Partie CV =====*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('view-cv-button').addEventListener('click', function(event) {
        event.preventDefault();
        var cvPath = 'assets/CV_SIDI_MOHAMED.pdf';
        window.open(cvPath, '_blank');
    });
});

/*===== PROJECTS =====*/
function toggleDetails(button) {
    const content = button.parentElement.nextElementSibling;
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = "-";
    } else {
        content.classList.add('hidden');
        button.textContent = "+";
    }
}