/**
 * Created by hw on 16/9/20.
 */
function stripeTables() {
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for(var j = 0; j < rows.length; j++) {
            if(odd) {
                //改进: addClass(rows[j], "odd");
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
addLoadEvent(stripeTables);
