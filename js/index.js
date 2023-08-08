const projectButton = document.querySelector('.project-button')
const projectDrop = document.querySelector('.project-dropdown')

const mobileDisplayButton = document.querySelector('.plus-button')
const mobileMenu = document.querySelector('.mob-menu')
const mobilePlus = document.querySelector('.mobile-plus-no-rotate')
const projectSubMenu = document.querySelector('.projects-submenu')
const mobileProjects = document.querySelector('.project-mobile-menu')

projectButton.addEventListener('click', ()=>{
    projectDrop.classList.toggle('project-dropdown-appear')
})

projectButton.addEventListener('click', ()=>{
    projectButton.classList.toggle('link-active')
})

mobileDisplayButton.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mob-menu-apear')
})

mobilePlus.addEventListener('click', ()=>{
    mobilePlus.classList.toggle('mobile-plus-rotate')
})

projectSubMenu.addEventListener('click', ()=>{
    mobileProjects.classList.toggle('project-mobile-menu-appear')
})

projectSubMenu.addEventListener('click', ()=>{
    projectSubMenu.classList.toggle('link-active')
})

