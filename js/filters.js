document.addEventListener("DOMContentLoaded", () => {

    const path = 'assets/images';
    const products = [
        {
            'title': 'MEGA NOT BURGUER DELUXE',
            'description': 'Con queso, carne y mostaza',
            'image': `${path}/hamburguesa.png`
        },
        {
            'title': 'MEGA NOT BURGER CLASSIC',
            'description': 'Con pollo, tomate y lechuga',
            'image': `${path}/hamburguesa-pollo.png`
        },
        {
            'title': 'HELADO DE FRUTILLA',
            'description': 'Con cono de azúcar',
            'image': `${path}/helado.png`
        },
        {
            'title': 'ENSALADA DE ATÚN',
            'description': 'Con huevo de verduras y vegetales de hoja',
            'image': `${path}/ensalada.png`
        },
        {
            'title': 'CAJITA',
            'description': 'Con juguete sorpresa, papas fritas y hamburguesa',
            'image': `${path}/cajita.png`
        },
        {
            'title': 'CAFÉ EXPRESSO',
            'description': '',
            'image': `${path}/cafe.png`
        },
    ]

    filterMenu = document.querySelector("#filters-container-options");
    filterIcon = document.querySelector("#filter-icon");
    const changeFilterIcon = () => {

        filterMenu.classList.toggle("hidden");

        if (filterIcon.classList.contains("fa-eye")) {
            filterIcon.classList.remove("fa-eye");
            filterIcon.classList.add("fa-eye-slash");
        } else {
            filterIcon.classList.add("fa-eye");
            filterIcon.classList.remove("fa-eye-slash");
        }
    }
    
    const productsImage = document.querySelectorAll(".product");
    const productsDescription = document.querySelectorAll(".product-description");
    const changeProductsInformation = (product, allProducts) => {
        if (allProducts) {
            for (let i = 0; i < productsImage.length; i++) {
                productsImage[i].src = product[i].image;
                productsDescription[i].firstElementChild.innerHTML = products[i].title;
                productsDescription[i].lastElementChild.innerHTML = products[i].description;
            }  
        } else {
            for (let i = 0; i < productsImage.length; i++) {
                productsImage[i].src = product.image;
                productsDescription[i].firstElementChild.innerHTML = product.title;
                productsDescription[i].lastElementChild.innerHTML = product.description;
            }  
        }
    }

    lastBtn = document.querySelector("#all-products");
    const changeProducts = (e) => {
        if (e.target.id === "all-products") {
            changeProductsInformation(products, true);
            changeStyles(e);
        }

        if (e.target.id === "meat-hamburguer") {
            changeProductsInformation(products[0], false);
             changeStyles(e);
        } 

        if (e.target.id === "chicken-hamburguer") {
            changeProductsInformation(products[1], false);
            changeStyles(e);
        }

        if (e.target.id === "ice-cream") {
            changeProductsInformation(products[2], false);
            changeStyles(e);
        }

        if (e.target.id === "salad") {
            changeProductsInformation(products[3], false);
            changeStyles(e);
        }

        if (e.target.id === "box") {
            changeProductsInformation(products[4], false);
            changeStyles(e);
        }

        if (e.target.id === "coffe") {
            changeProductsInformation(products[5], false);
            changeStyles(e);
        }
    }

    const changeStyles = (e) => {
        lastBtn.classList.remove("active");
        e.target.classList.add("active");
        lastBtn = e.target;
    }

    document.querySelector("#filter").addEventListener("click", changeFilterIcon);
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", changeProducts);
    });
});