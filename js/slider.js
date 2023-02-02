// slider.js
/* 메인배너 슬라이더 */
var swiper = new Swiper(".mySwiperbanner", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let ww = $(window).width();
  function webSwiper() {
      swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  function mobileSwiper() {
      swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  /* pc버전 책 슬라이더 */
  if (ww > 767) {
    webSwiper();
  } else { // 모바일 버전 책슬라이더
    mobileSwiper();
  }

  $(window).on('resize', function() {
    ww = $(window).width()
    if ( ww > 767 ) {
      webSwiper();
    } else {
      mobileSwiper();
    }
  })