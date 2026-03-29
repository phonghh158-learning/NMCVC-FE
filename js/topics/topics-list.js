let activeColor = new Map([
    ["#ffb3b3", false],
    ["#ffd1a9", false],
    ["#fff2b3", false],
    ["#c8f2c2", false],
    ["#bbdcff", false],
    ["#cfc8ff", false],
    ["#e6c6ff", false],
]);

const collectionFilters = document.querySelectorAll("#filter-collection .collection-option");
const statusFilters = document.querySelectorAll("#filter-status .status-option");
const collectionFilterClear = document.getElementById("filter-clear-collection");
const statusFilterClear = document.getElementById("filter-clear-status");

function activeFilter(element, activeColor, filterClear, checkActive) {
    element.addEventListener("click", () => {
        element.classList.toggle("active");

        if (checkActive !== null) {
            filterClear.classList.add("show");
        } else {
            filterClear.classList.remove("show");
        }

        if (!element.classList.contains("active")) {
            const currentColor = element.dataset.originalColor;

            activeColor.set(currentColor, false);

            element.style.backgroundColor = "transparent";
            element.dataset.originalColor = "";
        } else {
            for (let [color, value] of activeColor) {
                if (!value) {
                    element.style.backgroundColor = color;
                    element.dataset.originalColor = color;
                    activeColor.set(color, true);
                    break;
                }
            }
        }
    });
}

if (document.querySelector(".collection-option.active") !== null) {
    collectionFilterClear.classList.add("show");
} else {
    collectionFilterClear.classList.remove("show");
}

if (document.querySelector(".status-option.active") !== null) {
    statusFilterClear.classList.add("show");
} else {
    statusFilterClear.classList.remove("show");
}

collectionFilters.forEach((element) => {
    let checkActive = document.querySelector(".collection-option.active") !== null;
    activeFilter(element, activeColor, collectionFilterClear, checkActive);
});

statusFilters.forEach((element) => {
    let checkActive = document.querySelector(".status-option.active") !== null;
    activeFilter(element, activeColor, statusFilterClear, checkActive);
});

collectionFilterClear.addEventListener("click", () => {
    const activeCollections = document.querySelectorAll(".collection-option.active");

    activeCollections.forEach((element) => {
        element.classList.remove("active");
        element.style.backgroundColor = "transparent";

        element.dataset.originalColor = "";
    });

    for (let [color, value] of activeColor) {
        activeColor.set(color, false);
    }

    collectionFilterClear.classList.remove("show");
});

statusFilterClear.addEventListener("click", () => {
    const activeStatuses = document.querySelectorAll(".status-option.active");

    activeStatuses.forEach((element) => {
        element.classList.remove("active");
        element.style.backgroundColor = "transparent";

        element.dataset.originalColor = "";
    });

    for (let [color, value] of activeColor) {
        activeColor.set(color, false);
    }

    statusFilterClear.classList.remove("show");
});

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
