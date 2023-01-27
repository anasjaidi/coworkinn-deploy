var galleries = Array.from(document.getElementsByClassName("gallery"));
var lastChilds = document.getElementsByClassName("last-child");
function checkElement(elem, index) {
    var rect = elem.getBoundingClientRect();
    if (rect.right <= galleries[index].getBoundingClientRect().right &&
        rect.left <= document.documentElement.clientWidth) {
        return true;
    }
    return false;
}
galleries.forEach(function (element, index) {
    element.addEventListener("wheel", function (e) {
        if (checkElement(lastChilds[index], index))
            return true;
        e.preventDefault();
        element.scrollLeft += e.deltaY;
        element.scrollLeft += e.deltaX;
    });
});
