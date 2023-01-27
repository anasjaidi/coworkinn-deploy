var faqs = Array.from(document.getElementsByClassName("faq"));
var _loop_1 = function (faq) {
    console.log(faq);
    faq.addEventListener("click", function () {
        faq.classList.toggle("active");
    });
};
for (var _i = 0, faqs_1 = faqs; _i < faqs_1.length; _i++) {
    var faq = faqs_1[_i];
    _loop_1(faq);
}
