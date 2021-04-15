$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("top" , "-1rem");
          $(".navbar").css("transition" , "all 0.5s");
          

       // $(".nav-link").css("color" , "#000");

        }

        else{
            $(".navbar").css("top" , "1rem");
      
        }
    })
  });