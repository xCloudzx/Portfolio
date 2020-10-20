class Project{
    constructor(projectName, dateCreated, imagePath, pagePath, description){
        this.projectName = projectName;
        this.dateCreated = dateCreated;
        this.imagePath = imagePath;
        this.pagePath = pagePath;
        this.description = description; 
    }

    createHTML(){
        return `
        <div>
            <h3>${this.projectName}</h3>
            <h4>${this.dateCreated}</h4>

            <div>
                <a href="${this.pagePath}" target="_blank">
                    <img src="${this.imagePath}">

                    <p>${this.description}</p>
                </a>
            </div>
        </div>`;
    }
}

const projects = [
    new Project("Coronavirus Misinformation", "8/17/20", "CoronavirusMisinformation/coronavirusMisinformation.jpg", "CoronavirusMisinformation/coronavirusMisinformation.html", "A stylized webpage describing how social media is passing misinformation about the Coronavirus."),
    new Project("Tech Page", "8/20/20", "TechPage/techPage.jpg", "TechPage/starlink.html", "Multiple paragraphs of information about Starlink, a new technology."),
    new Project("Business Card", "8/28/20", "BusinessCard/businessCard.jpg", "BusinessCard/businessCard.html", "My business card."),
    new Project("Collage", "9/10/20", "Collage/collage.jpg", "Collage/collage.html", "A collage of pictures related to me."),
    new Project("GITAGear", "9/14/20", "GITAGear/GITAGear.jpg", "GITAGear/GITAGear.html", "A shop with manager statistics for clothing and other items related to GITA."),
    new Project("Recipe", "9/21/20", "Recipe/recipe1.jpg", "Recipe/recipe.html", "A recipe for a meal that lists ingredients, instructions, and can be printed."),
    new Project("Dice", "10/5/20", "Dice/dice.jpg", "Dice/dice.html", "Roll dice and store total rolls for each face and total sums for each sum."),
    new Project("Craps Game", "10/8/20", "CrapsGame/crapsGame.jpg", "CrapsGame/crapsGame.html", "Play a game of Craps.")
];

function displayProjects(){
    projectsContainer = document.getElementById("projectsContainer");

    let projectsHTML = projects.map(project => project.createHTML()).join("");

    projectsContainer.innerHTML = projectsHTML;
}