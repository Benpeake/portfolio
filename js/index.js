const openIcons = document.querySelectorAll(".open-project");
const modalTarget = document.querySelector(".project-full-screen");
const scaleFactor = window.innerWidth * 0.01; // 1% of the viewport width
document.documentElement.style.setProperty("--scale-factor", scaleFactor);

// insert json
fetch("portfolio.json")
  .then((response) => response.json())
  .then((data) => {
    const projectSection = document.querySelector(".project-section");

    data.projects.forEach((project) => {
      projectSection.innerHTML +=
        `
            <div class="project">
                <div class="project-top">
                    <img class="project-img" src="` +
        project.img +
        `" alt="` +
        project.title +
        `"> 
                    <div class="icon-container">
                        <span class="material-symbols-outlined filled open-project">
                            add_circle
                        </span>
                    </div>
                </div>
                <div class="project-bottom">
                    <div class="project-bottom-left">
                        <div class="project-title-container">
                            <h3 class="project-title">
                            ` +
        project.title +
        `
                            </h3>
                            <span class="material-symbols-outlined">
                            <a href="` +
        project.livelink +
        `" target="__blank" rel="noopener">
                                outbound
                            </a>
                            </span>
                        
                        <a href="` +
        project.github +
        `"
                        target="_blank">
                        <img src="images/github-mark-black.svg" class="github-icon"/>
                        </a>

                        </div>

                        <div class="project-tech">
                            <p class="tech-details">
                            ` +
        project.tech +
        `
                            </p>
                        </div>
                    </div>
                    <div class="project-bottom-right">
                        <p class="project-blurb">
                        ` +
        project.synops +
        `
                        </p>
                    </div>
                </div>
            </div>
            `;
    });

    //project details
    const openProjectIcons = document.querySelectorAll(".open-project");

    let chosenProject = null;

    openProjectIcons.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        chosenProject = data.projects[index];
        displayProjectDetails(chosenProject);
        openProject();
      });
    });

    function openProject() {
      modalTarget.classList.add("open");
    }
  });

modalTarget.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-icon")) {
    closeProject();
  }
});

//scroll effect
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});

function closeProject() {
  modalTarget.classList.remove("open");
}

function displayProjectDetails(project) {
  modalTarget.innerHTML =
    `<div class="project-details-container">
            <div class="project-details-title-bar">
                <div>
                    <h2 class="headline">` +
    project.title +
    `</h2>
                </div>

                <img class="close-icon" src="images/close-light.svg" alt="Close icon">

            </div>
            <div class="project-detail-copy-container">
                <p class="project-detail-copy">` +
    project.description +
    `</p>
            </div>
            <div class="project-detail-links">
                <p class="project-detail-link"><a href="` +
    project.github +
    `" target="_blank" rel="noopener">Github</a></P>

    <p class="seperate">|</p>


                <p class="project-detail-link"><a href="` +
    project.livelink +
    `" target="_blank" rel="noopener">Live view</a></P>
            </div>
        </div>`;
}
