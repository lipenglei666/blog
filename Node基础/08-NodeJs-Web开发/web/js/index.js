
$(function () {
    // 获取所有英雄列表
    function getAllHeroList() {
        $.ajax({
            url: 'http://127.0.0.1:5000/getAllHero',
            type: 'get',
            success: function (data) {
                console.log(data);
                var htmlstr = template('row', data);
                $('tbody').html(htmlstr);
            }
        });
    };
    getAllHeroList();
    // 点击按钮弹出添加英雄页面模块
    $('#addHero').click(function () {
        $('.ui.modal')
            .modal('show');
    });
    // 添加英雄
    $('.ok').click(function(){
        $.ajax({
            url:'http://127.0.0.1:5000/addHero',
            type:'post',
            data:$('.hero').serialize(),
            success:function(result){
                $('.name').val('');
                console.log(result);
                getAllHeroList();
                alert('添加成功！');
            }
        })
    });
});