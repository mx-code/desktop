$(function () {
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
            .siblings('nav').hide();
    });

    $('ul.choose li.taobao').click(function () {
        $(this).addClass('color').removeClass('tb-ho')
            .siblings().removeClass('color tm-color');
        $('nav').show()
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
});