// set value of variables in view and initialiseView
function initialiseIndex() {

    document.getElementById("navigation-download-button").href = dineroDownloadLink;
    document.getElementById("navigation-download-button-mobile").href = dineroDownloadLink;

    loadServiceCards();
    loadProducts();

    VanillaTilt.init(document.querySelectorAll(".product-card, .card, .top-section-image"), {
        max: 7,
        speed: 1
    });
}

function loadServiceCards() {

    let cards = [
        {
            emoji: "✍🏻",
            title: "Design",
            subTitle: "Create digital products with unique ideas",
            projectCount: "16 PROJECTS",
            detailLink: "manatwork.html"
        },

        {
            emoji: "📱",
            title: "App-Dev",
            subTitle: "I develop iOS apps with smooth UI",
            projectCount: "5 PROJECTS",
            detailLink: "manatwork.html"
        },

        {
            emoji: "🎯",
            title: "Web Dev",
            subTitle: "I also tried my hands in web development",
            projectCount: "3 PROJECTS",
            detailLink: "manatwork.html"
        },
    ];

    for (let i = 0; i < cards.length; i++) {
        let data = cards[i];

        document.getElementById("cards").innerHTML += `
        <a id="service-card0" href="${data.detailLink}" style="text-decoration: none;">
            <div class="card">
                <div class="card-content">
                    <h1 id="service-card0-title">${data.title}</h1>
                    <h2 id="service-card0-subTitle">${data.subTitle}</h2>
                    <p id="service-card0-projectCount"${data.projectCount}></p>
                </div>
                <div class="card-emoji">
                    <h3 id="service-card0-emoji">${data.emoji}</h3>
                </div>
            </div>
        </a>
        `;
    }
}

function loadProducts() {

    let cards = [
        new Project(
            "product-card0",
            "SUBSCRIPTION MANAGER",
            "Dinero",
            "img/dinero-logo-project-card.png",
            "Under #100 top free apps in finance*",
            "https://apps.apple.com/us/app/dinero-subscription-manager/id1545370811"
        ),

        new Project(
            "product-card1",
            "GOAL TRACKER",
            "Gosio",
            "img/gosio-logo-project-card.png",
            "Under #500 top free apps in finance*",
            "https://apps.apple.com/in/app/gosio/id1555987291/"
        ),

        new Project(
            "product-card2",
            "MORE PROJECTS",
            "Github",
            "",
            "For more open source projects, have a look at my resume project section.",
            "resume.html#more-projects"
        )
    ];

    for (let i = 0; i < cards.length; i++) {

        let data = cards[i];

        document.getElementById(data.id).href = data.downloadLink;

        document.getElementById(data.id).innerHTML += `
        <div class="product-card">
            <h1>${data.category}</h1>
            <h2>${data.name}</h2>
            <img src = ${data.iconLink}>
            <h3 id="product-card0-details">${data.details}</h3>
        </div>
        `;
    }
}

// model
function Project(id, category, name, iconLink, details, downloadLink) {
    var project = {};

    project.id = id;
    project.category = category;
    project.name = name;
    project.iconLink = iconLink;
    project.details = details;
    project.downloadLink = downloadLink;

    return project;

}