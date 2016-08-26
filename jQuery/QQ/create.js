//对class不支持,需要重写

function getByClass(cls, par) {
    var oPar = par ? document.getElementById(par) : document,
        oitems = oPar.getElementsByTagName('*'),
        eles = [];

    for(var i = 0; i < oitems.length; i++) {
        if(oitems[i].className == cls) {
            eles.push(oitems[i]);
        }
    }
    return eles;
}



//载入页面

window.onload = function () {
    var oClose = document.getElementById('ui_boxyClose');

    oClose.onclick = function () {
        document.getElementById('loginPanel').style.display = 'none';
    };

    var drag= getByClass('login_logo_webqq', 'loginPanel')[0];

    drag.onmousedown = function (event) {
        event = event || window.event;

        var odrag = document.getElementById('loginPanel');
        var oX = event.clientX - odrag.offsetLeft,
            oY = event.clientY - odrag.offsetTop;

        document.onmousemove = function (event) {
            event = event || window.event;

            var l = event.clientX - oX,
                t = event.clientY - oY,
                oW = document.documentElement.clientWidth || document.body.clientWidth,
                oH = document.documentElement.clientHeight || document.body.clientHeight,
                maxW = oW - odrag.offsetWidth - 10,
                maxH = oH - odrag.offsetHeight;

            if(l < 0) {
                l = 0;
            } else if(l > maxW) {
                l = maxW;
            }

            if(t < 0) {
                t = 10;
            } else if(t > maxH) {
                t = maxH;
            }

            odrag.style.left = l + 'px';
            odrag.style.top = t + 'px';

            document.onmouseup = function () {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

    }

    var _state = document.getElementById('loginState'),
        _state2 = document.getElementById('loginState2'),
        _stateShow = document.getElementById('loginStateShow'),
        _stateTxt = document.getElementById('login2qq_state_txt'),
        _statePanel = document.getElementById('loginStatePanel'),
        _items = _statePanel.getElementsByTagName('li');

    _state.onclick = function (event) {
        event = event || window.event;

        if(event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble;
        }

        _state2.style.display = 'none';
        _statePanel.style.display = 'block'
    }

    for(var i = 0; i < _items.length; i++) {
        _items[i].onmouseover = function () {
            this.style.backgroundColor = '#567';
        }

        _items[i].onmouseout = function () {
            this.style.backgroundColor = '#FFF';
        }

        _items[i].onclick = function (event) {
            event = event || window.event;

            if(event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }

            var id = this.id;
            _stateShow.className = '';
            _stateShow.className = 'login-state-show ' + id;
            _stateTxt.innerHTML = getByClass('stateSelect_text', id)[0].innerHTML;

            _state2.style.display = 'block';
            _statePanel.style.display = 'none';
        }

        document.onclick = function () {
            _statePanel.style.display = 'none';
        }
    }
}


// 拖曳

// 关闭



// 切换状态
// 鼠标滑过、离开和点击状态列表时

// 光标按下时光标和面板之间的距离
// 移动
// 释放鼠标
