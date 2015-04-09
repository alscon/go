$(window).load(function(){
    $('.button-ico').click(function(){
        $('.button-ico').removeAttr('style', '');
        $(this).css('background', '#feab83');
    });

    $('.city h1').click(function(){
        $('.cityPiker').css({display: 'block', 'z-index': '9999'});
    });

    $('.cityPiker').click(function(){
        $('.cityPiker').removeAttr('style', '');
    });

    $('.socialPicker > a').click(function(){
        $('.social').css({display: 'block'});
    });

    $('.social').click(function(){
        $('.social').removeAttr('style', '');
    });

    threeForFourth();

    $('[data-new-name]').click(function(){
        $(this).parent().prepend('<label class="myname-input" data-named><input placeholder="" value=""><button>OK</button></label>');
        $(this).parent().children('label').children('input').val($(this).text());
        $(this).remove();
        $(window).load()
    });


    $('[data-named]').children('button').click(function(){
        $(this).parent().parent().prepend('<h1 data-new-name></h1>');
        $(this).parent().parent().children('h1').text($(this).parent().children('input').val());
        $(this).parent().remove();
        $(window).load()
    });

    $('#mobileMenu, .mobileMenu').click(function(){
        if($('.mobileMenu').css('display') === 'none') {
            $('.mobileMain').css('left', '-50%');
            $('.mobileMenu').css({display: 'block',right: '0'})
        } else {
            $('.mobileMain').css('left', '0');
            $('.mobileMenu').css({display: 'none', right: '-50%'})
        }
    });

    $('.burgerButton, .burgerMenu').click(function(){
        if($('.burgerMenu').css('display') === 'none') {
            $('.burgerMenu').css({display: 'block',right: '0'});

            if($('.container').offset().left <  $('.burgerMenu').width()) {
                $('.container, .header').css({position: 'relative', right: ($('.burgerMenu').width() - $('.container').offset().left) + 'px'});
                $('.burgerMenu').children('.container').removeAttr('style');
                $('.wg').hide();
                $('.header .container').removeAttr('style');
            }
        } else {
            $('.burgerMenu').removeAttr('style');
            $('.container, .header').removeAttr('style');
            $('.wg').removeAttr('style');
        }
    });

    $('.exit, .exitPiker').click(function(){
        if ($('.exitPiker').css("display") === 'none') {
            $('.exitPiker').css({display: 'block', top: ($('.exit').offset().top + 30) + 'px', left: $('.exit').offset().left + 'px'});
        } else {
            $('.exitPiker').removeAttr('style')
        }
    });

    $('[data-toggle="modal-2"]').children('img').click(function(){
        $('[data-modal]').show();
        $('[data-modal] .modal-img').css('background', $(this).css('background'));
        $('[data-modal] h1').text($(this).parent().children('h1').text());

        var modal_img_width = $('.modal-img').width();
        var modal_img_height = (modal_img_width / 4) * 3;
        $('.modal-img').height(modal_img_height);
        var s = setTimeout(threeForFourth, 500);
    });

    $('[data-toggle="modal"]').click(function(){
        $('[data-modal]').show();
        $('[data-modal] .modal-img').css('background', $(this).parent().css('background'));
        $('[data-modal] h1').text($(this).parent().children('h1').text());

        var modal_img_width = $('.modal-img').width();
        var modal_img_height = (modal_img_width / 4) * 3;
        $('.modal-img').height(modal_img_height);
        var s = setTimeout(threeForFourth, 500);
    });

    $('[data-toggle="close"]').click(function(){
        $('[data-modal], [data-modal-mobile]').hide();
    });

    $('[data-toggle="modal-2-mobile"]').children('img').click(function(){
        $('[data-modal-mobile]').show();
        $('[data-modal-mobile] .modal-img').css('background', $(this).css('background'));
        $('[data-modal-mobile] h1').text($(this).parent().children('h1').text());

        var modal_img_width = $('.modal-img').width();
        var modal_img_height = (modal_img_width / 4) * 3;
        $('.modal-img').height(modal_img_height);
        var s = setTimeout(threeForFourth, 500);
    });

    $('#namesend').click(function(e){
        e.preventDefault();
        $('.myname-big').prepend('<h1 id="nameUser"></h1>');
        $('#nameUser').text($('#username').val());
        $('#forusername').remove();
    });
    threeForFourth();
});

$(document).ready(function(){
    threeForFourth();
});

$(window).resize(function(){
    threeForFourth();
});

