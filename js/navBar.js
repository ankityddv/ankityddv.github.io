function showMenuPopUp() {

    var x = document.getElementById("navigation2");

    if (x.style.display === "none") {
        x.style.display = "block";
        console.log("menu displayed")
    } else {
        x.style.display = "none";
        console.log("menu hidden")
    }
}

function setNavigation() {

    loadFooter();
    loadNavBar();

    let navigationItem = {
        work: {
            label: "Work",
            link: "index.html#services"
        },

        resume: {
            label: "Resume",
            link: "resume.html"
        },

        contact: {
            label: "Contact",
            link: "index.html#footer"
        },

        project: {
            label: "Projects",
            link: "index.html#products"
        }
    };

    let navigation12 = `
    <a href = ${navigationItem.work.link}>${navigationItem.work.label}</a>
    <a href = ${navigationItem.resume.link}>${navigationItem.resume.label}</a>
    <a href = ${navigationItem.contact.link}>${navigationItem.contact.label}</a>
    <a href = ${navigationItem.project.link}>${navigationItem.project.label}</a>
    `;

    document.getElementById("navigation1").innerHTML = navigation12;
    document.getElementById("navigation2").innerHTML = navigation12;

    document.getElementById("navigation3").innerHTML = `
    <li><a href =${navigationItem.work.link}>${navigationItem.work.label}</a></li>
    <li><a href =${navigationItem.resume.link}>${navigationItem.resume.label}</a></li>
    <li><a href =${navigationItem.contact.link}>${navigationItem.contact.label}</a></li>
    <li><a href =${navigationItem.project.link}>${navigationItem.project.label}</a></li>
    `;
}

function loadNavBar() {
    document.getElementById("navBar").innerHTML = `
    <div class="nav">
        <div class="left-content">
            <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
        </div>

        <div class="right-content">
            <div class="dropdown">
                <button class="dropbtn">About</button>

                <div id="navigation1" class="dropdown-content"></div>
            </div>

            <div class="download">
                <a id="navigation-download-button">
                    <div class="download-apps-button">
                        <h2>Download</h2>
                    </div>
                </a>
            </div>
        </div>

        <div class="right-content-mobile">
            <div class="download-button">
                <a id="navigation-download-button-mobile">
                    <img src="img/download-icon.png" alt="download-icon">
                </a>
            </div>

            <div class="dropdown">
                <button onclick="showMenuPopUp()" class="menu-icon"><img src="img/menu-icon.png"
                        alt="menu-icon"></button>

                <div id="navigation2" class="dropdown-content"></div>
            </div>
        </div>
    </div>
    `
}