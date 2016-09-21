/**
 * Created by hw on 16/9/21.
 */
function prepareSlideShow() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linkList")) return false;
    var slideShow = document.createElement("div");
    slideShow.setAttribute("id", "slideShow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "images/6.jpeg");
    preview.setAttribute("alt", "building blocks of web design");
    preview.setAttribute("id", "preview");
    slideShow.appendChild(preview);
    var linkList = document.getElementById("linkList");
    insertAfter(slideShow, linkList);
    var links = linkList.getElementsByTagName("a");
    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    }

}
addLoadEvent(prepareSlideShow);
