const projectButton = document.querySelector('.project-button')
const projectDropMenu = document.querySelector('.project-dropdown')
const mobilePlus = document.querySelector('.mob-top-right')
const mobileMenu = document.querySelector('.mob-menu-container')
const mobilePlusIcon = document.querySelector('.mobile-icon')

//day/night mode
const toggleButton = document.getElementById('checkbox')
const body = document.body;
let cursorUp = `url('images/up_cursor.svg'), auto`
let cursorDown = `url('images/down_cursor.svg'), auto`

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    cursorUp = `url('images/up_cursor_day.svg'), auto`
    cursorDown = `url('images/down_cursor_day.svg'), auto`
  } else {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    cursorUp = `url('images/up_cursor.svg'), auto`
    cursorDown = `url('images/down_cursor.svg'), auto`
  }
});

//Fetch JSON
fetch('portfolio.json')
    .then((response) => response.json())
    .then(data => {

        //project pages
        const projectTarget = document.querySelector('.json-section')

        data.projects.forEach(project => {
            projectTarget.innerHTML += 
        `
        <section class="project">
            <div id = "`+ project.section +`" class="project-overview">
                <div>
                    <img class="project-image" src="` + project.img + `" alt="`+ project.title+ `">
                </div>
                <div class="project-copy copy">
                <div class="title-container">
                    <div class="title-bar">
                        <h2 class="project-title">
                        <a href="`+ project.livelink +`" target="__blank" rel="noopener">
                        `
                        + project.title + 
                        `
                        </a>
                        </h2>
                        <span class="material-symbols-outlined larger-icon">
                            <a href="`+ project.livelink +`" target="__blank" rel="noopener">
                                outbound
                            </a>
                        </span>
                    </div>
                        <p class="tech-copy">`+ project.tech +`</p>
                    </div>
                    <p class="project-description">`+ project.description +`</p>
                </div>
            </div>
        </section>
        `

        })

        // project drop-dow   
        let projectMenuContent = "<ul>"
        data.projects.forEach(project =>{
            projectMenuContent += `<li><a href="#`+ project.section +`">`+ project.title +`</a></li>`
            projectDropMenu.innerHTML = projectMenuContent + "</ul>"
        })

        //mob menu pages
        const mobileMenuTarget = document.querySelector('.mob-menu')
        data.projects.forEach(project => {
            mobileMenuTarget.innerHTML+= 
            ` 
            <p><a class="mob-project-link" href="#`+ project.section +`">`+ project.title +`</a></p>
            `
        })

        mobileMenuTarget.innerHTML+= 
        `          
        <hr class="horizontal-line">
        <p><a class="mob-nav-link" href="mailto:benpeake.dev@gmail.com" target="_blank">Email</a></p>
        <p><a class="nav-link" href="https://github.com/Benpeake" target="_blank" rel="noopener">Github</a></p>
        `
        document.querySelectorAll('.mob-project-link').forEach(link =>{
            link.addEventListener('click', () =>{
                mobileMenu.classList.toggle('mob-menu-apear')
                mobilePlus.classList.toggle('mobile-icon-rotate')
        })
        })
    })



//cursor switch
const introPage = document.getElementById('top-of-site');
const exitPage = document.getElementById('exit-page');

const halfway = window.innerHeight / 2;

document.addEventListener('mousemove', function (mouse) {
    // Get the bounding rectangles for introPage and exitPage
    const introRect = introPage.getBoundingClientRect();
    const exitRect = exitPage.getBoundingClientRect();

    if (
        mouse.clientY >= introRect.top && mouse.clientY <= introRect.bottom
    ) {
        document.body.style.cursor = cursorDown
    } else if (
        mouse.clientY >= exitRect.top && mouse.clientY <= exitRect.bottom
    ) {
        document.body.style.cursor = cursorUp 
    } else if (mouse.clientY < halfway) {
        document.body.style.cursor = cursorUp 
    } else {
        document.body.style.cursor = cursorDown
    }
})

projectButton.addEventListener('click', () =>{
    projectDropMenu.classList.toggle('project-dropdown-appear')
})

mobilePlus.addEventListener('click', () =>{
    mobileMenu.classList.toggle('mob-menu-apear')
    mobilePlus.classList.toggle('mobile-icon-rotate')
})

