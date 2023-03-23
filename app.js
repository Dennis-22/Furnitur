const navLists = document.querySelectorAll('[nav-list]')
const drawerIcon = document.querySelector('[drawer-icon]')
const mobileNav = document.querySelector('[mobile-nav]')
const mobileNavClose = document.querySelector('[mobile-nav-close]') 
const mobileNavLists = document.querySelectorAll('[mobile-nav-list]')


navLists.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let moveTo = e.target.getAttribute('move-to')
        document.querySelector(`[${moveTo}]`).scrollIntoView(true)
    })
})

drawerIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'block'
})

mobileNavClose.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})

mobileNavLists.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let moveTo = e.target.getAttribute('move-to')
        document.querySelector(`[${moveTo}]`).scrollIntoView(true)
        mobileNav.style.display = 'none'
    })
})

// hero animation
const heroTm = gsap.timeline()
const heroMainText = document.querySelector('[hero-main-text]')
const heroSubText = document.querySelector('[hero-sub-text]')

heroTm.to(heroMainText, {opacity:1, scale:1})
heroTm.to(heroSubText, {opacity:1, y:0})

function handleScrollToSection(section){
    document.querySelector(`[${section}]`).scrollIntoView(true)
}