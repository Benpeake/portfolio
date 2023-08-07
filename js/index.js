const projectButton = document.querySelector('.project-button')
const projectDrop = document.querySelector('.project-dropdown')

projectButton.addEventListener('click', ()=>{
    projectDrop.classList.toggle('project-dropdown-appear')
})

