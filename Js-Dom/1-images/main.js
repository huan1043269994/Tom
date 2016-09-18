/**
 * Created by hw on 16/9/18.
 */
function showPic(whichpic){
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
}
