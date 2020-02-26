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
    $.ajax({
        url: '../json/banner.json',
        type: 'post',
        dataType: 'json',
        success: function (res) {
            res.forEach((item) => {
                let box = document.createElement('div');
                let img = document.createElement('img');
                img.src = item;
                box.appendChild(img);
                box.classList.add('swiper-slide');
                console.log($(box));
                $('.swiper-wrapper').append($(box))
            })


            var mySwiper = new Swiper('.swiper-container', {
                initialSlide: 0,
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
                centeredSlides: true,
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        }
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
    }, function () {
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

    function getPpl() {
        $.ajax({
            url: '../json/ppl.json',
            type: 'post',
            dataType: 'json',
            success: function (res) {
                res.forEach((item) => {
                    let img = document.createElement('img');
                    let box = document.createElement('div');
                    img.src = item;
                    box.appendChild(img);
                    box.className = 'box';
                    $('.ppl').append($(box))
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

    $('.page-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active')

        if ($('.page-item-2').hasClass('active')) {
            $('.paging-b').hide();
            $('.paging-n').show();
            $('.ppl').children().remove();
            fdj();
        }

        if ($('.page-item-1').hasClass('active')) {
            $('.paging-b').show();
            $('.paging-n').hide();
            $('.ppl').children().remove();
            getPpl();
        }
        if ($('.page-item-3').hasClass('active')) {
            $('.paging-b').hide();
            $('.paging-n').hide();
            $('.ppl').children().remove();
            $('.paging-q').show();
        }

        $('.paging-q h2').click(function () {
            location.href = '../pages/Opinion.html';
        })
        
    })

    //fdj

    function fdj() {
        $('.bigimg').css({
            width: $('.small').width() / $('.mask').width() * $('.big').width(),
            height: $('.small').height() / $('.mask').height() * $('.big').height()
        })

        $('.small').hover(function () {
            $('.mask').show()
            $('.big').show()
        }, function () {
            $('.mask').hide()
            $('.big').hide()
        })


        $('.small').mousemove(function (e) {
            let x = e.pageX - $('.fdj').offset().left;
            let y = e.pageY - $('.fdj').offset().top;
            let maskX = x - $('.mask').width() / 2;
            let maskY = y - $('.mask').height() / 2;
            if (maskX >= $('.small').width() - $('.mask').width()){
                maskX = $('.mask').width();
            }
            if (maskX <= 0){
                maskX = 0;
            }

            if (maskY <= 0){
                maskY = 0;
            }

            if (maskY >=  $('.small').height() - $('.mask').height()) {
                maskY = $('.mask').height();
            }

            $('.mask').css({
                left: maskX,
                top: maskY
            })

            $('.bigimg').css({
                left: -maskX * $('.bigimg').width() / $('.small').width(),
                top: -maskY * $('.bigimg').height() / $('.small').height()
            })

        })
    }
        
    //fdj


    // paging
})


// ppl

// window.onload = function () {
//
//     let p = document.querySelector('.ppl');
//     let boxs = p.querySelectorAll('.box');
//     let boxsHeight = boxs[0].offsetHeight;
//     let imgWidth = boxs[0].offsetWidth;
//     let num = Math.floor(p.offsetWidth / imgWidth)
//     let heightArray = []
//
//     for (let i = 0; i < num; i++) {
//         heightArray.push(boxs[i] * boxsHeight)
//     }
//
//     for (let i = num; i < boxs.length; i++) {
//         let box = boxs[i]
//         let min = Math.min(...heightArray)
//         let minIndex = heightArray.findIndex(v => v == min)
//
//         box.style.position = 'absolute';
//         box.style.left = minIndex * imgWidth + 'px';
//         box.style.top = min + 'px';
//         heightArray[minIndex] = heightArray[minIndex] + box.offsetHeight
//     }
// }

// ppl


