var formPlace = document.querySelector(".prenez-place form");
var inputPlace = document.querySelector('.prenez-place input');
var mailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var validatePrenz = function (el, regx) {
    if (regx.test(el === null || el === void 0 ? void 0 : el.value)) {
        el === null || el === void 0 ? void 0 : el.classList.remove("error");
    }
    else {
        el === null || el === void 0 ? void 0 : el.classList.add("error");
    }
    return true;
};
inputPlace.addEventListener('keyup', function (e) {
    validatePrenz(e.target, mailRegx);
});
formPlace.addEventListener('submit', function (e) {
    if (validatePrenz(inputPlace, mailRegx) && !document.querySelector('.prenez-place .error'))
        return;
    else {
        e.preventDefault();
    }
});
