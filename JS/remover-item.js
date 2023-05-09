const li = document.querySelectorAll(".item");
const buttonClear = document.querySelector(".button-apagar")

buttonClear.addEventListener("click", () => {
    localStorage.clear()
    window.location.reload()
});