$(document).ready(function(){





  // 사용한 active
  
  // active-menu : 1300이상에서의 헤더 메인의 텝메뉴
  // active-submenu : 1300이상에서의 헤더 메인의 텝메뉴 안에 서브 텝메뉴
  // active-on : 1300이상에서의 헤더 메인 텝메뉴 안에 메인 서브 메뉴 텍스트 아래 꾸며줌
  // active-toggle : 1300px이상에서의  오른쪽 아이콘에 토글 넣어줌
  // active-scroll : 스크롤을 일정정도 내렸을 때 헤더 색깔 입혀짐
  // active-toggle-top : 탑버튼 위에 있는 비즈니스 버튼 토글 메뉴 입혀줌 

  // active-top-btn :탑버튼 오파시티 조절 클래스 
  // active-btn : 1300이하에서 햄버거 버튼 눌렀을때 햄버거버튼 모양 바꿔줌
  // active-media : 1300px이하에서의 헤더 메뉴

  // active-sec-1' : 재생하는 동영상 제목과 맞춰 글씨 아래에 보더 입혀줌
  // play : sec-1 동영상 재생 액티브

  // active-lang-toggle : 루터에 있는 한국어 클릭시 토클 메뉴 입혀줌



  // set time out 로고
  setTimeout(function(){
    $('.settime-out').fadeOut();
    $('#wrap').addClass('block');

    
    var swiper = new Swiper(".mySwiper",{
      slidePerVies:"auto",
      spaceBetween:0,
      slidePerGroup:1,
      speed:1500,
      loop:true,
      observer:true,
      observerParents:true,
      autoplay: {
          delay:1500,
          disableOnInteraction:false,
          
      },
      pagination: {
        el: ".swiper-pagination",
      },
  });

  },2000);

 

  function media (){
    const ww = $(window).width();

    if(ww>=1300){
      // 메뉴변경
      $('.header').addClass('active-media');

       // 서브메뉴 엔터리브
      $('.header-main li').mouseenter(function(){
        const result1 = $(this).attr('data-alt');


        $('.m-tab-box').removeClass('active-menu');
        $(`#${result1}`).addClass('active-menu');

        $('.submenu-box').addClass('active-menu');
        $('.header').addClass('active-menu');
      
        $('.s-inner-box').addClass('active-submenu');

      })
      $('.submenu-box').mouseleave(function(){
        
        $(this).removeClass('active-menu');

        $('.header').removeClass('active-menu');

      })
      // 서브서브
      // tv
      $('.s-tv li').click(function(){
        const tabResult1 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-tv').removeClass('active-submenu');
        $(`#${tabResult1}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
      // it
      $('.s-it li').click(function(){
        const tabResult2 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-it').removeClass('active-submenu');
        $(`#${tabResult2}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
      //주방
      $('.s-kit li').click(function(){
        const tabResult3 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-kit').removeClass('active-submenu');
        $(`#${tabResult3}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
      //생활
      $('.s-life li').click(function(){
        const tabResult4 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-life').removeClass('active-submenu');
        $(`#${tabResult4}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
      //에어
      $('.s-air li').click(function(){
        const tabResult5 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-air').removeClass('active-submenu');
        $(`#${tabResult5}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
      //뷰티
      $('.s-beauty li').click(function(){
        const tabResult6 = $(this).attr('data-tab');

        $(this).addClass('active-on');
        $(this).siblings().removeClass('active-on');

        $('.s-menu-beauty').removeClass('active-submenu');
        $(`#${tabResult6}`).addClass('active-submenu');
      
        $('.s-inner-box').addClass('active-submenu');
      })
        // 헤더 오른쪽 아이콘 토클클래스 넣어주기
      $('.header-icon-box .icon').click(function(){
        $(this).toggleClass('active-toggle');
        $(this).siblings().removeClass('active-toggle');
      });

    }else{
      $('.header').addClass('active-media');

      $('.header-main li').mouseenter(function(){

        $('.submenu-box').removeClass('active-menu');
        $('.header').removeClass('active-menu');
        $('.m-tab-box').removeClass('active-menu')
     
      })
      
     
      $('.header-logo-ham #hamburger-btn').click(function(){
        $('.header').toggleClass('active-media');

      });
    }
  }

  media();
  $(window).resize(function(){
    media();
    //윈도우 리사이즈시 호출된거
  });




  // sec-1 비디오배너
  $('.sec-1-tab-menu li').click(function(){
    const result2 = $(this).attr('data-alt')

    // 비디오바뀌기
    $('.sec-1-tab-inner').removeClass('play');
    $(`#${result2}`).addClass('play');

    // 글씨 옮기기
    $(this).addClass('active-sec-1');
    $(this).siblings().removeClass('active-sec-1');
  });
  

  // 탑버튼 &스크롤
  $(window).scroll(function(){
    const btn = $('.top-btn-box');
      if($(window).scrollTop() >=100 && $(window).scrollTop()<200 ){
          btn.fadeIn();
          $('.top-btn-box').addClass('active-top-btn')
          $('.header').removeClass('active-media');
          $('#hamburger-btn').removeClass('active-btn');
      }else  if($(window).scrollTop()>= 200){
          btn.fadeIn();
          $('.header').addClass('active-scroll');
          $('.header').removeClass('active-media');
          $('#hamburger-btn').removeClass('active-btn');
      }else{
          btn.fadeOut();
          $('.header').removeClass('active-scroll');
          $('.header').addClass('active-media');
          $('#hamburger-btn').addClass('active-btn');
      }
  });
  $('.top-btn-box').click(function(){
    $('html, body').animate({scrollTop : 0},300)
  });


  // business버튼
  $('.bus-btn-box').click(function(){
    $('.bus-inner-box').toggleClass('active-toggle-top');
  });

  // footerbottom
  $('.footer-korea-box').click(function(){
    $(this).parent().toggleClass('active-lang-toggle');
    
  });





  // aos연결
  AOS.init();

})