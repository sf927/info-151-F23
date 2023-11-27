//alert("Hello Class")

var mainNav = document.querySelector("#mainNav");

var sign = document.querySelector("#sign");

var burgerBtn = document.querySelector("#berger-container button")

var canYouSeeMainNav = false;

//var sectionTags= document.querySelectorAll("section");



function showNav(){
    //console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        mainNav.classList.add("showMainNav");

        sign.classList.add("showSign");
        canYouSeeMainNav = true;

    }else{
        console.log("hide menu");
        mainNav.classList.remove("showMainNav");
        
        sign.classList.remove("showSign");
        canYouSeeMainNav = false;
        
    }
    
}

burgerBtn.addEventListener("click", showNav);

//showNav();