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


// cv pagination indexing

const cv1 = document.querySelector('.cv1')
const cv2 = document.querySelector('.cv2')
const cv3 = document.querySelector('.cv3')
const cv4 = document.querySelector('.cv4')


const pageTarget = document.querySelector('.cvpage')

window.addEventListener("pageshow", ()=>{
    pageTarget.innerHTML = '<a class="footerlink cvpage green" href="#"> 1/4 </a></div>'
});

function cvInViewport() {
    const bounding = cv1.getBoundingClientRect();
    const bounding2 = cv2.getBoundingClientRect();
    const bounding3 = cv3.getBoundingClientRect();
    const bounding4 = cv4.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) 
    {
        pageTarget.innerHTML = '<a class="footerlink cvpage green" href="#"> 1/4 </a></div>'

    } else if (bounding2.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
        pageTarget.innerHTML = '<a class="footerlink cvpage green" href="#"> 2/4 </a></div>'

    } else if (bounding3.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
        pageTarget.innerHTML = '<a class="footerlink cvpage green" href="#"> 3/4 </a></div>'

    } else if (bounding4.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
        pageTarget.innerHTML = '<a class="footerlink cvpage green" href="#"> 4/4 </a></div>'
        
    } else {
        pageTarget.innerHTML = "Instagram"
    }
}

 document.querySelector('.snap-scroll').addEventListener('scroll', () => {
    cvInViewport();
})


// cursor switch


const halfway = window.innerHeight / 2

document.addEventListener('mousemove', function(mouse) {
    if (mouse.clientY < halfway) {
      document.body.style.cursor = `url('/images/up_cursor.png'), auto`
    } else {
      document.body.style.cursor = `url('/images/down_cursor.png'), auto`
    }
  })

