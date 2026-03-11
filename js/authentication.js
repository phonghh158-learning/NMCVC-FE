const authCard = document.getElementById("auth-card");
const goToSignup = document.getElementById("go-to-signup");
const goToLogin = document.getElementById("go-to-login");

goToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    authCard.classList.add("sign-up-mode");
});

goToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    authCard.classList.remove("sign-up-mode");
});
