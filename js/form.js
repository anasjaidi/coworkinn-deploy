var inputs = Array.from(document.querySelectorAll("input"));
var textArea = document.querySelector(".contact #text-area");
var form = document.querySelector(".contact form");
var formRegx = {
    "f-name": /[\w]{3,30}/,
    "l-name": /[\w]{3,30}/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "number-phone": /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    "text-area": /[\w\d]{3,3000}/
};
textArea.addEventListener("keyup", function (e) {
    validate(e.target, formRegx['text-area']);
});
var _loop_1 = function (input) {
    if (input.type === "radio")
        return "continue";
    input.addEventListener("keyup", function (e) {
        validate(e.target, formRegx[input.id]);
    });
};
for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    _loop_1(input);
}
var validate = function (el, regx) {
    if (regx.test(el === null || el === void 0 ? void 0 : el.value)) {
        el === null || el === void 0 ? void 0 : el.classList.remove("error");
    }
    else {
        el === null || el === void 0 ? void 0 : el.classList.add("error");
    }
    return true;
};
var checkElements = function () {
    for (var _i = 0, inputs_2 = inputs; _i < inputs_2.length; _i++) {
        var input = inputs_2[_i];
        if (input.type === "radio")
            continue;
        validate(input, formRegx[input.id]);
    }
    validate(textArea, formRegx['text-area']);
    return true;
};
form.addEventListener("submit", function (e) {
    if (checkElements() && !document.querySelector(".error"))
        return;
    else
        e.preventDefault();
});
