function setHomepageLinkActive(element) {
    const homepageLinkActive = document.querySelector(".homepage-nav .menu a.active");
    homepageLinkActive.classList.remove("active");

    element.classList.add("active");

    element.getAttribute("href");

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
    link.addEventListener("click", () => {
        setHomepageLinkActive(link);
    });
});
