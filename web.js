let card=document.querySelector(".trend");
let card2=document.getElementById("trendSec");

let about=document.querySelector(".about");

let blog=document.querySelector(".trends");

let mainPage=document.querySelector(".main");

let contact=document.querySelector(".contact");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="rgb(2,173,173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function Shops(){
    mainPage.style.display="none";
    blog.style.display="none";
    card.style.display="block";
    card2.style.display="block";
    about.style.display="none";
    contact.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(2,173,173)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function Blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";


    document.getElementById("blog").style.color="rgb(2,173,173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";

}


function Abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";
    contact.style.display="none";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(2,173,173)";

}

function Contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";

    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="rgb(2,173,173)";
    document.getElementById("about").style.color="black";

}

// cart---------------
function show(img){
    let newImg=document.getElementById("newImg");
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";

    document.querySelector(".cart").style.display="flex";
}

function addtoCart(){
    alert("Added to Cart");
    location.reload(homes);
}