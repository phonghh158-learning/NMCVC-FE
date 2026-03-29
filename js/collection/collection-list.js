const rainbowColor = [
    "#ffb3b3",
    "#ffd1a9",
    "#fff2b3",
    "#c8f2c2",
    "#bbdcff",
    "#cfc8ff",
    "#e6c6ff",
];

const collectionList = document.querySelector(".collection-list");
const collectionItems = collectionList.querySelectorAll(".collection-item");

let arrow = document.getElementById("arrow");
let position = 0;

for (let i = 0; i < collectionItems.length; i++) {
    collectionItems[i].style.backgroundColor = rainbowColor[i % rainbowColor.length];
    position += Math.floor(collectionItems[i].clientHeight / 2);
    const arrowPosition = position;
    collectionItems[i].addEventListener("click", () => {
        let currentActiveCollection = document.querySelector(
            ".collection-list .collection-item.active",
        );
        currentActiveCollection.classList.remove("active");

        collectionItems[i].classList.add("active");

        arrow.style.top = arrowPosition + "px";
    });

    position += Math.ceil(collectionItems[i].clientHeight / 2) + 24;
}

arrow.style.top = Math.floor(collectionItems[0].clientHeight / 2) + "px";
