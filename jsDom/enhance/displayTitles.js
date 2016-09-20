/**
 * Created by hw on 16/9/20.
 */
function displayTitles() {
    if(!document.getElementsByTagName || !document.createElement || !document.createTextNode)
        return false;
    var aTitles_h1 = document.getElementsByTagName("h1");
    var aTitles_h2 = document.getElementsByTagName("h2");
    var aTitles_h3 = document.getElementsByTagName("h3");
    var aTitles = new Array();
    for( var i = 0; i < aTitles_h1.length; i++) {
        aTitles.push(aTitles_h1[i]);
    }
    for( var i = 0; i < aTitles_h2.length; i++) {
        aTitles.push(aTitles_h2[i]);
    }
    for( var i = 0; i < aTitles_h3.length; i++) {
        aTitles.push(aTitles_h3[i]);
    }
    var aKeys = new Array();
    for ( var i = 0; i < aTitles.length; i++) {
        var current_title = aTitles[i];
        if(!current_title.getAttribute) return false;
        if(!current_title.getAttribute("id")) {
            current_title.setAttribute("id", "a" + i);
            var key = "a" + i;
        } else {
            key = current_title.getAttribute("id");
        }
        var text = current_title.lastChild.nodeValue;
        aKeys[key] = text;
    }
    var list = document.createElement("ul");
    for(key in aKeys) {
        var text = aKeys[key];
        var item = document.createElement("li");
        var item_a = document.createElement("a");
        item_a.setAttribute("href", "#" + key);
        var item_a_text = document.createTextNode(text);
        item_a.appendChild(item_a_text);
        item.appendChild(item_a);
        list.appendChild(item);
    }
    var header = document.createElement("h2");
    var head_text = document.createTextNode("Title lists");
    header.appendChild(head_text);
    var child = document.getElementsByTagName("body")[0].childNodes[0];
    document.body.insertBefore(list, child);
    document.body.insertBefore(header, child);
}
addLoadEvent(displayTitles);
