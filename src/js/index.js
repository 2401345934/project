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
        $(this).css({background: '#fff'})
        event.stopPropagation();

        let scriptt = document.createElement('script');
        scriptt.src = 'https://gensvr-n.vip.com/address/address?callback=getAddress1582784398338&areaid=0&newIsBind=0';
        $('body').append($(scriptt))
        $(scriptt).remove()
    });

    //点击小按钮让盒子隐藏
    $('.header-div .top p').on('click', function (event) {
        $('.header-div-div').hide();
        $('.header-div').css({background: '#f5f5f5'})
        event.stopPropagation();
    });


    // 省份点击按钮
    $('.header-div-div .bottom .btn1').on('click', function (event) {
        $(this).css({'border-top': '2px solid #f10180', 'background': '#fff'});
        $('.header-div-div .bottom .btn2').css({'border-top': 'none', 'background': '#f8f8f8'});
        $('.header-div div .bottom .bottom-l').show();
        $('.header-div div .bottom .bottom-r').hide();
        event.stopPropagation();

        let scriptt = document.createElement('script');
        scriptt.src = 'https://gensvr-n.vip.com/address/address?callback=getAddress1582784398338&areaid=0&newIsBind=0';
        $('body').append($(scriptt))
        $(scriptt).remove()
    });


    // 城市点击按钮
    $('.header-div-div .bottom .btn2').on('click', function (event) {
        $(this).css({'border-top': '2px solid #f10180', 'background': '#fff'});
        $('.header-div-div .bottom .btn1').css({'border-top': 'none', 'background': '#f8f8f8'});
        $('.header-div div .bottom .bottom-r').show();
        $('.header-div div .bottom .bottom-l').hide();
        event.stopPropagation();

        let scriptt = document.createElement('script');
        scriptt.src = 'https://gensvr-n.vip.com/address/address?callback=getAddress1582784284869&areaid=104101&newIsBind=0';
        $('body').append($(scriptt))
        $(scriptt).remove()
    });


    $(document).on('click', function (event) {
        $('.header-div-div').hide();
        $('.header-div').css({background: '#f5f5f5'})
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
                $('.nav-c .nav-c-ul2').append($(li))
            })
            $('.nav-c .nav-c-ul2 li i').last().remove()
        }
    })


    //search


    $('.nav-input').on('input', function () {
        let body = document.querySelector('body');
        let scriptt = document.createElement('script');
        scriptt.src = `https://category.vip.com/ajax/getSuggest.php?callback=searchSuggestions&keyword=${$(this).val()}&_=1582706218572`;
        body.appendChild(scriptt);
        scriptt.remove()

        if ($(this).val() === '') {
            $('.nav-c-ul').hide()
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
        if ($(window).scrollTop() >= 550) {
            $('.suspension-wrap').stop().slideDown(222)
        } else {
            $('.suspension-wrap').stop().slideUp(222)
        }
    })


    $('.suspension .ul1').hover(function () {
        $('.suspension-ul4').stop().slideDown()
    }, function () {
        $('.suspension-ul4').stop().slideUp()
    })


    $('.suspension-ul4 ').on('mouseenter', 'li', function () {
        if ($(this).index() === 0) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30074&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30074&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582720897744`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 1) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory324442&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=324442&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582726169568`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 2) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30071&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30071&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582726304547`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 3) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30066&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30066&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582726360490`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 4) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30068&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30068&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582726543894`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 5) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30070&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30070&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582726961116`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }


        if ($(this).index() === 6) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory29751&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=29751&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582727161800`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 7) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory30069&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=30069&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582727161801`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 8) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory71958&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=71958&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582727161802`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 9) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory44285&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=44285&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582727161803`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

        if ($(this).index() === 10) {
            let scriptt = document.createElement('script');
            scriptt.src = `https://mapi.vip.com/vips-mobile/rest/shopping/pc/category/index/get_tab_data/v1?callback=getSubCategory331849&app_name=shop_pc&app_version=4.0&warehouse=VIP_HZ&fdc_area_id=104101102&client=pc&mobile_platform=1&province_id=104101&api_key=70f71280d5d547b2a7bb370a529aeea1&user_id=&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&wap_consumer=a&hierarchyId=117&categoryId=331849&clientFrom=PC&net=wifi&width=1366&height=768&pcmpWidth=750&mobile_channel=nature&functions=jumper&_=1582727364566`;
            $('body').append($(scriptt));
            scriptt.remove()
        } else {
            $('.suspension-ul4-div').children().remove()
        }

    })


    $.ajax({
        data: 'json',
        url: '../json/suspension2.json',
        type: 'get',
        success: function (res) {
            res.forEach((item) => {
                let li = document.createElement('li');
                li.innerText = item;
                $('.ul3-ul').append($(li));
            })
        }
    })

    $('.ul3').hover(function () {
        $('.ul3-ul').show();
    }, function () {
        $('.ul3-ul').hide();
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
        $('.banner-r').stop().animate({
            width: 33
        })
        $('.swiper-button-next').stop().show()

        $('.banner-l').animate({
            width: 33
        })
        $('.swiper-button-prev').show()
    }, function () {
        $('.banner-r').stop().animate({
            width: 0
        })
        $('.swiper-button-next').hide()

        $('.banner-l').stop().animate({
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
            if ($('.ppl').children().length >= 26) {

            } else {
                getPpl()

            }
        }


    })
    // ppl

    $('.page-item').click(function () {
        $(this).addClass('active').siblings().removeClass('active')

        if ($('.page-item-2').hasClass('active')) {
            $('.paging-b').hide();
            $('.paging-q').hide();
            $('.list').show()
            $('.ppl').children().remove();

            let scriptt = document.createElement('script');
            scriptt.src = ' https://h5.vip.com/dp/getDataPC?callback=jQuery1102047673596901053505_1582887585969&pageId=100015406&componentId=338728&pageSize=28&abtId=&warehouse=VIP_HZ&fdc_area_id=&area_id=104101102&app_name=shop_pc&app_version=1.0&api_key=70f71280d5d547b2a7bb370a529aeea1&mars_cid=1582679461768_c83426af4720746ec61272e0ecc11d9c&serviceType=1&total=&goodsQueryFields=goodsSellTag%2CgoodsStockTag%2Cquery4GoodsFav%2Cquery4Comment%2CgoodsCorner%2CgoodsFallingTag&topSalesList=&is_front=1&dataSourceScene=MST_PRODUCT_RANK&_=1582887585972';
            $('body').append($(scriptt));
            $(scriptt).remove()
        }

        if ($('.page-item-1').hasClass('active')) {
            $('.paging-b').show();
            $('.paging-q').hide();
            $('.list').hide()
            $('.ppl').children().remove();
            getPpl();
        }
        if ($('.page-item-3').hasClass('active')) {
            $('.paging-b').hide();
            $('.paging-n').hide();
            $('.ppl').children().remove();
            $('.paging-q').show();
            $('.list').hide()
        }

        $('.paging-q .btn-dark').click(function () {
            location.href = '../pages/Opinion.html';
        })

    })


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


// search

function searchSuggestions(data) {
    $('.nav-c-ul').children().remove()
    data.data.forEach((item) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.innerText = item.word;
        a.href = `${item.url}`;
        li.appendChild(a);

        $('.nav-c-ul').append($(li))
        $('.nav-c-ul').show();
    })
}

