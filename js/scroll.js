document.addEventListener("DOMContentLoaded", () => {

    const foodContainer = document.querySelector("#food-container");
    const hamburguesa = foodContainer.querySelector(".hamburguesa");
    // const manos = foodContainer.querySelector(".manos");
    const plato = foodContainer.querySelector(".plato");

    const scroll = () => {
        
        document.addEventListener("scroll", function() {
            let value = window.scrollY;
            
            if (value <= 550) {
                // if (value > 300) {
                    // manos.style.marginTop = value * -0.5 + "px";
                hamburguesa.style.marginTop = value * 0.6 + "px";
                console.log(value * 0.6);
                plato.style.marginTop = value * -0.5 + "px";
                // }
            }
        })
    }

    scroll();
})