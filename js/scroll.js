document.addEventListener("DOMContentLoaded", () => {

    const foodContainer = document.querySelector("#food-container");
    const hamburguesa = foodContainer.querySelector(".hamburguesa");
    const papasFrita = foodContainer.querySelector(".papas-frita");
    const lechuga = foodContainer.querySelector(".lechuga");
    const carne = foodContainer.querySelector(".carne");


    const plato = document.querySelector(".plato");

    const scroll = () => {
        window.addEventListener("scroll", function() {
            let value = window.scrollY;
    
            hamburguesa.style.marginTop = value * 0.5 + "px";
        })
    }

    scroll();
})