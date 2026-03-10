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
