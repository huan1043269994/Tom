function checkScrollSlide() {
    var oBox = $('#main>div:last'),
        oHeight = $(window).height(),
        aHeight = $(window).scrollTop(),
        eHeight = oBox.offset().top + Math.floor(oBox.outerHeight/2);

    return (eHeight < oHeight + aHeight) ? true : false;
}

$(window).on("load",function () {
    waterfall();

    var dataInt = {"data": [{"src": "0.jpg"}, {"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}]};

    $(window).on('scroll',function () {
       if( checkScrollSlide() ) {
           $.each(dataInt.data, function (key, value) {
              var oDiv = $('<div>').addClass('box').appendTo($('#main')),
                  eDiv = $('<div>').addClass('Pic').appendTo($(oDiv)),
                  oImg = $('<img>').attr('src', "images/" + $(value).attr('src')).appendTo($(eDiv));
               console.log(value);
           });

           waterfall();
       }
    });

});

function waterfall() {
    var oBoxs = $('#main>div'),
        oBoxW = oBoxs.eq(0).outerWidth(),
        oBody = $(window).width(),
        oNum = Math.floor(oBody/oBoxW),
        elems = [];

    $('#main').css({
        'width': oBoxW * oNum,
        'margin': '0 auto'
    });

    oBoxs.each(function (index, value) {
       if(index < oNum) {
           elems[index] = oBoxs.eq(index).outerHeight();
       } else {
           var minH = Math.min.apply(null, elems),
               minIndex = $.inArray(minH, elems);

           $(value).css({
               'position': 'absolute',
               'left': minIndex * oBoxW + 'px',
               'top': minH + 'px'
           });

           elems[minIndex] += oBoxs.eq(index).outerHeight();
       }
    });
}

