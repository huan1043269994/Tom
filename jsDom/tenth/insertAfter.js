/**
 * Created by hw on 16/9/21.
 */
function insertAfter(newNode, targetNode) {
    var parent = targetNode.parentNode;
    if(parent.lastChild == targetNode) {
        parent.appendChild(newNode);
    } else {
        parent.insertBefore(newNode, targetNode.nextSibling);
    }
}
