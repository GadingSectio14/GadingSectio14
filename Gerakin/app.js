const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu); 

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.animate-serv', {
    scroolTrigger: '.animate-serv',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.animate-img', {
    scroolTrigger: '.animate-img',
    duration: 1.2,
    opacity: 1,
    x: -200
});

gsap.from('.animate-mem', {
    scroolTrigger: '.animate-mem',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.5
});

gsap.from('.animate-card', {
    scroolTrigger: '.animate-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay:0.2
});

gsap.from('.animate-team', {
    scroolTrigger: '.animate-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.2
});

gsap.from('.animate-text', {
    scroolTrigger: '.animate-text',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.2
});

gsap.from('.box-text', {
    scroolTrigger: '.box-text',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay:0.2
});


