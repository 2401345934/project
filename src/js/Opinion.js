$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
$('.btn-success').click(function () {
    if ($('#exampleFormControlInput1').val() != ''){
        alert('提交成功')
        location.reload()
    }else {
        $('#exampleFormControlInput1').css({
            border: '2px solid red'
        })
        $('#exampleFormControlInput1').val('此选项不能为空')
        $('#exampleFormControlInput1').focus(function () {
            if ($(this).val('此选项不能为空')){
                $(this).css({
                    border: 'none'
                })
                $(this).val('')
            }else {
                let val =  $(this).val();
                $(this).val(val);
            }

        })
    }
})

$('.btn-warning').click(function () {
    location.href = '../pages/index.html';
})