$(document).ready(function(){

    $(".nav-menu > .nav-con > ul > li").click(function(){

        $(".nav-menu > .nav-con > ul > li").removeClass("active");
        $(this).addClass("active");


    });

    $(".top-bar > .top-menu > li").click(function(){

        if($(this).hasClass("check") == true){

        $(".top-bar > .top-bg").removeClass("active");
        $(".top-bar > .top-menu > li").removeClass("check");
        $(".top-bar > .top-menu > li").removeClass("active");
        $(".top-bar > .top-menu > li").removeClass("orange");
        $(".top-bar > .ebook").removeClass("active");
        $(".top-bar > .search > a > .sr-white").addClass("active");
        $(".top-bar > .search > a > .sr-black").removeClass("active");
        
        }else{

            $(this).addClass("check");
            $(this).siblings().removeClass("check");
            $(".top-bar > .top-bg").addClass("active");
            $(".top-bar > .top-menu > li").siblings().addClass("active");
            $(".top-bar > .ebook").addClass("active");
            $(".top-bar > .search > a > .sr-white").removeClass("active");
            $(".top-bar > .search > a > .sr-black").addClass("active");
            $(this).siblings().removeClass("orange");
            $(this).addClass("orange");
            
        }

    });

    $('.slider-wrap').on('init', function(event){    
        $('.progress-bar').addClass("active");    
      });


    $('.slider-wrap').slick({
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 11000,
        pauseOnHover: false,
      });


      $(".dots").click(function(){
        var dotsIndex = $(this).index();
        $(".slider-wrap").slick("slickGoTo",dotsIndex);
      
      $(this).addClass("active");
      $(this).siblings().removeClass("active")
      
    });

    $('.slider-wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){    
        $('.progress-bar').removeClass("active");    
      });
      
      $('.slider-wrap').on('afterChange', function(event, slick, currentSlide){    
        $('.progress-bar').addClass("active");    
      });



});