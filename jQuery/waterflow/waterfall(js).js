window.onload = function () {
    var oPar = document.getElementById('main');

    waterfall(oPar, 'box');
    var dataInt = {"data": [{"src": "0.jpg"}, {"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}]};
    window.onscroll = function () {
        if(checkScrollSlide()) {
            for(var i = 0; i < dataInt.data.length; i++) {
                var oDiv = document.createElement('div');
                oDiv.className = 'box';
                oPar.appendChild(oDiv);

                var eDiv = document.createElement('div');
                eDiv.className = 'Pic';
                oDiv.appendChild(eDiv);

                var oImg = document.createElement('img');
                oImg.src = "images/" + dataInt.data[i].src;
                eDiv.appendChild(oImg);
            }

            waterfall(oPar, 'box');
        }
    }
};

function waterfall(oPar, box) {
    var oBoxs = getByClass(oPar, box),
        oBoxW = oBoxs[0].offsetWidth;
        oWidth = document.documentElement.clientWidth || document.body.clientWidth,
        oNum = Math.floor(oWidth / oBoxW),
        elems = [];

    oPar.style.cssText = "width:" + oBoxW * oNum + "px; margin: 0 auto";

    for(var i = 0; i < oBoxs.length; i++) {
        if(i < oNum) {
            elems.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, elems),
                minIndex = getMinIndex(elems, minH);

            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.left = oBoxs[minIndex].offsetLeft + 'px';  // minIndex * oBoxW + 'px';
            oBoxs[i].style.top = minH + 'px';
            elems[minIndex] += oBoxs[i].offsetHeight;
        }
    }
}

function getByClass(oPar, clsName) {
    var oChilds = oPar.getElementsByTagName('*'),
        elems = [];

    for(var i = 0; i < oChilds.length; i++) {
        if(oChilds[i].className == clsName) {
            elems.push(oChilds[i]);
        }
    }
    return elems;
}

function getMinIndex(arr, minH) {
    for(var i in arr) {
        if(arr[i] == minH) {
            return i;
        }
    }
}

function checkScrollSlide() {
    var oPar = document.getElementById('main'),
        oBoxs = getByClass(oPar, 'box'),
        eHeight = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight/2),
        oHeight = document.documentElement.clientHeight || document.body.clientHeight,
        aHeight = document.documentElement.scrollTop || document.body.scrollTop;

    return (eHeight < oHeight + aHeight) ? true : false;
}
