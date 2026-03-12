function setHomepageLinkActive(element) {
    const homepageLinkActive = document.querySelector(".homepage-nav .menu a.active");
    homepageLinkActive.classList.remove("active");

    element.classList.add("active");

    const homepageNavigation = document.getElementById("homepage-navigation");
    if (element.getAttribute("href") !== "#home") {
        homepageNavigation.style.bottom = "48px";
    } else {
        homepageNavigation.style.bottom = "-72px";
    }
}

const homepageMenuLinks = document.querySelectorAll(".homepage-nav .menu a");

homepageMenuLinks[0].classList.add("active");

homepageMenuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
        });

        setHomepageLinkActive(link);
    });
});

document.getElementById("go-to-about-button").addEventListener("click", () => {
    setHomepageLinkActive(homepageMenuLinks[1]);
});

// Tính năng Scroll Spy (Cập nhật menu khi cuộn trang)
const wrapper = document.querySelector(".wrapper");
const sections = document.querySelectorAll("main section");

wrapper.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            currentSectionId = section.getAttribute("id");
        }
    });

    if (currentSectionId) {
        const activeLink = document.querySelector(
            `.homepage-nav .menu a[href="#${currentSectionId}"]`,
        );

        const currentActive = document.querySelector(".homepage-nav .menu a.active");
        if (activeLink && activeLink !== currentActive) {
            setHomepageLinkActive(activeLink);
        }
    }
});

const collCards = document.querySelectorAll(".collection-card");
const btnP = document.getElementById("prev-card");
const btnN = document.getElementById("next-card");
let curIdx = 0;

if (collCards.length > 0) collCards[0].classList.add("active");

function moveSlide(n) {
    collCards[curIdx].classList.remove("active");
    curIdx = (curIdx + n + collCards.length) % collCards.length;
    collCards[curIdx].classList.add("active");
}

if (btnP && btnN) {
    btnP.onclick = () => moveSlide(-1);
    btnN.onclick = () => moveSlide(1);
}

// Slider cho Featured Topics
const topicCards = document.querySelectorAll(".topic-card");
const btnPrevTopic = document.getElementById("prev-topic");
const btnNextTopic = document.getElementById("next-topic");
let currentTopicIdx = 0;

if (topicCards.length > 0) {
    topicCards[0].classList.add("active");
}

function moveTopicSlide(step) {
    topicCards[currentTopicIdx].classList.remove("active");
    currentTopicIdx = (currentTopicIdx + step + topicCards.length) % topicCards.length;
    topicCards[currentTopicIdx].classList.add("active");
}

if (btnPrevTopic && btnNextTopic) {
    btnPrevTopic.onclick = () => moveTopicSlide(-1);
    btnNextTopic.onclick = () => moveTopicSlide(1);
}

// Slideer cho Gallery
const items = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

function updateSlider() {
    items.forEach((item, i) => {
        item.classList.remove("active", "prev-1", "next-1", "prev-2", "next-2", "hidden");

        let n = items.length;
        // Tính toán khoảng cách tương đối trong vòng lặp tròn
        let diff = (i - currentIndex + n) % n;

        if (diff === 0) {
            item.classList.add("active");
        } else if (diff === 1 || diff === -(n - 1)) {
            item.classList.add("next-1");
        } else if (diff === n - 1 || diff === -1) {
            item.classList.add("prev-1");
        } else if (diff === 2 || diff === -(n - 2)) {
            item.classList.add("next-2");
        } else if (diff === n - 2 || diff === -2) {
            item.classList.add("prev-2");
        } else {
            item.classList.add("hidden");
        }
    });
}

document.getElementById("next-gal").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
});

document.getElementById("prev-gal").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
});

// Cấu hình thời gian tự chuyển (6000ms = 6 giây)
const AUTO_SWAP_TIME = 6000;
let autoSwapTimer;

// Hàm khởi động lại bộ đếm thời gian
function startAutoSwap() {
    // Xóa bộ đếm cũ nếu đang chạy
    stopAutoSwap();
    // Tạo bộ đếm mới
    autoSwapTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateSlider();
    }, AUTO_SWAP_TIME);
}

// Hàm dừng bộ đếm (dùng khi cần thiết)
function stopAutoSwap() {
    clearInterval(autoSwapTimer);
}

// Xử lý sự kiện nút Next
document.getElementById("next-gal").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
    startAutoSwap();
});

// Xử lý sự kiện nút Prev
document.getElementById("prev-gal").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider();
    startAutoSwap();
});

updateSlider();
startAutoSwap();
