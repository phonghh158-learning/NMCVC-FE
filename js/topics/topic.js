document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("comment-menu-btn")) {
            const dropdownId = event.target.getAttribute("data-target");
            const dropdown = document.getElementById(dropdownId);
            const isCurrentlyShown = dropdown.classList.contains("show");

            document
                .querySelectorAll(".comment-dropdown.show")
                .forEach((el) => el.classList.remove("show"));

            if (!isCurrentlyShown) {
                dropdown.classList.add("show");
            }
            return;
        }

        if (!event.target.closest(".comment-menu-wrapper")) {
            document
                .querySelectorAll(".comment-dropdown.show")
                .forEach((el) => el.classList.remove("show"));
        }

        if (event.target.classList.contains("page-btn")) {
            const paginationContainer = event.target.closest(".comment-pagination");
            if (paginationContainer) {
                paginationContainer
                    .querySelectorAll(".page-btn")
                    .forEach((btn) => btn.classList.remove("active"));
                event.target.classList.add("active");
            }
        }
    });
});
