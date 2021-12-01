document.addEventListener("DOMContentLoaded", () => {

    const sliderImages = [];

    const setUpSlider = () => {
        sliderImages[0] = '../assets/images/promocion-2.webp';
        sliderImages[1] = '../assets/images/promocion-1.webp';
    }

    let index = 0;
    const timer = 5000;
    const slider = document.querySelector(".slider")

    const changeImages = () => {
        slider.firstElementChild.src = sliderImages[index];
        
        if (index < 1)
            index++;
        else 
            index = 0; 
    }

    setUpSlider();
    setInterval(changeImages, timer);
});