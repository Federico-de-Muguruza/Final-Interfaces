document.addEventListener("DOMContentLoaded", () => {

    const navbar = new Vue({
        el: '#navbar',
        data: {
            logo: 'https://www.mostazaweb.com.ar/wp-content/uploads/2020/07/Logo-nuevo-150x150.png',
            inicio: 'Inicio',
            menu: 'Menú',
            promociones: 'Promociones'
        }
    })
});
