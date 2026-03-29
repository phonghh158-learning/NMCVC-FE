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

// Add Content
const collectionData = {
    "Trốn nắng hẹn trăng":
        "Tuyển tập văn xuôi đầu tiên của Nhà, viết về Hyun và Hyun cũng là chàng thơ duy nhất.",
    "Thẩn thẩn thơ thơ": "Tuyển tập thơ của Nhà, vẫn chỉ viết về Hyun và chỉ Hyun.",
    "Người kể chuyện nhà":
        "Tuyển tập được đặt kệ để chiều thói thích sưu tầm đó đây của chủ nhà.",
    "Hyun đã ở đây":
        "Tuyển tập viết về Hyun và thị trấn mà anh sống ở một vũ trụ song song nào đó.",
    "Để em khóc lần nữa khi mùa đông đến": "Tuyển tập về những bài hát mà tớ rất yêu.",
    "Chuyện để dành":
        "Tuyển tập mang tính cá nhân cao – tớ viết vì tớ, vì người tớ yêu thương và cả những ai đọc chữ tớ viết.",
    "Nằm nghe Hyun nói": "Tuyển tập những lời dặn dò hay tâm sự be bé của anh Hyun.",
};

const describeContainer = document.querySelector(".collection-describe");
const topicsContainer = document.querySelector(".collection-topics");

function generateTopicCards(collectionName) {
    let htmlContent = "";
    for (let i = 1; i <= 4; i++) {
        htmlContent += `
            <a class="topic-card" href="#">
                <div class="topic-image">
                    <img src="/images/pic/homepage/topics/topic-1.png" alt="" />
                </div>
                <div class="topic-meta">
                    <span class="topic-collection">${collectionName}</span>
                    <span class="topic-date">12 Th03, 2026</span>
                </div>
                <span class="topic-title">Bài viết số ${i}</span>
                <span class="topic-summary">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id.
                </span>
            </a>
        `;
    }
    return htmlContent;
}

function renderCollectionContent(item) {
    const collectionName = item.textContent.trim();
    const description = collectionData[collectionName] || "";

    describeContainer.innerHTML = `<p class="collection-describe-text">${description}</p>`;
    topicsContainer.innerHTML = generateTopicCards(collectionName);
}

for (let i = 0; i < collectionItems.length; i++) {
    collectionItems[i].addEventListener("click", () => {
        renderCollectionContent(collectionItems[i]);
    });
}

if (collectionItems.length > 0) {
    renderCollectionContent(collectionItems[0]);
}
