let hamburgerBtn, hiddenMenu, prevBtn, nextBtn, dots, slides;

const handleClick = () => {
    if(hiddenMenu.classList.contains("hiddenMenu")){
        hiddenMenu.classList.remove("hiddenMenu")
    }else{
        hiddenMenu.classList.add("hiddenMenu")
    }

}

const slide = () => {
    dots.map(dot => {
        if(dot.id){
            dot.id = "";
        }else{
            dot.id = "dot-active";
        }
    })

    slides.map(slide => {
        if(slide.classList.contains("slide-hidden")){
            slide.classList.remove("slide-hidden");
        }else{
            slide.classList.add("slide-hidden");
        }
    })
}

const handleLoad = () => {
    hamburgerBtn = document.querySelector(".hamburguerBtn")
    hiddenMenu = document.querySelector("header > nav")
    hamburgerBtn.addEventListener("click", handleClick)

    btns = [...document.querySelectorAll(".slider-arrow")];
    dots = [...document.querySelectorAll(".dot-slider")];
    slides = [...document.querySelectorAll(".main_photo > div")];

    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            slide();
        })
    })
}

window.addEventListener("load", handleLoad)