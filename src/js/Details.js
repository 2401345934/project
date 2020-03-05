let imgStr = localStorage.getItem('img');

let priceStr = localStorage.getItem('price');

let nameStr = localStorage.getItem('name');

let h3 = document.querySelector('.paging-n h3');

imgStr = JSON.parse(imgStr);

priceStr = JSON.parse(priceStr);

nameStr = JSON.parse(nameStr);

let obj = {
    img: imgStr,
    priceStr: priceStr,
    nameStr: nameStr,
}

let jsonStr = localStorage.getItem('carts');
let carts = null;
if (jsonStr){
    carts = JSON.parse(jsonStr);
} else {
   carts = [];
}


$('.btn1').click(function () {
    if (carts) {
        let proObj = carts.find((item) => item.img == obj.img);
        if (proObj) {
            proObj.num++;
        } else {
            obj.num = 1
            carts.push(obj)
        }
        localStorage.setItem('carts', JSON.stringify(carts))

    } else {
        obj.num = 1
        carts = [obj]
        localStorage.setItem('carts', JSON.stringify(carts))
    }




    localStorage.setItem('carts', JSON.stringify(carts));
})


let img = document.querySelectorAll("img");

img.forEach((item) => {
    item.src = imgStr;
});

$('.paging-n h4').text(nameStr);

h3.innerText += priceStr;

window.onload = function () {
    //fdj
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
        if (maskX >= $('.small').width() - $('.mask').width()) {
            maskX = $('.mask').width();
        }
        if (maskX <= 0) {
            maskX = 0;
        }

        if (maskY <= 0) {
            maskY = 0;
        }

        if (maskY >= $('.small').height() - $('.mask').height()) {
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

//fdj
}

$('.btn2').click(function () {
    location.href = '../pages/index.html';
})

$('.btn3').click(function () {
    location.href = '../pages/Shopping.html';
})