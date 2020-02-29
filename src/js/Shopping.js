

let box = document.querySelector("#box")
let ul = document.querySelector("ul")

console.log($('#box').children('table'));

let jsonStr = localStorage.getItem('carts');
let arr = null;
if (jsonStr) {
    arr = JSON.parse(jsonStr);
} else {
    arr = [];
}



let btnArr = document.querySelectorAll(".addC")

for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].onclick = function () {
        let pid = this.getAttribute('data-id');
        let obj = proArr.find((v) => v.id == pid);
        if (arr) {
            let proObj = arr.find((item) => item.id == obj.id);
            if (proObj) {
                proObj.num++;
            } else {
                obj.num = 1
                arr.push(obj)
            }
            localStorage.setItem('carts', JSON.stringify(arr))

        } else {
            obj.num = 1
            let arr = [obj]
            localStorage.setItem('carts', JSON.stringify(arr))
        }
        upData()
    }
}

//点击添加让本地的对象拼接到页面上

upData()

function upData() {
    let h = ""

   arr.forEach( (v) => {

        h += `
              <table>
            <tr style="margin-top: 60px; display: inline-block" >
                <td><input type="checkbox" class="checked"></td>
                <td colspan="2"><img src="${v.img}" alt="" style="width: 100px;height: 80px;margin-top: 60px;"><span>${v.nameStr}</span></td>
                <td style="color: orangered ">${v.priceStr}</td>
                <td><input type="text" value="${v.num}" class="inpChnage" data-id="${v.priceStr}"></td>
                <td class="tda">${v.num * v.priceStr }</td>
                <td >
                <button class="removeB"  data-id="${v.priceStr}">删除</button>
                <button class="jianB"  data-id="${v.priceStr}">减</button>
                <button class="jiaB"  data-id="${v.priceStr}">加</button>

                </td>
            </tr>
    </table>
            `
})


box.innerHTML = h


//删除功能 如果点击了删除按钮就让对应的删除 还让本地存储中删除

    let removeB = document.querySelectorAll('.removeB');
    for (let i = 0; i < removeB.length; i++) {
        removeB[i].onclick = function () {
            this.parentNode.parentNode.remove()  //删除DOM 元素
            let pid = this.getAttribute('data-id');
            arr = arr.filter(v => v.priceStr != pid);
            localStorage.setItem('carts', JSON.stringify(arr))

        }
    }


    // 数量直接修改功能
    let inpChan = document.querySelectorAll('.inpChnage');
    for (let i = 0; i < inpChan.length; i++) {
        inpChan[i].onchange = function () {
            let pid = this.getAttribute('data-id')
            let obj = arr.find(v => v.priceStr == pid);
            if (this.value <= 1) {
                obj.num = 1;
                this.value = 1;
            } else {
                obj.num = this.value;
            }
            localStorage.setItem('carts', JSON.stringify(arr));
            upData()
        }
    }


// 加号功能
    let jiaB = document.querySelectorAll('.jiaB');
    for (let i = 0; i < jiaB.length; i++) {
        jiaB[i].onclick = function () {
            let pid = this.getAttribute('data-id')
            let obj = arr.find(v => v.priceStr == pid);
            obj.num++;
            localStorage.setItem('carts', JSON.stringify(arr));
            upData()
        }
    }



// 减号功能
    let jianB = document.querySelectorAll('.jianB');
    for (let i = 0; i < jianB.length; i++) {
        jianB[i].onclick = function () {
            let pid = this.getAttribute('data-id')
            let obj = arr.find(v => v.priceStr == pid);
            if (obj.num <= 1) {
                obj.num = 1
            } else {
                obj.num--;
            }
            localStorage.setItem('carts', JSON.stringify(arr));
            upData()
        }
    }

    // 总价 price

    let checkB = document.querySelectorAll('.checked');
    let p = document.querySelectorAll('#price p')[0];
    let pinput  = document.querySelector('.pinput');



//全选
    let c = document.querySelector('#checkbox');
    let tda = document.querySelectorAll('.tda');
    c.onclick =function () {
        if (c.checked){
            for (let i = 0; i < checkB.length; i++) {
                checkB[i].checked = true;
            }
            let sum = 0;
            tda.forEach((item) => {
                sum += parseInt(item.innerHTML);
                console.log(item.innerHTML);
            })
            pinput.value = sum;

        }else {
            for (let i = 0; i < checkB.length; i++) {
                checkB[i].checked = false;
            }
            pinput.value = 0;

        }
    }


}

$(function () {
    // / header
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


})

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

