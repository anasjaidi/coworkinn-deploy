function Menu(e) {
    var list = document.querySelector("nav ul");
    console.log(list.classList);
    e.className === "fa-regular fa-bars"
        ? ((e.className = "fa-regular fa-xmark"), list.classList.toggle("active"))
        : ((e.className = "fa-regular fa-bars"), list.classList.toggle("active"));
}
function menuPage() {
    var _a, _b;
    (_a = document.querySelector(".menu-page")) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
    (_b = document
        .querySelector(".fixed-header-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.toggle("background-black");
    iconSwitch();
}
function iconSwitch() {
    var _a, _b;
    (_a = document.querySelector("#menu")) === null || _a === void 0 ? void 0 : _a.classList.toggle("none");
    (_b = document.querySelector("#left-arrow")) === null || _b === void 0 ? void 0 : _b.classList.toggle("line");
}
window.addEventListener("scroll", function () {
    var head = document.querySelector(".fixed-header-wrapper");
    if (!(head === null || head === void 0 ? void 0 : head.classList.contains("background-black")))
        head === null || head === void 0 ? void 0 : head.classList.toggle("background-white", window.scrollY > 0);
});
