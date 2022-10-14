function darkBackground() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}
let darkTheme = document.querySelector("button.themeButton");
darkTheme.addEventListener("click", darkBackground);


function loading() {
    let loadingBox = document.querySelector("#loading");
    loadingBox.innerHTML = `<img src="./images/preloader.png" alt="" />`;
}
setTimeout(loading, 10000000);

function displayDate() {
    let date = document.querySelector("#date");
    date.innerHTML = moment().format("dddd, LL [ | ] h:mm:ss a");
}
setInterval(displayDate, 1000);
