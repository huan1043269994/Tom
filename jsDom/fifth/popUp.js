//向后兼容的open window js
window.onload = function() {
    if(!document.getElementsByTagName) return false;
    var lnks = document.getElementsByTagName("a");
    for (var i = 0; i < lnks.length; i++) {
        if(lnks[i].getAttribute("class") == "popUp") {
            lnks[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
