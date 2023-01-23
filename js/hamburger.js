window.onload = function(){

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".sliding-menu");
    const black = document.querySelector(".blackblackblackeverythingisblack");
    const aboutbutton = document.querySelector(".about");
    const aboutmenu = document.querySelector(".sliding-about-section");
    const faqbutton = document.querySelector(".faq");
    const faqmenu = document.querySelector(".sliding-faq-section");
    const mapbutton = document.querySelector(".map");
    const mapmenu = document.querySelector(".sliding-map-section");

    menu_btn.addEventListener("click", function(){
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        black.classList.toggle("is-active");

        aboutmenu.classList.remove("is-active");
        aboutbutton.classList.remove("is-active");
        faqbutton.classList.remove("is-active");
        faqmenu.classList.remove("is-active");
        mapbutton.classList.remove("is-active");
        mapmenu.classList.remove("is-active");
        

    })
    aboutbutton.addEventListener("click", function(){
        aboutmenu.classList.toggle("is-active");
        aboutbutton.classList.toggle("is-active");

        faqbutton.classList.remove("is-active");
        faqmenu.classList.remove("is-active");
        mapbutton.classList.remove("is-active");
        mapmenu.classList.remove("is-active");
    })

    faqbutton.addEventListener("click", function(){
        faqbutton.classList.toggle("is-active");
        faqmenu.classList.toggle("is-active");

        aboutbutton.classList.remove("is-active");
        aboutmenu.classList.remove("is-active");
        mapbutton.classList.remove("is-active");
        mapmenu.classList.remove("is-active");
    })

    mapbutton.addEventListener("click", function(){
        mapbutton.classList.toggle("is-active");
        mapmenu.classList.toggle("is-active");

        aboutbutton.classList.remove("is-active");
        aboutmenu.classList.remove("is-active");
        faqbutton.classList.remove("is-active");
        faqmenu.classList.remove("is-active");
    })}
    
    
