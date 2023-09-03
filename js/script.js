// script.js
// const toggleColorButton = document.getElementById("toggleColorButton");
// const body = document.body;

// toggleColorButton.addEventListener("click", () => {
//     body.classList.toggle("light-mode");
//     body.classList.toggle("dark-mode");
// });

const toggleButton = document.getElementById("dn");
const body = document.body;

toggleButton.addEventListener("change", () => {
    if (toggleButton.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});
