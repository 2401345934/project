$(function () {
    $('.left').mouseover(function () {
        $(this).css({
            cursor: 'pointer',
        })
    })

    $('.left').click(function () {
        location.href = './index.html';
    })

    $('.btn').click(function () {
        $.ajax({
            url: '../php/login.php',
            type: 'post',
            data: `username=${$('#username').val()}&password=${$('#password').val()}`,
            dataType: 'json',
            success: function (res) {
                if (res === 1) {
                    location.href = './index.html';
                } else {
                    alert('您还没有注册,请先注册');
                }
            }
        })
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