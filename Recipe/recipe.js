function showPrintPopup(){
    window.open("printRecipe.html", "Print Recipe", "height=500, width=600, left=300, top=150");
}

function previousSlide(){
    let slides = document.getElementsByClassName("slide")

    //find current slide using display style
    let currentSlide = 0;
    for (var i = 0; i < slides.length; i++){
        if (slides[i].style.display == "block"){
            currentSlide = i;
            break;
        }
    }

    //check if at beginning of instructions
    if (currentSlide == 0){
        return;
    }

    //set new styles to display only the next slide
    let previousSlide = currentSlide - 1;

    for (var j = 0; j < slides.length; j++){
        if (j == previousSlide){
            slides[j].style.display = "block";
            continue;
        }
        
        slides[j].style.display = "none";
    }
}

function nextSlide(){
    let slides = document.getElementsByClassName("slide")

    let currentSlide = 0;
    for (var i = 0; i < slides.length; i++){
        if (slides[i].style.display == "block"){
            currentSlide = i;
            break;
        }
    }

    //check if at end of instructions
    if (currentSlide == slides.length - 1){
        return;
    }

    let nextSlide = currentSlide + 1;

    for (var j = 0; j < slides.length; j++){
        if (j == nextSlide){
            slides[j].style.display = "block";
            continue;
        }
        
        slides[j].style.display = "none";
    }
}