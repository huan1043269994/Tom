/**
 * Created by hw on 16/9/21.
 */
function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "100px";
    if(moveElement("message", 125, 25, 30)){
        alert("hhhh");
        var repeat = "moveElement(message" + "," + 200 + "," + 100 + "," + 10 + ")";
        setTimeout(repeat, 10);
    }
}
addLoadEvent(positionMessage);
