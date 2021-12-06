document.addEventListener("DOMContentLoaded", () => {

    const mobileMenu = document.querySelector("#mobileMenu");
    const dropdown = document.querySelector("#dropdown");

    dropdown.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        if (dropdown.classList.contains("fa-bars")) {
            dropdown.classList.add("fa-window-close");
            dropdown.classList.remove("fa-bars");
        } else {
            dropdown.classList.remove("fa-window-close");
            dropdown.classList.add("fa-bars");
        }

    });

    document.addEventListener("click", (e) => {

        if (e.target != mobileMenu && e.target != dropdown) {
            mobileMenu.classList.add("hidden");
            dropdown.classList.remove("fa-window-close");
            dropdown.classList.add("fa-bars");
        }

    });

});