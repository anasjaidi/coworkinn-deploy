function activate(el) {
    if (typeof el == 'string')
        el = document.querySelector(el);
    el.classList.toggle("active");
}
function returnBack(e) {
    window.history.back();
}
