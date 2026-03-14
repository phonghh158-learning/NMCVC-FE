let activeColor = new Map([
    ["#ffb3b3", false],
    ["#ffd1a9", false],
    ["#fff2b3", false],
    ["#c8f2c2", false],
    ["#bbdcff", false],
    ["#cfc8ff", false],
    ["#e6c6ff", false],
]);

// Kiểm tra xem có collection filter nào active hay không?
function checkActiveCollectionFilter() {
    const activeCollection = document.querySelector(".collection-option.active");
    return activeCollection !== null;
}

const collectionFilters = document.querySelectorAll("#filter-collection .collection-option");
function activeCollectionFilter(element, activeColor) {
    element.addEventListener("click", () => {
        element.classList.toggle("active");

        if (checkActiveCollectionFilter()) {
            document.getElementById("filter-clear").classList.add("show");
        } else {
            document.getElementById("filter-clear").classList.remove("show");
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
        console.log(activeColor);
    });
}

collectionFilters.forEach((element) => {
    activeCollectionFilter(element, activeColor);
});

document.getElementById("filter-clear").addEventListener("click", () => {
    const activeCollections = document.querySelectorAll(".collection-option.active");

    activeCollections.forEach((element) => {
        element.classList.remove("active");
        element.style.backgroundColor = "transparent";

        element.dataset.originalColor = "";
    });

    for (let [color, value] of activeColor) {
        activeColor.set(color, false);
    }

    document.getElementById("filter-clear").classList.remove("show");
});

// Rating Star
const topicList = document.querySelectorAll(".topic-card");

topicList.forEach((topic) => {
    const ratingValue = topic
        .querySelector(".topic-rating-value")
        .textContent.split(".")
        .map(Number);
    const ratingStarFilled = topic.querySelectorAll(
        ".topic-rating-star .rating-star.filled .material-symbols-rounded",
    );

    if (ratingValue[0] === 5) return;

    for (let i = 4; i > ratingValue[0]; i--) {
        ratingStarFilled[i].style.fontSize = "0";
    }

    if (ratingValue[1] === 0) {
        ratingStarFilled[ratingValue[0]].style.fontSize = "0";
    } else {
        let position;
        if (ratingValue[1] < 5) {
            position = ratingValue[1] ** 2 - ratingValue[1] + 33;
            ratingStarFilled[ratingValue[0]].style.background =
                `linear-gradient(90deg, #ffbb33 ${position}%, rgba(255, 255, 255, 0) ${position}%`;
        } else if (ratingValue[1] > 5) {
            position = (ratingValue[1] % 5) ** 2 - (ratingValue[1] % 5) + 55;
            ratingStarFilled[ratingValue[0]].style.background =
                `linear-gradient(90deg, #ffbb33 ${position}%, rgba(255, 255, 255, 0) ${position}%`;
        } else {
            ratingStarFilled[ratingValue[0]].style.background =
                `linear-gradient(90deg, #ffbb33 50%, rgba(255, 255, 255, 0) 50%`;
        }

        ratingStarFilled[ratingValue[0]].style.backgroundClip = "text";
        ratingStarFilled[ratingValue[0]].style.webkitBackgroundClip = "text";
        ratingStarFilled[ratingValue[0]].style.color = "transparent";
        ratingStarFilled[ratingValue[0]].style.webkitTextFillColor = "transparent";
    }
});