// search

// suspension-wrap

function getSubCategory30074(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory324442(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory30071(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}


function getSubCategory30066(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory30068(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory30070(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory29751(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}


function getSubCategory30069(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory71958(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory44285(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

function getSubCategory331849(data) {
    $('.suspension-ul4-div').children().remove()
    for (let i = 1; i < data.data.data.sectionList.length; i++) {
        let res = data.data.data.sectionList[i];
        console.log(res.category.children);
        let dl = document.createElement('dl');
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');
        let span = document.createElement('span');

        res.category.children.forEach((item) => {
            let a = document.createElement('a');
            a.innerText = item.name;
            dd.appendChild(a);
            a.href = 'javascript:;'
        })
        span.innerText = res.category.name
        dt.appendChild(span);
        dl.appendChild(dt);
        dl.appendChild(dd);
        $('.suspension-ul4-div').append($(dl));

    }
}

// suspension-wrap

window.onload = function () {
    let jsonStr = JSON.parse(localStorage.getItem('carts'));
    let tmpArr = null;
    if (jsonStr) {
        tmpArr = jsonStr;
        let sum = 0;
        tmpArr.forEach((item) => {
            sum += parseInt(item.num);
        })
        $('.nav-r-num').text(sum);
    }

}


// 省
function getAddress1582784398338(data) {
    $('.bottom-l ul').children().remove()
    data.list.forEach((item) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = 'javascript:;';
        a.innerText = item.name;
        li.appendChild(a);
        $('.bottom-l ul').append(li)
    })
    $('.bottom-l ul li').first().remove()
}

// 城市
function getAddress1582784284869(data) {
    $('.bottom-r ul').children().remove()
    data.list.forEach((item) => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.href = 'javascript:;';
        a.innerText = item.name;
        li.appendChild(a);
        $('.bottom-r ul').append(li)
    })
    $('.bottom-r ul li').first().remove()
}

// 详情页面
function jQuery1102047673596901053505_1582887585969(data) {
    let list = document.querySelector('.list');
    let h = '';
    data.data.items.forEach((item) => {
        h += `
         <div class="list-item">
                <img src="${item.goodsImageTags.image5.image}" alt="...">
                <div class="price"><span>快抢价</span><span class="span3">${item.goodsPriceTag.marketPrice}</span></div>
                <p>${item.goodsName}</p>
                <button type="button" class="btn btn-info" >点击查看详情</button>
            </div>
        `;

    })
    list.innerHTML = h;

    $('.list-item button').click(function () {
        localStorage.setItem('img', JSON.stringify($(this).prevAll('img').prop('src')));
        localStorage.setItem('name', JSON.stringify($(this).prevAll('p').text()));
        localStorage.setItem('price', JSON.stringify($(this).prevAll('.price').find('.span3').text()));
        location.href = '../pages/Details.html';
    })
}