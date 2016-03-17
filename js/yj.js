$(function() {
    var navLi = $('ul.nav-box>li'),
        showDiv=$('div.nav-list>div.nl-box'),
        timeOut;

    function hoverEnd() {
         $('ul.nav-box li.nav-checked').addClass('nav-active')
            .siblings().removeClass('nav-active');
        showDiv.hide();
    };

    navLi.hover(function() {
        var $th = $(this),
            index = $th.index();
        $th.addClass('nav-active')
            .siblings().removeClass('nav-active');
        showDiv.eq(index).show()
            .siblings().hide();
        clearTimeout(timeOut);
    }, function() {
        timeOut = setTimeout(hoverEnd, 200);
        });
    showDiv.hover(function() {
        clearTimeout(timeOut);
    }, function() {
        timeOut = setTimeout(hoverEnd, 200);
        });



    $('ul.wrap-box').on('mouseenter', 'li.details-sm', function() {
        $(this).removeClass('details-sm').addClass('details-big')
            .siblings().removeClass('details-big').addClass('details-sm');
    });
    $('div.app-box i.close').click(function() {
        $('div.app-box').hide();
    });

    (function() {
        var $width,
            index = 0, time,
            $ul = $('ul.lunbo-box'),
            lfBtn = $('i.lf-btn'),
            rtBtn=$('i.rt-btn');

            $width = $(window).width();
            $('ul.lunbo-box>li.lbox').width($width);
            $ul.css({
                width: 4 * $width
            });



        function move() {
            index++;
            if (index > 3) {
                clearInterval(time);
                index = 3;
                $ul.css({
                    left: -(index-1) * $width
                });
                $('ul.lunbo-box>li.lbox:first').appendTo($ul);
            time = setInterval(move,4000);
            }
            $ul.animate({
                left: -index * $width
            }, 'fast');
        }
        time = setInterval(move, 4000);

$(window).resize(function() {
            $width = $(window).width();
            $('ul.lunbo-box>li').width($width);
            $ul.css({
                width: 4 * $width,
                left:-index*$width
            });
            clearInterval(time);
            time = setInterval(move, 4000);
        });

rtBtn.click(function() {
    if (!$ul.is(':animated')) {
    clearInterval(time);
    index++;

    if (index > 3) {
        index = 3;
        $ul.css({
            left: -(index-1) * $width
        });
    $('ul.lunbo-box>li.lbox:first').appendTo($ul);
    $ul.animate({
        left: -index * $width
    }, 'fast');
    } else {
        $ul.animate({
            left: -index * $width
        }, 'fast');
    }
    time = setInterval(move, 4000);
    }
});

lfBtn.click(function() {
    if (!$ul.is(':animated')) {
        clearInterval(time);
    index--;
    if (index < 1) {
        index = 0;
        $ul.css({
            left: -(index + 1) * $width
        });
        $('ul.lunbo-box>li.lbox:last').prependTo($ul);
        $ul.animate({
            left: '+=' + (index + 1) * $width
        }, 'fast');
    } else {
        $ul.animate({
            left: '+=' + $width
        }, 'fast');
    }
    time = setInterval(move, 4000);
    }
});

    } ());
});