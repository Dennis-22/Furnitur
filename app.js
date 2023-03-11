const drawerIcon = document.querySelector('[drawer-icon]')
const mobileNav = document.querySelector('[mobile-nav]')
const mobileNavClose = document.querySelector('[mobile-nav-close]') 

drawerIcon.addEventListener('click', ()=>{
    mobileNav.style.display = 'block'
})

mobileNavClose.addEventListener('click', ()=>{
    mobileNav.style.display = 'none'
})

// window.addEventListener('resize', ()=>{
//     console.log(window.innerWidth)
// })
  