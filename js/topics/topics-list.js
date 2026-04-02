const collectionFilterBox = document.getElementById("filter-collection");
const statusFilterBox = document.getElementById("filter-status");
const collectionFilterClear = document.getElementById("filter-clear-collection");
const statusFilterClear = document.getElementById("filter-clear-status");

function activeFilter(filterBox) {
    filterBox.querySelectorAll(".filter-option").forEach((filter) => {
        filter.addEventListener("click", () => {
            filter.classList.toggle("active");

            let checkActive = filterBox.querySelector(".filter-option.active");
            let filterClear = filterBox.querySelector(".filter-clear");

            if (checkActive !== null) {
                filterClear.classList.add("show");
            } else {
                filterClear.classList.remove("show");
            }
        });
    });
}

activeFilter(collectionFilterBox);

statusFilterBox.querySelectorAll(".filter-option").forEach((filter) => {
    filter.addEventListener("click", () => {
        let filterActive = statusFilterBox.querySelector(".filter-option.active");

        if (filter.classList.contains("active")) {
            filter.classList.remove("active");
            statusFilterClear.classList.remove("show");
        } else {
            if (filterActive !== null) {
                filterActive.classList.remove("active");
            }

            filter.classList.add("active");
            statusFilterClear.classList.add("show");
        }
    });
});

function clearAllFilter(filterBox) {
    let filterClear = filterBox.querySelector(".filter-clear");
    filterClear.addEventListener("click", () => {
        filterBox.querySelectorAll(".filter-option").forEach((filter) => {
            filter.classList.remove("active");
        });
        filterClear.classList.remove("show");
    });
}

clearAllFilter(collectionFilterBox);
clearAllFilter(statusFilterBox);

// Rating Star
// const topicList = document.querySelectorAll(".topic-card");

// topicList.forEach((topic) => {
//     const ratingValue = topic
//         .querySelector(".topic-rating-value")
//         .textContent.split(".")
//         .map(Number);
//     const ratingStarFilled = topic.querySelectorAll(
//         ".topic-rating-star .rating-star.filled .material-symbols-rounded",
//     );

//     if (ratingValue[0] === 5) return;

//     for (let i = 4; i > ratingValue[0]; i--) {
//         ratingStarFilled[i].style.fontSize = "0";
//     }

//     if (ratingValue[1] === 0) {
//         ratingStarFilled[ratingValue[0]].style.fontSize = "0";
//     } else {
//         let position;
//         if (ratingValue[1] < 5) {
//             position = ratingValue[1] ** 2 - ratingValue[1] + 33;
//             ratingStarFilled[ratingValue[0]].style.background =
//                 `linear-gradient(90deg, #ffbb33 ${position}%, rgba(255, 255, 255, 0) ${position}%`;
//         } else if (ratingValue[1] > 5) {
//             position = (ratingValue[1] % 5) ** 2 - (ratingValue[1] % 5) + 55;
//             ratingStarFilled[ratingValue[0]].style.background =
//                 `linear-gradient(90deg, #ffbb33 ${position}%, rgba(255, 255, 255, 0) ${position}%`;
//         } else {
//             ratingStarFilled[ratingValue[0]].style.background =
//                 `linear-gradient(90deg, #ffbb33 50%, rgba(255, 255, 255, 0) 50%`;
//         }

//         ratingStarFilled[ratingValue[0]].style.backgroundClip = "text";
//         ratingStarFilled[ratingValue[0]].style.webkitBackgroundClip = "text";
//         ratingStarFilled[ratingValue[0]].style.color = "transparent";
//         ratingStarFilled[ratingValue[0]].style.webkitTextFillColor = "transparent";
//     }
// });