function threeForFourth() {
  console.log('re');
   var persentWidth;
    if ($(window).width() > 768) {
        persentWidth = '33.3%';

    } else if ($(window).width() > 480) {
        persentWidth = '50%';
    } else if ($(window).width() > 2400) {
        persentWidth = '100%';
    }
    var width = $('.main-content li').width();
    $('.main-content li').height(((width / 4) * 3));
    $('.main-content li').css('width', persentWidth);
    $('.li-left, .li-right').height(($('.main-content li').height() * 2) + 3);
    $('.li-left, .li-right').css('width', persentWidth);

    function podgonkaBig() {
        $('.main-content').children('li').children('div').css({width: '100%'});
        $('.main-content').css({position: 'relative', width: '100%'});
        $('.main-content').children('li').css({position: 'absolute', width: '33.3%', margin: 0});

        var hei = 0;
        $('.main-content').children('li').each(function(i, elem){
            if(i === 0) {
                $(elem).css({top: 0, left: 0});
            }
            if(i === 1) {
                $(elem).css({top: 0, left: 'calc(33.3% + 1px)'});
                hei = $(elem).height() + 2;
            }
            if(i === 2) {
                $(elem).css({top: 0, left: 'calc(66.6% + 2px)'});
            }
            if(i === 3) {
                $(elem).css({top: hei + 'px', left: 'calc(33.3% + 1px)'});
            }
            if(i === 4) {
                $(elem).css({top: hei + 'px', left: 'calc(66.6% + 2px)', height: $(elem).height() - 1 + 'px'});
            }
            if(i === 5) {
                $(elem).css({top: (hei * 2) + 'px', left: 0});
            }
            if(i === 6) {
                $(elem).css({top: (hei * 2) + 'px', left: 'calc(33.3% + 1px)'});
            }
        });

        $('.main-content').css({height: hei + (hei * 2) - 2 + 'px'});
    }

    function podgonkaTel() {
        $('.main-content').children('li').children('div').css({width: '100%'});
        $('.main-content').css({position: 'relative', width: '100%', height: '770px'});
        $('.main-content').children('li').css({position: 'absolute', width: '50%', margin: 0});

        var hei = 0;

        $('.main-content').children('li').each(function(i, elem){
            if(i === 0) {
                $(elem).css({top: 0, left: 0});
            }
            if(i === 1) {
                $(elem).css({top: 0, left: '50%%'});
                hei = $(elem).height() + 2;
            }
            if(i === 2) {
                $(elem).css({top: 0, left: '0'});
            }
            if(i === 3) {
                $(elem).css({top: hei + 'px', left: '50%'});
            }
            if(i === 4) {
                $(elem).css({top: hei + 'px', left: '0', height: $(elem).height() - 1});
            }
            if(i === 5) {
                $(elem).css({top: (hei * 2) + 'px', left: '50%'});
            }
            if(i === 6) {
                $(elem).css({top: (hei * 2) + 'px', left: '0'});
            }
        });
    }

    if ($(window).width() > 480) {
        podgonkaBig();
    }

    var main_one_width = parseInt($('.main-content-line-1 div').css('width'));
    var main_one_height = (main_one_width / 4) * 3;
    $('.main-content-line-1 div').css({height: main_one_height + 'px', width: '25%'});


    var main_two_width = parseInt($('.main-content-line-2 div').css('width'));
    var main_two_height = (main_two_width / 4) * 3;
    $('.main-content-line-2 div').css('height', main_two_height + 'px');


    var aboutEvent_width = parseInt($('.aboutEvent-img').css('width'));
    var aboutEvent_height = (aboutEvent_width / 4) * 3;
    $('.aboutEvent-img').css('height', aboutEvent_height + 'px');


    var applyBlock_width = parseInt($('.applyBlock').css('width'));
    var applyBlock_height = (applyBlock_width / 4) * 3;
    $('.applyBlock').css('height', (applyBlock_height / 2) + 'px');


    var event_width = parseInt($('.eventImg').css('width'));
    event_width -= 6;
    var event_height = (event_width / 4) * 3;
    $('.eventImg').css('width', event_width + 'px');
    $('.eventImg').css('height', event_height + 'px');

    var eventcontentline_width = parseInt($('.event-content-line').css('width'));
    var eventcontentline_height = (eventcontentline_width / 4) * 3;
    $('.event-content-line').css('height', eventcontentline_height + 'px');


    var myname_width = parseInt($('.myname').css('width'));
    var myname_height = (myname_width / 4) * 3;
    $('.myname').css('height', myname_height + 'px');


    var mynamesmall_width = parseInt($('.myname-small').css('width'));
    var mynamesmall_height = (mynamesmall_width / 4) * 3;
    $('.myname-small').css('height', mynamesmall_height + 'px');


    var mobile_big_width = parseInt($('.mobile-big').css('width'));
    var mobile_big_height = (mobile_big_width / 4) * 3;
    $('.mobile-big').css('height', (mobile_big_height + (mobile_big_height / 2)) + 'px');


    var mobile_stand_width = parseInt($('.mobile-stand').css('width'));
    var mobile_stand_height = (mobile_stand_width / 4) * 3;
    $('.mobile-stand').css('height', mobile_stand_height + 'px');

    var modal_img_width = $('.modal-img').width();
    var modal_img_height = (modal_img_width / 4) * 3;
    $('.modal-img').height(modal_img_height);

    var mobile_width = $('.mobilebox').width();
    var mobile_heigth = (mobile_width * 3) / 4;
    $('.mobilebox').height(mobile_heigth + (mobile_heigth / 3));
    $('.mobilebox .mobile-title').height((mobile_heigth / 3));

    var chat_width = $('.chat').width();
    var chat_height = (chat_width / 4) * 3;
    $('.forChat').height(chat_height);

    $('.content-button').height(30);
    $('.content-button i').each(function(i, elem){
        $(this).css({padding: 0, position: 'relative', top: ($(this).parent().height() / 2) - ($(this).height() / 2) - 5 + 'px'});
    });

    $('.sect').css('height', '100%')
}

var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(function(m) {
    if(m.matches) {
        threeForFourth()
    }
    else {
        threeForFourth()
    }
});