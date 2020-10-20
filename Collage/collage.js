//images and text to create the html from
const Images = [{"image" : "python.png", "text" : "I love coding in Python!"}, 
{"image" : "unity.jpg", "text" : "I use Unity for game development."}, 
{"image" : "spellbreak.jpg", "text" : "Spellbreak is another one of my favorite games to play with friends."},
{"image" : "nemo.jpg", "text" : "My dog - Nemo"},
{"image" : "track.png", "text" : "I run for Track."},
{"image" : "pixelArt.png", "text" : "I like to draw pixel art."},
{"image" : "cyberPatriot.jpg", "text" : "I am a member of the CyberPatriot (cybersecurity) club."},
{"image" : "discord.png", "text" : "I enjoy making bots for Discord, which I use to communicate with my friends."},
{"image" : "nix.png", "text" : "I main Nix in Brawlhalla."},
{"image" : "theOffice.jpg", "text" : "The Office is one of my favorite shows."},
{"image" : "NF.png", "text" : "NF is one of my favorite rappers."},
{"image" : "eiffelTower.jpg", "text" : "I loved Paris and had a great time there."},
{"image" : "dannyGonzalez.jpg", "text" : "Danny Gonzalez is my favorite commentary youtuber."},
{"image" : "hiking.jpg", "text" : "I enjoy hiking around Brea (photo taken on trail)."},
{"image" : "minecraft.jpg", "text" : "I love playing Minecraft, I have played it with my friends for years."}];

//keep currentHighestZIndex for draggable elements
var currentHighestZIndex = 105;

function placeImagesRandomly(){
    var container = document.getElementsByClassName("absolute")[0];

    var containerHTML = "";
    for (var i = 0; i < Images.length; i++){

        //randomly place pictures and random zIndex
        var randomLeft = Math.floor(Math.random() * 68) + 1;
        var randomTop = Math.floor(Math.random() * 90) + 1;
        var zIndex = Math.floor(Math.random() * 100) + 1;

        //create new html for the images and text and add that to the container
        newHTML = 
        `<div class="randomImage" style="left: ${randomLeft}vw; top: ${randomTop}vh; z-index: ${zIndex};" draggable="true" data-item="${i}">
                <p>${Images[i]["text"]}</p>
                <img src="${Images[i]["image"]}">
            </div>`
        
        containerHTML += newHTML;
    }

    container.innerHTML += containerHTML;
}

//drag images
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
}

function drag_over(event) {
    event.preventDefault();
    return false;
}

function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementsByClassName("randomImage");

    dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + "px";
    dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + "px";

    currentHighestZIndex += 1;
    dm[parseInt(offset[2])].style.zIndex = currentHighestZIndex;

    event.preventDefault();
    return false;
}