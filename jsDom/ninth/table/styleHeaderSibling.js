/**
 * Created by hw on 16/9/20.
 */
function styleHeaderSiblings() {
    if(!document.getElementsByTagName) return false;
    var header = document.getElementsByTagName("h1");
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(header[i].nextSibling);
        elem.className = "intro";
    }
}
