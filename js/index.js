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


//Fetch JSON

fetch('portfolio.json')
    .then((response) => response.json())
    .then(data => {

        const projectTarget = document.querySelector('.json-section')

        data.projects.forEach(project => {

            projectTarget.innerHTML += 

            `
        <section class="project">
            <div id = "`+ project.section +`" class="project-overview">
                <div class="project-image"><img src="` + project.img + `" alt="image placeholder"></div>
                <div class="project-copy copy">
                    <h2 class="project-title">`+ project.title + `</h2>
                    <p>`+ project.description +`</p>
                    <P class="project-links"><a href="#">Read more</a><a href="#">View on Github</a></P>
                </div>
            </div>
        </section>
        `

        })

        const projectDropMenu = document.querySelector('.project-dropdown')

        let menuOutput = "<ul>"

        data.projects.forEach(project =>{

            menuOutput += `<li><a href="#`+ project.section +`">`+ project.title +`</a></li>`

            projectDropMenu.innerHTML = menuOutput + "</ul>"

        })

        const projectDropMenuMob = document.querySelector('.project-mobile-menu')

        let mobileProjectMenu = "<ul>"

        data.projects.forEach(project =>{

            mobileProjectMenu += `<li><a class = "mobile-project-link" href="#` + project.section + `">` + project.title + `</a></li>`

            projectDropMenuMob.innerHTML = mobileProjectMenu + "</ul>"

        })

        const mobileProjectLink = document.querySelectorAll('.mobile-project-link')

        document.querySelectorAll('.mobile-project-link').forEach(link =>{
            link.addEventListener('click', ()=>{
                mobileMenu.classList.remove('mob-menu-apear')
                mobilePlus.classList.toggle('mobile-plus-rotate')
            })
        })
    })





