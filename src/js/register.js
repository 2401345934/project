$(function () {
    $('.left').mouseover(function () {
        $(this).css({
            cursor: 'pointer',
        })
    })

    $('.left').click(function () {
        location.href = './index.html';
    })

    var falg1 = false;
    $('#username').change(function () {
        let val = $(this).val();
        if (/^[a-zA-Z][a-zA-Z0-9_]{5,9}$/.test(val)) {
            $('.span1').hide();
            falg1 = true;
        } else {
            $('.span1').show();
            falg1 = false;
        }
    })

    var falg2 = false;
    $('#password').change(function () {
        let val = $(this).val();
        if (/^[a-zA-Z]\w{5,9}$/.test(val)) {
            $('.span2').hide();
            falg2 = true;
        } else {
            $('.span2').show();
            falg2 = false;
        }
    })

    var falg3 = false;
    $('.mima').change(function () {
        let val = $(this).val();
        if (val === $('#password').val()) {
            $('.span3').hide();
            falg3 = true;
        } else {
            $('.span3').show();
            falg3 = false;
        }
    })


    $('.btn').click(function () {
        if (falg1 && falg2 && falg3) {
            $.ajax({
                url: '../php/register.php',
                type: 'post',
                data: `username=${$('#username').val()}&password=${$('#password').val()}`,
                dataType: 'json',
                success: function (res) {
                    if (res === 1) {
                        location.href = './login.html';
                    } else {
                        alert('用户名已存在');
                    }
                }
            })
        }

    })
    $('.btn').mousedown(function () {
        $(this).css({
            opacity: .3
        })
    })
    $('.btn').mouseup(function () {
        $(this).css({
            opacity: 1
        })
    })
})