document.addEventListener("DOMContentLoaded", () => {

    const setUpSlider = () => {
        const path = 'assets/images';
    
        const promotions = [
            {
                description: 'x2 MEGA NOT BURGER CLASSIC + PAPAS FRITAS + ENSALADA',
                images: [
                    {
                        image1: `${path}/hamburguesa-pollo.png` 
                    },
                    {
                        image2: `${path}/papas-fritas.png` 
                    }
                ] 
            },
            {
                description: 'MEGA NOT BURGER DELUXE + PAPAS FRITAS',
                images: [
                    {
                        image1: `${path}/hamburguesa.png` 
                    },
                    {
                        image2: `${path}/ensalada.png` 
                    },
                ] 
            }
        ]
        return promotions;
    }

    const setAnimations = (children, papasFritas, ensalada) => {
        // Por cada elemento del slider le hago animaciones de entrada y salida
        children.forEach(element => {
            element.classList.remove("slideout");
            element.classList.add("slidein");
            setTimeout(() => {
                element.classList.remove("slidein");
                element.classList.add("slideout");
            }, 8000)
        });


        // Por cada papa frita le remuevo la animación y se la pongo de nuevo por cada entrada
        papasFritas.forEach(papa => {
            papa.classList.remove("sizeAnimation");
            void papa.offsetWidth;
            papa.classList.add("sizeAnimation");
        })

        if (ensalada.classList.contains("hidden")) 
            ensalada.classList.remove("hidden");
        else 
            ensalada.classList.add("hidden");
    }

    const promotions = setUpSlider();

    let index = 0;
    const slider = document.querySelector("#slider-moving");
    const description = slider.querySelector("#description");
    // Lista de hamburguesas
    const hamburguesas = slider.querySelectorAll(".hamburguesa");
    const ensalada = slider.querySelector("#ensalada");
    // children son todos los elementos del slider
    const children = [].slice.call(slider.children);
    const papasFritas = slider.querySelectorAll(".papas-fritas");

    setAnimations(children, papasFritas, ensalada);

    const changeImages = () => { 
        // Por cada hamburguesa le agrego su imagen
        hamburguesas.forEach(hamburguesa => {
            hamburguesa.src = promotions[index].images[0].image1;
            hamburguesa.src = promotions[index].images[0].image1;
        })
        description.innerHTML = promotions[index].description;

        setAnimations(children, papasFritas, ensalada);

        if (index < 1)
            index++;
        else 
            index = 0; 
    }

    const timer = 10000;
    setInterval(changeImages, timer);
});