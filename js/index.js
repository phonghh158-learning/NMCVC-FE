// Theme
const themeToggle = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme");
if (!theme || theme === "light") {
    localStorage.setItem("theme", "light");
} else {
    document.body.classList.add(theme);
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Language
const languageOptions = document.querySelectorAll(".language-option");
const language = localStorage.getItem("language") || "en";
if (!language) {
    localStorage.setItem("language", "en");
}
switch (language) {
    case "en":
        setLanguageParams(languageOptions[0]);
        break;
    case "vi":
        setLanguageParams(languageOptions[1]);
        break;
    case "ko":
        setLanguageParams(languageOptions[2]);
        break;
    default:
        setLanguageParams(languageOptions[0]);
        break;
}

languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
        setLanguageParams(option);
    });
});

function setLanguageParams(element) {
    const langCode = element.id.toString().slice(0, 2);
    const langToggleCircle = document.getElementById("language-toggle-circle");
    localStorage.setItem("language", langCode);
    langToggleCircle.style.top = `${element.offsetTop}px`;
    document.documentElement.setAttribute("lang", langCode);
    element.classList.add("active");
}

// Side Bar
const sideBar = document.getElementById("side-bar");
const expandNavButton = document.getElementById("expand-nav-button");
const collapseNavButton = document.getElementById("collapse-nav-button");

expandNavButton.addEventListener("click", () => {
    sideBar.classList.remove("collapsed");
    collapseNavButton.style.display = "flex";
    expandNavButton.style.display = "none";
});
collapseNavButton.addEventListener("click", () => {
    sideBar.classList.add("collapsed");
    collapseNavButton.style.display = "none";
    expandNavButton.style.display = "flex";
});

const personalButton = document.getElementById("personal-button");

personalButton.addEventListener("click", () => {
    const personal = document.querySelector(".personal");
    personal.classList.toggle("active");
});
