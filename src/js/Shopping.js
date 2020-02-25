let proArr = [
    {
        pname: '小米',
        p: '小米史上最贵手机',
        price: 1111,
        id: 0,
        img: '../img/xm.jpg'
    },

    {
        pname: '苹果',
        p: '苹果史上最贵手机',
        price: 2222,
        id: 1,
        img: '../img/pg.jpg'
    },
    {
        pname: '华为',
        p: '华为史上最贵手机',
        price: 3333,
        id: 2,
        img: '../img/hw.jpg'
    },
    {
        pname: '三星',
        p: '三星史上最贵手机',
        price: 4444,
        id: 3,
        img: '../img/sx.jpg'
    },
]

let html = ''  ;//设一个空字符串 一会用来拼接
let box = document.querySelector("#box")
let ul = document.querySelector("ul")

proArr.forEach((v) => {
    html += `
            <li>
            <img src="${v.img}" alt="">
            <p>${v.p}</p>
            <p>${v.price}</p>
            <button data-id="${v.id}" class="addC">加入购物车</button>
</li>
        `
})

ul.innerHTML = html            //需循环添加到 ul当中  样式是提前写好的

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
                <td colspan="2"><img src="${v.img}" alt="" style="width: 80px;height: 80px;margin-top: 60px;"> <span>${v.p}</span></td>
                <td style="color: orangered ">${v.price}</td>
                <td><input type="text" value="${v.num}" class="inpChnage" data-id="${v.id}"></td>
                <td class="tda">${v.num * v.price }</td>
                <td >
                <button class="removeB" style="width: 200px;height: 50px;" data-id="${v.id}">删除</button>
                <button class="jianB" style="width: 200px;height: 50px;" data-id="${v.id}">减</button>
                <button class="jiaB" style="width: 200px;height: 50px;" data-id="${v.id}">加</button>

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
            arr = arr.filter(v => v.id != pid);
            localStorage.setItem('carts', JSON.stringify(arr))
        }
    }


    // 数量直接修改功能
    let inpChan = document.querySelectorAll('.inpChnage');
    for (let i = 0; i < inpChan.length; i++) {
        inpChan[i].onchange = function () {
            let pid = this.getAttribute('data-id')
            let obj = arr.find(v => v.id == pid);
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
            let obj = arr.find(v => v.id == pid);
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
            let obj = arr.find(v => v.id == pid);
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
    let tda = document.querySelectorAll('.tda');



//全选
    let c = document.querySelector('#checkbox');
    c.onclick =function () {
        if (c.checked){
            for (let i = 0; i < checkB.length; i++) {
                checkB[i].checked = true;
                console.log(checkB[i].checkd);
            }
        }else {
            for (let i = 0; i < checkB.length; i++) {
                checkB[i].checked = false;
                console.log(checkB[i].checkd);
            }
        }
    }
}













