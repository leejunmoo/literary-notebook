// sub3-1.js

listiconEl = document.getElementById('list-style-icon');
checkiconEl = document.getElementById('check-style-icon');


// 여기서 경로찾을때 이 js파일을 기준으로적으면됨

$(function(){
    /* 리스트정렬 아이콘 누를시 */
    $('.wrap .books-list .books-list-btn-box .books-list-btn-icon-box #list-style').on('click', function(){
        $('.wrap .books-list-li-style-box').addClass('show');
        $('.wrap .books-list-check-style-box').removeClass('show');
        // 아이콘 누를시 아이콘색변경
        listiconEl.src = "../images/icon/list_black.gif";
        checkiconEl.src = "../images/icon/바둑판.gif";

    })
    /* 바둑판정렬 아이콘 누를시 */
    $('.wrap .books-list .books-list-btn-box .books-list-btn-icon-box  #check-style').on('click', function(){
        $('.wrap .books-list-li-style-box').removeClass('show');
        $('.wrap .books-list-check-style-box').addClass('show');
        // 아이콘 누를시 아이콘색변경
        listiconEl.src = "../images/icon/list_gray.gif";
        checkiconEl.src = "../images/icon/바둑판_black.gif";
         
    })
    
})