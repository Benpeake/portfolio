const projectButton = document.querySelector('.project-button')
const projectDrop = document.querySelector('.project-dropdown')

const mobileDisplayButton = document.querySelector('.plus-button')
const mobileMenu = document.querySelector('.mob-menu')
const mobilePlus = document.querySelector('.mobile-plus-no-rotate')
const projectSubMenu = document.querySelector('.projects-submenu')
const mobileProjects = document.querySelector('.project-mobile-menu')

projectButton.addEventListener('click', () =>{
    projectDrop.classList.toggle('project-dropdown-appear')
})

projectButton.addEventListener('click', () =>{
    projectButton.classList.toggle('link-active')
})

mobileDisplayButton.addEventListener('click', () =>{
    mobileMenu.classList.toggle('mob-menu-apear')
})

mobilePlus.addEventListener('click', () =>{
    mobilePlus.classList.toggle('mobile-plus-rotate')
})

projectSubMenu.addEventListener('click', () =>{
    mobileProjects.classList.toggle('project-mobile-menu-appear')
})

projectSubMenu.addEventListener('click', () =>{
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
                    <h2 class="project-title green">`+ project.title + `</h2>
                    <p class="project-description">`+ project.description +`</p>
                    <P class="project-links"><a href="#">Live version</a><a href="#">Github</a></P>
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

        const MobileMenu = document.querySelector('.mobile_menu')

        let mobMenuOutput = '<ul>'

        data.projects.forEach(project =>{

            mobMenuOutput += `<li><a class="projects-submenu href="#`+ project.section +`">`+ project.title +`</a></li>`

            MobileMenu.innerHTML = mobMenuOutput + `</ul>`

        })

        const projectDropMenuMob = document.querySelector('.mobile_menu')

        let mobileProjectMenu = `<ul class="mobile-menu-list">`

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


//cursor switch
const introPage = document.getElementById('top-of-site');
const exitPage = document.getElementById('exit-page');

const halfway = window.innerHeight / 2;

let cursorUp = `url('images/up_cursor.png'), auto`
let cursorDown = `url('images/down_cursor.png'), auto`

document.addEventListener('mousemove', function (mouse) {
    // Get the bounding rectangles for introPage and exitPage
    const introRect = introPage.getBoundingClientRect();
    const exitRect = exitPage.getBoundingClientRect();

    // Check if the mouse is within introPage
    if (
        mouse.clientY >= introRect.top && mouse.clientY <= introRect.bottom
    ) {
        // Mouse is over introPage, use down_cursor.png
        document.body.style.cursor = cursorDown
    } else if (
        mouse.clientY >= exitRect.top && mouse.clientY <= exitRect.bottom
    ) {
        // Mouse is over exitPage, use up_cursor.png
        document.body.style.cursor = cursorUp 
    } else if (mouse.clientY < halfway) {
        // Mouse is above halfway and not over introPage or exitPage
        document.body.style.cursor = cursorUp 
    } else {
        // Mouse is below halfway and not over exitPage
        document.body.style.cursor = cursorDown
    }
});

//day - night mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  const dayModeStylesheet = document.getElementById('day-mode-stylesheet')
  const nightModeStylesheet = document.getElementById('night-mode-stylesheet')

  if (checkbox.checked) {
    // Enable day mode
    dayModeStylesheet.disabled = false
    nightModeStylesheet.disabled = true
    cursorUp = `url('images/up_cursor_day.png'), auto`
    cursorDown = `url('images/down_cursor_day.png'), auto`
 
  } else {
    // Enable night mode
    dayModeStylesheet.disabled = true
    nightModeStylesheet.disabled = false
    cursorUp = `url('images/up_cursor.png'), auto`
    cursorDown = `url('images/down_cursor.png'), auto`
  }
});

