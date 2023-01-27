function spaces() {
    var _a;
    var head = document.querySelector(".fixed");
    if (!(head === null || head === void 0 ? void 0 : head.classList.contains("scrolled")))
        head === null || head === void 0 ? void 0 : head.classList.toggle("scrolled");
    iconSwitch();
    activate("header .spaces");
    activate(".wrapper");
    (_a = document.querySelector(".wrapper")) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseup", function (e) {
        var _a, _b;
        (_a = document.querySelector("header .spaces")) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        (_b = document.querySelector(".wrapper")) === null || _b === void 0 ? void 0 : _b.classList.remove('active');
        iconSwitch();
    });
}
function Left() {
    var _a;
    if ((_a = document.querySelector(".menu-page")) === null || _a === void 0 ? void 0 : _a.classList.contains("active"))
        return menuPage();
    activate("header .spaces");
    iconSwitch();
    activate(".wrapper");
}
