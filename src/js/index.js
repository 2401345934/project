$(function () {

//login

    $('.sidebar-t').mouseenter(function () {
        $(this).css({
            background: '#f10983'
        })
        $('.login').stop().fadeIn(666)
    })
    $('.sidebar-t').mouseleave(function () {
        $(this).css({
            background: '#262626'
        })
        $('.login').stop().fadeOut()
    })

    //login


// 购物车 Shopping
    $('.Shopping').click(function () {
        location.href = '../pages/Shopping.html';
    })
// 购物车 Shopping


// sidebar
    $('.sidebar-z > span').hover(function () {
        $(this).next().animate({
            width: 117,
            opacity: 1
        }, 222, 'linear')
    }, function () {
        $(this).next().animate({
            width: 0,
            opacity: 0
        }, 222, 'linear')
    })

    $('.sidebar-y > span').click(function () {
        $(window).scrollTop(0);
    })

// sidebar

// header
    $('.header-div').on('click', function (event) {
        $('.header-div-div').slideDown(500);
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

    // nav

    $.ajax({
        url: '../json/nav.json',
        type: 'post',
        dataType: 'json',
        success: function (res) {
            res.forEach((item) => {
                let li = document.createElement('li');
                li.innerText = item
                let i = document.createElement('i');
                i.innerText = '|';
                li.appendChild(i);
                $('.nav-c ul').append($(li))
            })
            $('.nav-c ul li i').last().remove()
        }
    })

    $('.nav-r').click(function () {
        location.href = '../pages/Shopping.html';
    })

    // nav

    /*suspension*/

    $.ajax({
        url: '../json/suspension.json',
        type: 'post',
        dataType: 'json',
        success: function (res) {
            res.forEach((item) => {
                let li = document.createElement('li');
                li.innerText = item
                $('.suspension  .ul2').append($(li))
            })

            $('.suspension .ul2 li').click(function () {
                $(this).css('color', '#f10180').siblings().css('color', '#000')
            })
        }
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.suspension-wrap').slideDown(222)
        } else {
            $('.suspension-wrap').slideUp(222)
        }
    })
    /*suspension*/

    // banner


// 初始化一个Swiper实例，给当前的Swiper实例添加配置项
    var mySwiper = new Swiper('.swiper-container', {
        initialSlide:0,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        // 分页器 也就是一个个的小点
        pagination: {
            el: '.swiper-pagination',
        },
        centeredSlides : true,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

    $('.swiper-container').hover(function () {
        $('.banner-r').animate({
            width: 33
        })
        $('.swiper-button-next').show()

        $('.banner-l').animate({
            width: 33
        })
        $('.swiper-button-prev').show()
    },function () {
        $('.banner-r').animate({
            width: 0
        })
        $('.swiper-button-next').hide()

        $('.banner-l').animate({
            width: 0
        })
        $('.swiper-button-prev').hide()
    })




    // banner


    // paging

        // ppl
    getPpl()
    function getPpl(){
        $.ajax({
            url: '../json/ppl.json',
            type: 'post',
            dataType: 'json',
            success: function (res) {
                res.forEach((item) => {
                    let img = document.createElement('img');
                    img.src = item;
                    console.log(item);
                    $('.ppl').append($(img))
                })
            }
        })
    }


    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.ppl').height()) {
            getPpl()
        }
    })
        // ppl


    // paging
})