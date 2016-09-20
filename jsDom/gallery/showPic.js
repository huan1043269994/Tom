/**
 * Created by hw on 16/9/20.
 */
function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}
