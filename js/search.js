// search.js

let k;
let temp;
let tempEl
let content = document.getElementsByClassName("content")
let search = document.querySelectorAll('h3'); // h3를 가져오기
 console.log(search);
$(document).ready(function(){
    $("#search-in").keyup(function(){
        k = $(this).val();
        temp = $(".content-text h3:contains('" + k + "')");
        tempEl = typeof temp;
        // class가 .content-text중에찾음
        console.log(temp);
    })
    $('#search-button').click(function(){
        for(i=0; i<content.length; i++) {
            if( temp[i] == search[i]) {
                 $(temp).parent('.content').addClass('search-show');
                //content[i].style.display = "flex";
                 console.log('제대로 되고있습니다.')
            } /* else if (temp = null ) {
                $('.wrap .books-list .books-list-li-style li a .content').removeClass('search-show')
                $('.wrap .books-list .books-list-li-style li a .content').removeClass('no-show')
            } */
            else {
                //content[i].style.display = "none";
                $(content[i]).addClass('no-show');
                console.log('tlfgod')
            }
             
        }
    })
    
})



/* $('#search-button').click(function(){
        if(temp == true){
            $(temp).closest('.content').addClass('search-show');
        } else {
            $('.content').addClass('no-show');
        } */