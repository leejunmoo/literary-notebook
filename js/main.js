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


let boxEl =document.getElementById('main-banner-box');
let box2El = document.getElementById('main-banner-box2');
let box3El = document.getElementById('main-banner-box3');


/* 배너 자동재생 */
/* $(function(){
    let bgImg = [
        "../images/main-title/main-titlebg-01.jpg",
        "../images/main-title/main-titlebg-02.jpg",
        "../images/main-title/main-titlebg-03.jpg",
    ];

    let bgImgNum = 0;
    setInterval(function(){

        bgImgNum++;
        if (bgImgNum >= bgImg.length) {
            bgImgNum = 0;
        }
        $('.wrap .main-banner').css({
            "background-image": `url(${bgImg[bgImgNum]})`,
            // "transition": "0.4s",
        });

    },5000);

}); */



/* 모바일버전 사이트맵 클릭시 2단계메뉴 등장 */
$(function(){
    $('.wrap #site-map-menu .site-menu .depth1 > li > a').on('click', function(){
            $(this).next().toggleClass('show');
    });
    $('.wrap #site-map-menu .site-menu .depth1-2 > li > a').on('click', function(){
            $(this).next().toggleClass('show');
    })
});