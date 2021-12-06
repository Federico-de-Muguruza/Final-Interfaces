document.addEventListener("DOMContentLoaded", () => {

    filterMenu = document.querySelector("#filters-container-options");
    filterIcon = document.querySelector("#filter-icon");
    document.querySelector("#filter").addEventListener("click", () => {
        filterMenu.classList.toggle("hidden");

        if (filterIcon.classList.contains("fa-eye")) {
            filterIcon.classList.remove("fa-eye");
            filterIcon.classList.add("fa-eye-slash");
        } else {
            filterIcon.classList.add("fa-eye");
            filterIcon.classList.remove("fa-eye-slash");
        }
    });
});