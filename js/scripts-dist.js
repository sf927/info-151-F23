var mainNav=document.querySelector("#mainNav"),sign=document.querySelector("#sign"),burgerBtn=document.querySelector("#berger-container button"),canYouSeeMainNav=!1;function showNav(){!1===canYouSeeMainNav?(console.log("show menu"),mainNav.classList.add("showMainNav"),sign.classList.add("showSign"),canYouSeeMainNav=!0):(console.log("hide menu"),mainNav.classList.remove("showMainNav"),sign.classList.remove("showSign"),canYouSeeMainNav=!1)}burgerBtn.addEventListener("click",showNav);