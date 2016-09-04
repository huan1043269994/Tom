$(function () {
   waterfall();

    var dataInt = {"data": [{"src": "0.jpg"}, {"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}]};

    $(window).scroll(function () {
        if(checkScrollSlide()) {

            $.each(dataInt.data, function (key, value) {
                var oDiv = $('<div>').addClass('box').appendTo($('#main'));
                var eDiv = $('<div>').addClass('Pic').appendTo($(oDiv));
                var oImg = $('<img>').attr('src', "images/" + $(value).attr('src')).appendTo($(eDiv));
            });
            waterfall();
        }
    })
});

function waterfall() {
    var oBoxs = $('#main>div');
    var w = oBoxs.eq(0).outerWidth();
    var oNum = Math.floor($(window).width() / w);

    $('#main').width(oNum * w).css('margin', '0 auto');

    var elems = [];

    oBoxs.each(function (index, value) {
       if(index < oNum) {
           elems[index] = oBoxs.eq(index).outerHeight();
       } else {
           var minH = Math.min.apply(null, elems);
           var minIndex = $.inArray(minH, elems);

           $(value).css({
              'position': 'absolute',
               'left': w* minIndex + 'px',
               'top': minH + 'px'
           });

           elems[minIndex] += oBoxs.eq(index).outerHeight();
       }
    });
}

function checkScrollSlide() {
    var oBox = $('#main>div').last();
    var oHeight = $(window).height();
    var aHeight = $(window).scrollTop();
    var eHeight = oBox.offset().top + Math.floor(oBox.outerHeight() / 2);

    return (eHeight < oHeight + aHeight) ? true : false;
}
