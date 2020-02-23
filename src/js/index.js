$(function () {

 //sidebar
    $('.sidebar-t').hover(function () {
        
    },function () {
        
    })

// header
    $('.header-div').on('click', function (event) {
        $('.header-div-div').css({'display': 'block'});
        event.stopPropagation();
    });

    //点击小按钮让盒子隐藏
    $('.header-div .top p').on('click', function (event) {
        $('.header-div-div').css({'display': 'none'});
        event.stopPropagation();
    });


    // 省份点击按钮
    $('.header-div-div .bottom .btn1').on('click', function (event) {
        $(this).css({'border-top': '2px solid #f10180', 'background': '#fff'});
        $('.header-div-div .bottom .btn2').css({'border-top': 'none', 'background': '#f8f8f8'});
        $('.header-div div .bottom .bottom-l').css({'display': 'block'});
        $('.header-div div .bottom .bottom-r').css({'display': 'none'});
        event.stopPropagation();
    });


    // 城市点击按钮
    $('.header-div-div .bottom .btn2').on('click', function (event) {
        $(this).css({'border-top': '2px solid #f10180', 'background': '#fff'});
        $('.header-div-div .bottom .btn1').css({'border-top': 'none', 'background': '#f8f8f8'});
        $('.header-div div .bottom .bottom-r').css({'display': 'block'});
        $('.header-div div .bottom .bottom-l').css({'display': 'none'});
        event.stopPropagation();
    });


    $(document).on('click', function (event) {
        $('.header-div-div').css({'display': 'none'});
    });


    // header

})