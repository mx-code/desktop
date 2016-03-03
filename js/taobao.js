$(function () {
    // input search
    $('ul.choose li.tianmao').click(function () {
        $(this).addClass('tm-color')
            .siblings().removeClass('color');
        $('form.search-box').css({
            borderColor: '#C40000'
        });
        $('button.btn-search').css({
            backgroundColor: '#C40000'
        });
        $('input.input-search')[0].placeholder = '开学季 新年焕新镜';
        $('nav.tianmao').show()
            .siblings('nav.taobao').hide();
    });

    $('ul.choose li.taobao').click(function () {
        $(this).addClass('color').removeClass('tb-ho')
            .siblings().removeClass('color tm-color');
        $('nav.taobao').show()
            .siblings('nav.tianmao').hide();
        $('form.search-box').css({
            borderColor: '#ff5400'
        });
        $('button.btn-search').css({
            backgroundColor: '#ff5400'
        });
        if (this.id) {
            $('input.input-search')[0].placeholder = '';
        } else {
            $('input.input-search')[0].placeholder = '完美肌肤爱不释手';
        }
    });


    var liWidth = $('ul.two-do li').width(),
        $ul = $('ul.two-do'),
        $cir = $('div.circle i'),
        n=1;

    function cirColor() {
        $cir.eq(n).addClass('icolor').siblings().removeClass('icolor');
        n++;
        n = n > 4 ? 0 : n;
}

    function doit() {
        cirColor();
        $ul.animate({
            left: -liWidth
        }, 'fast', 'linear', function () {
            $ul.css({
                left: 0
            });
            $('ul.two-do li:first-child').appendTo($ul);
        });
    }
    var timeIn=setInterval(doit, 2000);
    $ul.hover(function () {
        clearInterval(timeIn,2000);
    }, function () {
        timeIn=setInterval(doit, 2000);
        });

    $cir.click(function () {

        var cirIndex = $(this).index(),
            colorIndex = $('i.icolor').index(),
            num;
        num = cirIndex - colorIndex;
        if (!$ul.is(':animated')) {
            $ul.animate({
                left: -(num * liWidth)
            }, 'fast', function () {
                $('ul.two-do li:lt(' + num + ')').appendTo($ul);
                $ul.css('left', '0');
            });
            $(this).addClass('icolor')
                .siblings().removeClass('icolor');
            clearInterval(timeIn, 2000);
            timeIn = setInterval(doit, 2000);
            return n = cirIndex + 1 > 4 ? 0 : cirIndex + 1;;
        }
    });
});