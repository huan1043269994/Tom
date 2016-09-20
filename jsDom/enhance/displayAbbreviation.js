/**
 * Created by hw on 16/9/20.
 */
function displayAbbreviations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var abbreviation = document.getElementsByTagName("abbr");
    if(abbreviation.length < 1) return false;
    var defs = new Array();
    for(var i = 0; i < abbreviation.length; i++) {
        var current_abbr = abbreviation[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for(var key in defs) {
        var defintion = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    var header = document.createElement("h2");
    var head_text = document.createTextNode("Abbreviations");
    header.appendChild(head_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
