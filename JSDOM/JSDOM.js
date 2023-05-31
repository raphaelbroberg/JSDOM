//gör att "change image" fungerar
function rndm_itm(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

colours = ["pink", "cyan", "purple", "orange", "black", "blue"];

//tar bilder från nätet
images = ["https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg", "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80cloudfront.net/medialibrary/10190/conversions/GettyImages-499689946-thumb.jpg", "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"];

//skriver good vibes när "good vibes" är tryckt
function good_vibes(){
    document.getElementById("good_vibes").innerHTML = "Good Vibes";
}

//byter bakgrundsfärg mha colours arrayen
function change_back(){
    document.body.style.backgroundColor = `${rndm_itm(colours)}`;
}

//visar bild
function show_picture(){
    document.getElementById("manage_img").style.display = "block";
}

//byter bild mha rndm_itm funktionen
function change_img(){
    document.getElementById("manage_img").src = rndm_itm(images);
}

//gömmer bilden
function hide_img(){
    document.getElementById("manage_img").style.display = "none";
}

//visar datum och tid
function current_time(){
    document.getElementById("cur_time").innerHTML = Date();
} 

// Sätter header-stilen och innehållet
function header_set() {
    const elements = document.getElementsByClassName("top-div");

    // Loopar igenom alla element med klassen "top-div"
    for (let i = 0; i < elements.length; i++) {
        // Sätter CSS-stilen för att centrera innehållet
        elements[i].style.justifyContent = "center";
        elements[i].style.alignItems = "center";
        elements[i].style.textAlign = "center";
        elements[i].style.background = "beige";
        elements[i].style.margin = "50px";
    }

    // Sätter innerHTML för elementet med ID "good_vibes" till "Good vibes only!"
    document.getElementById("good_vibes").innerHTML = "Bara bra vibbar!";

    // Sätter src-attributet för elementet med ID "manage_img" till ett slumpmässigt objekt från arrayen "images"
    document.getElementById("manage_img").src = rndm_itm(images);

    // Sätter innerHTML för elementet med ID "cur_time" till aktuell datum och tid
    document.getElementById("cur_time").innerHTML = Date();

    // Sätter display- och border-stilen för elementet med ID "manage_img"
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "4px solid tan";
}

// Tar bort header-stilen och innehållet
function header_remove() {
    const elements = document.getElementsByClassName("top-div");

    // Loopar igenom alla element med klassen "top-div"
    for (let i = 0; i < elements.length; i++) {
        // Återställer CSS-stilen till standardvärden
        elements[i].style.justifyContent = "left";
        elements[i].style.textAlign = "left";
        elements[i].style.alignItems = "flex-start";
        elements[i].style.margin = "0px";
        elements[i].style.background = "none";
    }

    // Sätter src-attributet för elementet med ID "manage_img" till ett slumpmässigt objekt från arrayen "images"
    document.getElementById("manage_img").src = rndm_itm(images);

    // Tömmer innerHTML för elementet med ID "good_vibes"
    document.getElementById("good_vibes").innerHTML = "";

    // Sätter display- och border-stilen för elementet med ID "manage_img"
    document.getElementById("manage_img").style.display = "none";
    document.getElementById("manage_img").style.border = "none";

    // Tömmer innerHTML för elementet med ID "cur_time"
    document.getElementById("cur_time").innerHTML = "";
}

// Visar headern med stil och innehåll
function header() {
    const elements = document.getElementsByClassName("top-div");

    // Loopar igenom alla element med klassen "top-div"
    for (let i = 0; i < elements.length; i++) {
        // Sätter CSS-stilen för att centrera innehållet
        elements[i].style.justifyContent = "center";
        elements[i].style.alignItems = "center";
        elements[i].style.textAlign = "center";
        elements[i].style.background = "beige";
        elements[i].style.margin = "50px";
    }

    // Sätter innerHTML för elementet med ID "good_vibes" till "Bara bra vibbar!"
    document.getElementById("good_vibes").innerHTML = "Bara bra vibbar!";

    // Sätter src-attributet för elementet med ID "manage_img" till ett slumpmässigt objekt från arrayen "images"
    document.getElementById("manage_img").src = rndm_itm(images);

    // Sätter innerHTML för elementet med ID "cur_time" till aktuell datum och tid
    document.getElementById("cur_time").innerHTML = Date();

    // Sätter display- och border-stilen för elementet med ID "manage_img"
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "4px solid tan";
}