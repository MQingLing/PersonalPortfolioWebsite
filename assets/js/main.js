/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
     navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/ /*<-----!!!!!------>*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills_content skills_open'
    }
    if(itemClass === 'skills_content skills_close')
    {
        this.parentNode.ClassName = 'skills_content skills_open'
    }
    else
    {
        this.parentNode.ClassName = 'skills_content skills_close'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{ 
    tab.addEventListener('click', () =>{ 
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active') 

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home_title',{})
sr.reveal('.home_title-color',{delay: 500})
sr.reveal('.home_subtitle',{delay: 900})
sr.reveal('.home_description',{delay: 1000})
sr.reveal('.button',{delay: 1200})
sr.reveal('.home_social',{interval: 200})
sr.reveal('.home_img',{interval: 200})

/*SCROLL ABOUT*/
sr.reveal('.about_description',{})
sr.reveal('.about_info',{delay: 400})
sr.reveal('..about_button',{delay: 600})

/*SCROLL SKILLS*/
sr.reveal('.skills_header',{})
sr.reveal('.skills_data',{delay: 600})

/*SCROLL QUALIFICATION*/
sr.reveal('.qualification_data',{delay: 500})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_message',{})

/*SCROLL PORTFOLIO*/
sr.reveal('.contact_title',{})
sr.reveal('.contact_subtitle',{delay: 400})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    //When the scroll is greater than 80 viewport, add the scroll header class to the header tag
    if(this.scrolly >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scrollup');
    if (this.scrollY>= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
