document.addEventListener("DOMContentLoaded", () => {

    const setUpSlider = () => {
        const path = 'assets/images';
    
        const promotions = [
            {
                description: 'MEGA NOT BURGER CLASSIC + PAPAS FRITAS + COCA COLA',
                image: `${path}/promocion-2.webp`
            },
            {
                description: 'MEGA NOT BURGER DELUXE + PAPAS FRITAS',
                image: `${path}/promocion-1.webp` 
            }
        ]
        return promotions;
    }

    const setAnimations = (children) => {
        children.forEach(element => {
            element.classList.remove("slideout");
            element.classList.add("slidein");
            setTimeout(() => {
                element.classList.remove("slidein");
                element.classList.add("slideout");
            }, 5000)
        });
    }

    const promotions = setUpSlider();

    let index = 0;
    const sliderImg = document.querySelector("#slider-img")
    const description = document.querySelector("#description");
    const children = [].slice.call(document.querySelector("#slider").children);

    setAnimations(children);

    const changeImages = () => {
        sliderImg.src = promotions[index].image;
        description.innerHTML = promotions[index].description;

        setAnimations(children);
        
        if (index < 1)
            index++;
        else 
            index = 0; 
    }

    const timer = 6000;
    setInterval(changeImages, timer);
});