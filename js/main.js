// main.js

$(function(){
    /* 메뉴 호버 */
    $('.wrap .header-container header .menu .depth1 > li').hover(
        function(){
            $(this).children().addClass('show');
        },
        function(){
            $(this).children().removeClass('show');
        }
    )
});

/* 사이트맵 보이기 */
$(function(){
    $('.wrap .header-container .site-map').on('click', function(){
        $('.wrap .header-container #site-map-menu').toggleClass('active')
    });

    $('#site-map-menu #site-menu-close').on('click', function(){
        $('#site-map-menu').removeClass('active');
        console.log('취소');
    })
})