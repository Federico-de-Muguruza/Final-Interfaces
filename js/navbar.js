document.addEventListener("DOMContentLoaded", () => {

    mobileMenu = document.querySelector("#mobileMenu");
    document.querySelector("#dropdown").addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
});