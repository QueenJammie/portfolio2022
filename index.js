function darkBackground() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}
/*
function showSelectedCountry(event) {
    if (event.target.value !== 0) {
        if (event.target.value === "sherbrooke") {
            alert("Sherbrooke");
        }
        if (event.target.value === "montreal") {
            alert("Montréal");
        }
        if (event.target.value === "hollywood") {
            alert("Hollywood");
        }
        if (event.target.value === "paris") {
            alert("Paris");
        }
        if (event.target.value === "Martinville") {
            alert("Martinville");
        }
    }
}
*/

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

/*
let countriesSelected = document.querySelector("#cities");
countriesSelected.addEventListener("change", showSelectedCountry);
*/