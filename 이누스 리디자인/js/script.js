$(document).ready(function(){
    $('.main-slider').slick({
      
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      dots: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      
       
      // setting-name: setting-value
    });
  
    $(".top-bar > .top-menu > ul > li.second-hover > a").mouseover(function(){

      $(this).closest("li").find("ul").addClass("active");
      $(".top-bar > .top-menu > .second-menu-bg").addClass("active");

    });

    $(".top-bar > .top-menu > ul > li.second-hover > a").mouseout(function(){

      $(this).closest("li").find("ul").removeClass("active");
      $(".top-bar > .top-menu > .second-menu-bg").removeClass("active");
s
    });

    $('.review-slider').slick({
        
      autoplay: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      slidesToShow: 4,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      
       
      // setting-name: setting-value
    });
    
  });