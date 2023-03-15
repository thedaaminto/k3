function preloader() {
    let preloader = document.querySelector("#preloader")
    setTimeout(() => {
        preloader.style.display = "none"
    }, 1500)
}

function mainMenu() {
    const mobilePanel = document.querySelector(".mobile-panel"),
        mobileOverly = document.querySelector(".panel-overlay"),
        navClose = document.querySelector(".panel-close");

    navClose.addEventListener("click", function (e) {
        e.preventDefault();
        mobilePanel.classList.remove("panel-on");
    });

    mobileOverly.addEventListener("click", function (e) {
        e.preventDefault();
        mobilePanel.classList.remove("panel-on");
    });
}

function stickyHeader() {
    let scrollTop = window.scrollY,
        siteHeader = document.querySelector(".template-header")

    if (siteHeader.classList.contains("sticky-header")) {
        if (scrollTop < 110) {
            siteHeader.classList.remove("sticky-on")
        } else {
            siteHeader.classList.add("sticky-on")
        }
    }
}

function tabPane() {
    const tabs = document.querySelector(".nav-tabs")
    const tabButton = document.querySelectorAll(".nav-link")
    const contents = document.querySelectorAll(".tab-pane")

    tabs.onclick = e => {
        const id = e.target.dataset.id
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active")
            })
            e.target.classList.add("active")

            contents.forEach(content => {
                content.classList.remove("active")
            })
            const element = document.getElementById(id)
            element.classList.add("active")
        }
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    mainMenu()
    tabPane()
})

window.addEventListener('scroll', stickyHeader)

window.addEventListener('load', (event) => {
    preloader()
})
