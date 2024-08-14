(function(){
    window.addEventListener('load', initialization)

    const windowInnerWidth = window.innerWidth
    let navBoot = document.getElementsByClassName("navbar");

    if(windowInnerWidth <= 768){
        navBoot.classList.contains("show")
    }
    else{
        navBoot.classList.remove("show")
    }
});