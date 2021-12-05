document.addEventListener("DOMContentLoaded", () => {

    const foodContainer = document.querySelector("#food-container");
    const hamburguesa = foodContainer.querySelector(".hamburguesa");
    const plato = foodContainer.querySelector(".plato");

    const scroll = () => {
        
        document.addEventListener("scroll", function() {
            let value = window.scrollY;
            
            if (value <= 550) {
                hamburguesa.style.marginTop = value * 0.6 + "px";
                plato.style.marginTop = value * -0.5 + "px";
            }
        })
    }

    scroll();
})