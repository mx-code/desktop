$(function () {

    setInterval(function () {//时间处理
        var today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth() + 1,
            date = today.getDate(),
            week = today.getDay(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds(),
            time = '';

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        var weekday = new Array(7);
        weekday[0] = '星期日';
        weekday[1] = '星期一';
        weekday[2] = '星期二';
        weekday[3] = '星期三';
        weekday[4] = '星期四';
        weekday[5] = '星期五';
        weekday[6] = '星期六';
        week = weekday[week];

        time += year + '年' + month + '月' + date + '日 ';
        time += h + ':' + m + ':' + s;
        time += ' ' + week;
        $('time').html(time);
    }, 500);



    function work() {//Esc返回  and 右键菜单无效
    $(document).keyup(function (e) {
                if (e.keyCode==27) {
                    $('div.showDiv').remove();
                }
        });
    $('div.showDiv').mousedown(function (e) {
            if (3 == e.which) {
                e.stopPropagation();
            }
        });
    }



   function cmenu(e) {//右键菜单位置
       e.preventDefault();
        var px = e.pageX,
            py = e.pageY;

        var $cm = $('div.contextmenu'),
            $cmWidth = $cm.width(),
            $cmHeight = $cm.height(),
            $window = $(window);

        if (px > $window.width() - $cmWidth) {
            $cm.css({
                left: px - $cmWidth + 'px',
                top: py + 10 + 'px'
            }).show();
        } else if (py > $window.height() - $cmHeight) {
            $cm.css({
                left: px + 10 + 'px',
                top: py - $cmHeight + 'px'
            }).show();
        } else {
            $('div.contextmenu').css({
                left: px + 10 + 'px',
                top: py + 10 + 'px'
            }).show();
        }
    }

        $(document).mousedown(function (e) {
            if (3 == e.which) {
                cmenu(e);
                $('ul.clickMenu').hide();
            $('a.new').removeClass('clickbg');
            }
   });

        $(document).click(function (e) {
            if (1 == e.which) {
                $('div.contextmenu').hide();
                $('ul.clickMenu').hide();
                $('a.new').removeClass('clickbg');
            }
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27 || e.keyCode==13) {
                $('div.contextmenu').hide();
              $('ul.clickMenu').hide();
                $('a.new').removeClass('clickbg');
            }
        });

        $(document).contextmenu(function (e) {
            e.preventDefault();
        });


        var $aNew = $('a.new');
           $aNew.click(function (e) {
              // e.preventDefault();
             e.stopPropagation();
               $(this).addClass('clickbg')
                       .siblings().removeClass('clickbg');
           });

    $aNew.mousedown(function (e) {
        if (3 == e.which) {
            e.stopPropagation();
            $('div.contextmenu').hide();
            $(this).addClass('clickbg')
                .siblings().removeClass('clickbg');
            $(this).after($('ul.clickMenu').show());
            $('ul.clickMenu').css({
                left: e.pageX,
                top: e.pageY
            });
        }
           });

   $('div.new').click(function () {//弹出层new用于新建
       var showNew = '';
       showNew += '<div class="showDiv">';
       showNew += '<div class="sdv">';
       showNew += '名称:<br /> <input class="newName" /><br />';
       showNew += 'url: <input class="newUrl" /><br />';
       showNew += '<button class="newBtn">确认</button>'
       showNew += '</div></div>';
       $('script').eq(0).before(showNew);
       $('input.newName').focus();

       $('button.newBtn').click(function () {//按钮单击
           var url = $(this).siblings('input.newUrl'),
               name = $(this).siblings('input.newName');

           if (url.val().trim().length < 1) {
               url.focus();
               return false;
           } else {
               url = url.val();
           }
           if (name.val().trim().length < 1) {
               name.focus();
               return false;
           } else {
               name = name.val();
           }

           var newHtml = '';
           newHtml += '<a class="new" target="_blank" href="' + url + '">';
           newHtml += '<figure><img src="img/ie.jpg">';
           newHtml += '<figcaption>' + name + '</figcaption>';
           newHtml += '</figure></a>';
           $('div.desktop').append(newHtml);
           $('div.showDiv').remove();

           /* 处理新建图标  */
           var $aNew = $('a.new');
           $aNew.click(function (e) {
              // e.preventDefault();
             e.stopPropagation();
               $(this).addClass('clickbg')
                       .siblings().removeClass('clickbg');
           });

    $aNew.mousedown(function (e) {
        if (3 == e.which) {
            e.stopPropagation();
            $('div.contextmenu').hide();
            $(this).addClass('clickbg')
                .siblings().removeClass('clickbg');
            $(this).after($('ul.clickMenu').show());
            $('ul.clickMenu').css({
                left: e.pageX,
                top: e.pageY
            });
        }
           });/* end of 新建图标*/

       });


       $('div.showDiv').on('keyup','input', function (e) {
           if (e.keyCode == 13) {
               $('button.newBtn').trigger('click');
           }
       });
       work();//执行Esc返回  and 右键菜单无效
        });

        $('ul.clickMenu li.open').click(function (e) {
            var url = this.parentNode.previousSibling.href;
            window.open(url);
            $('ul.clickMenu').hide();
            $('a.new').removeClass('clickbg');
            return false;
   });

        $('ul.clickMenu li.property').click(function (e) {
            var $proBox = $('div.proBox'),
                $proWidth = $proBox.width(),
                $proHeight = $proBox.height(),
                px = e.pageX,
                py = e.pageY;

            if (px > $(window).width() - $proWidth) {
                $proBox.css({
                    left: e.pageX - $proWidth + 'px'
                });
                }else if (py > $(window).height() - $proHeight) {
                $proBox.css({
                    top: e.pageY - $proHeight + 'px'
                });
            } else {
                $('div.proBox').css({
                left: e.pageX,
                top: e.pageY
            });
                }
             $('div.proBox').show();
            var proName = $(this).parent().prev().find('figcaption').text(),
                proUrl = this.parentNode.previousSibling.href;
            $('input.proName').val(proName);
            $('input.proUrl').val(proUrl);
            $(this).parent().before($('div.proBox'));
        });

        $('div.proBox').mousedown(function (e) {
            if (3 == e.which) {
                e.stopPropagation();
                $('div.contextmenu').hide();
            }
        });

        $('button.okBtn').click(function () {
            var $thisF = $(this).parent().siblings('label'),
                $thisFs = $(this).parents('div.proBox').prev('a.new'),
                len1 = $thisF.find('input.proName').val().trim().length;
                len2 = $thisF.find('input.proUrl').val().trim().length;

            if ( len1> 0 && len2>0) {
                proName = $thisF.find('input.proName').val(),
                proUrl = $thisF.find('input.proUrl').val();
            } else {
                return false;
                }

            $thisFs.find('figcaption').text(proName);
            $thisFs[0].href = proUrl;
            $('div.proBox').hide();
        });

        $('div.proBox').on('keyup', 'input', function (e) {
            if (e.keyCode == 13) {
                $('button.okBtn').trigger('click');
            }
        });
        $('button.cancelBtn').click(function () {
            $('div.proBox').hide();
        });
        $(document).keyup(function (e) {
            if (e.which == 27) {
                $('div.proBox').hide();
            }
        });



    $('div.changePic').click(function () {//弹出层changePic
        var showDiv = '';
        showDiv += '<div class="showDiv">';
        showDiv +='<div class="sdv">'
        showDiv += '<p>需将图片放置指定路径下</p>';
        showDiv += '<input type="radio" name="bg1"  checked="checked" />拉伸';
        showDiv += '<input type="radio" name="bg1" />不拉伸<br />';
        showDiv += '<input type="radio" name="bg2" />平铺';
        showDiv += '<input type="radio" name="bg2" checked="checked" />不平铺 <br />';
        showDiv += '<input type="text" class="showInput" placeholder=" 例如：**.jpg /**.png " />';
        showDiv += '<button class="btn">确认</button>';
        showDiv += '</div></div>';
        $('script').eq(0).before(showDiv);
        $('input.showInput').focus();

        $('input.showInput').keyup(function (e) {
            if (e.keyCode == 13) {
                $('button.btn').trigger('click');
            }
        });

        $('button.btn').click(function () {
            var a = $('input.showInput').val();
            if (a.trim().length > 0) {
                $('body').css({
                    backgroundImage: 'url(img/' + a + ')'
                });
            } else {
                return false;
            }
            //背景处理
             $('input[name=bg1]')[0].checked && $('body').css({
            backgroundSize: '100%'
            });
            $('input[name=bg1]')[1].checked && $('body').css({
                backgroundSize: 'auto'
             });
            $('input[name=bg2]')[0].checked && $('body').css({
                backgroundRepeat: 'repeat'
            });
            $('input[name=bg2]')[1].checked && $('body').css({
                backgroundRepeat: 'no-repeat'
            });

            $('div.showDiv').remove();
           // $(document).on('contextmenu', cmenu);
        });

        work();//执行Esc返回  and 右键菜单无效
   });



        $('div.refresh').click(function () {//refresh
            location.reload();
        });
});