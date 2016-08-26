var data = ['Iphone4', 'Iphone4s', 'Iphone5', 'Iphone5s', 'Iphone6', 'Iphone6s', 'Samsung Galaxy Note5', 'Samsung Galaxy S5', 'Samsung Galaxy Note7', 'Samsung Galaxy S7'],
    timer = null;

window.onload = function () {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');

    var flag1 = false,
        flag = false;
    play.onclick = function () {
        var title = document.getElementById('title');
        clearInterval(timer);
        timer = setInterval(function(){
            var num = Math.floor(Math.random()*data.length);
            title.innerHTML = data[num];
        }, 50);
        play.style.backgroundColor = 'gray';
        flag1 = true;
    };

    stop.onclick = function () {
        clearInterval(timer);
        alert('恭喜您获得' + title.innerHTML + '一台!');
        play.style.backgroundColor = '#036';
        flag1 = false;
        flag = false;
    };


    document.onkeyup = function (event) {
        event = event || window.event;

        if(!flag && !flag1) {
            if(event && event.keyCode == 13) {
                play.style.backgroundColor = 'gray';
                timer = setInterval(function () {
                    var num = Math.floor(Math.random()*data.length);
                    title.innerHTML = data[num];
                }, 50);

                flag = true;

            }
        } else {
            if(event && event.keyCode == 13) {
                play.style.backgroundColor = '#036';
                clearInterval(timer);
                alert('恭喜您获得' + title.innerHTML + '一台!');
            }

            flag = false;
            flag1 = false;
        }
    };


};
