const projectButton = document.querySelector('.project-button')
const projectDrop = document.querySelector('.project-dropdown')

const mobileDisplayButton = document.querySelector('.plus-button')
const mobileMenu = document.querySelector('.mob-menu')
const mobilePlus = document.querySelector('.mobile-plus-no-rotate')
const projectSubMenu = document.querySelector('.projects-submenu')
const mobileProjects = document.querySelector('.project-mobile-menu')


//PRE-LOAD DAY MODE
const dayModeStylesheet = document.createElement('link');
dayModeStylesheet.rel = 'stylesheet';
dayModeStylesheet.href = 'css/day-mode.css';
dayModeStylesheet.id = 'day-mode-styleshee';

// Preload the CSS file
dayModeStylesheet.onload = function() {
  // Apply the night mode styles once the CSS file is loaded
  document.head.appendChild(dayModeStylesheet);
};

// Add the preload link to the document head
document.head.appendChild(dayModeStylesheet);

//PRE-LOAD NIGHT MODE
const nightModeStylesheet = document.createElement('link');
nightModeStylesheet.rel = 'stylesheet';
nightModeStylesheet.href = 'css/night-mode.css';
nightModeStylesheet.id = 'night-mode-styleshee';

// Preload the CSS file
nightModeStylesheet.onload = function() {
  // Apply the night mode styles once the CSS file is loaded
  document.head.appendChild(nightModeStylesheet);
};

// Add the preload link to the document head
document.head.appendChild(nightModeStylesheet);

//DAY / NIGHT MODE...
const checkbox = document.getElementById('checkbox');

// Add a transition effect to the stylesheets
dayModeStylesheet.setAttribute('rel', 'stylesheet');
nightModeStylesheet.setAttribute('rel', 'stylesheet');
dayModeStylesheet.classList.add('fade');
nightModeStylesheet.classList.add('fade');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    cursorUp = `url('images/up_cursor_day.png'), auto`
    cursorDown = `url('images/down_cursor_day.png'), auto`
    // Enable day mode with a delay
    nightModeStylesheet.classList.add('fade-out');
    setTimeout(() => {
      nightModeStylesheet.disabled = true;
      dayModeStylesheet.disabled = false;
      dayModeStylesheet.classList.remove('fade-in');
      setTimeout(() => {
        dayModeStylesheet.classList.add('fade-in');
      }, 0);
    }, 200); 
  } else {
    cursorUp = `url('images/up_cursor.png'), auto`
    cursorDown = `url('images/down_cursor.png'), auto`
    // Enable night mode with a delay
    dayModeStylesheet.classList.add('fade-out');
    setTimeout(() => {
      dayModeStylesheet.disabled = true;
      nightModeStylesheet.disabled = false;
      nightModeStylesheet.classList.remove('fade-in');
      setTimeout(() => {
        nightModeStylesheet.classList.add('fade-in');
      }, 0);
    }, 200); 
  }
});


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

