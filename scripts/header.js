(function() {
    console.log("Hola, iniciando script del header");
    //-------------------------------------------------------
    let navList = document.querySelector(".hamburger-list");
    let hamburger = document.getElementById("hamburger");
    let items = navList.children[0].children;
    let header = document.getElementsByTagName("header")[0];
    console.log(items);
    
    let showResponsiveNav = () => {
        if(navList.style.display){
            navList.classList.value = "hamburger-list fade-out";
            setTimeout(() => {
                navList.style.display = "";        
            }, 900);
        } else {
            navList.classList.value = "hamburger-list fade-in";
            navList.style.display = "block";
        }
    }

    
    hamburger.addEventListener("click", showResponsiveNav);
    // A cada opción del menú de navegación le asignaremos un eventlistener
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        console.log(item);
        item.addEventListener("click", showResponsiveNav);
    }

    window.addEventListener("scroll", ()=>{
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
            header.style["height"] = "5vw";
            navList.style["top"] = "80px";
            console.log("Así es")
        } else {
            header.style["height"] = "20vw";
            navList.style["top"] = "19vw";
            console.log("No es");
        }
    })
    console.log("Hola, Finalizando script del header");
})()