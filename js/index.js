// Hàm vẽ border
function applyAnimatedBorder(selector, options = {}) {
    const {
        enterDuration = 800, // ms
        leaveDuration = 300, // ms
        strokeWidth = 2,
    } = options;

    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
        el.style.position = "relative";
        el.style.borderRadius = "999px";
        el.style.overflow = "hidden";

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.position = "absolute";
        svg.style.inset = "0";
        svg.style.pointerEvents = "none";

        rect.setAttribute("x", strokeWidth / 2);
        rect.setAttribute("y", strokeWidth / 2);
        rect.setAttribute("width", `calc(100% - ${strokeWidth}px)`);
        rect.setAttribute("height", `calc(100% - ${strokeWidth}px)`);
        rect.setAttribute("rx", "50%");
        rect.setAttribute("ry", "50%");

        rect.setAttribute("fill", "none");
        rect.setAttribute("stroke", "var(--color-secondary)");
        rect.setAttribute("stroke-width", strokeWidth);
        rect.setAttribute("stroke-linecap", "round");

        svg.appendChild(rect);
        el.appendChild(svg);

        // tính chiều dài thực
        const length = rect.getTotalLength();
        rect.style.strokeDasharray = length;
        rect.style.strokeDashoffset = length;

        // hover vào
        el.addEventListener("mouseenter", () => {
            rect.style.transition = `stroke-dashoffset ${enterDuration}ms ease`;
            rect.style.strokeDashoffset = "0";
        });

        // hover ra
        el.addEventListener("mouseleave", () => {
            rect.style.transition = `stroke-dashoffset ${leaveDuration}ms ease`;
            rect.style.strokeDashoffset = length;
        });
    });
}

// Gọi function
document.addEventListener("DOMContentLoaded", () => {
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

    applyAnimatedBorder("#personal-page-button", {
        enterDuration: 333,
        leaveDuration: 666,
    });

    applyAnimatedBorder("#logout-button", {
        enterDuration: 333,
        leaveDuration: 666,
    });
});

// applyAnimatedBorder("#expand-nav-button", {
//     enterDuration: 333,
//     leaveDuration: 333,
// });

// applyAnimatedBorder("#collapse-nav-button", {
//     enterDuration: 333,
//     leaveDuration: 333,
// });
