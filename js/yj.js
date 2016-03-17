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
            index = 0, time,n = 0,
            $ul = $('ul.lunbo-box'),
            lfBtn = $('i.lf-btn'),
            rtBtn = $('i.rt-btn'),
            $cir = $('div.cir-box i.cir-btn'),
            count=$('ul.lunbo-box>li').length,
            html=$('ul.lunbo-box>li').clone(true);

            $width = $(window).width(); //控制宽度
            $('ul.lunbo-box>li.lbox').width($width);
            $ul.css({
                width: count * $width
            });

    function cirBtn(n) { //小圆点
        $cir.eq(n).addClass('cir-color')
            .siblings().removeClass('cir-color');
    }

        function move() { //正常轮播
            index++;
            n++;
            n = n > (count-1) ? 0 : n;
            cirBtn(n);
            if (index > (count-1)) {
                clearInterval(time);
                index = (count-1);
                $ul.css({
                    left: -(index-1) * $width
                });
                $('ul.lunbo-box>li.lbox:first').appendTo($ul);
            time = setInterval(move,4000);
            }
            $ul.animate({
                left: -index * $width
            }, 'slow');

        }
        time = setInterval(move, 4000);

$(window).resize(function() { //窗口变化时，改变宽度
            $width = $(window).width();
            $('ul.lunbo-box>li').width($width);
            $ul.css({
                width: count * $width,
                left:-index*$width
            });
            clearInterval(time);
            time = setInterval(move, 4000);
        });

 rtBtn.click(function() {//>>右单击
    clearInterval(time);
    if (!$ul.is(':animated')) {
    index++;
    n++;
    n = n > (count-1) ? 0 : n;
    cirBtn(n);
    if (index > 2) {
        index = 2;
        $ul.css({
            left: -(index-1) * $width
        });
    $('ul.lunbo-box>li.lbox:first').appendTo($ul);
    $ul.animate({
        left: -index * $width
    }, 'slow');
    } else {
        $ul.animate({
            left: -index * $width
        }, 'slow');
    }
   }
    time = setInterval(move, 4000);
});

lfBtn.click(function() {//<<左单击
    clearInterval(time);
    index--;
    n--;
    n = n <0 ? count-1 : n;
    cirBtn(n);
    if (index < 0) {
        index = 0;
        $ul.css({
            left: - $width
        });
        $('ul.lunbo-box>li.lbox:last').prependTo($ul);
        $ul.animate({
            left: '+='+ $width
        }, 'slow');
    } else {
         $ul.animate({
            left: '+='+ $width
        }, 'slow');
    }
    time = setInterval(move, 4000);
});
    $cir.click(function() { //小圆点单击
        index = $(this).index();
        n = index;
        clearInterval(time);
        $ul.html(html);
        $width = $(window).width();
        $('ul.lunbo-box>li.lbox').width($width);
        $ul.css({
            width: count * $width
        });
        cirBtn(n);
        $ul.animate({
            left: -index * $width
        }, 'slow');
        time = setInterval(move, 4000);
    });

    } ());
});