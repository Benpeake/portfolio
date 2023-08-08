const projectButton = document.querySelector('.project-button')
const projectDrop = document.querySelector('.project-dropdown')

const mobileDisplayButton = document.querySelector('.plus-button')
const mobileMenu = document.querySelector('.mob-menu')
const mobilePlus = document.querySelector('.mobile-plus-no-rotate')

projectButton.addEventListener('click', ()=>{
    projectDrop.classList.toggle('project-dropdown-appear')
})

mobileDisplayButton.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mob-menu-apear')
})

mobilePlus.addEventListener('click', ()=>{
    mobilePlus.classList.toggle('mobile-plus-rotate')
})

