$('#owl').owlCarousel({
loop:true,
margin:10,
dots:false,
nav:true,
mouseDrag:false,
autoplay:true,
animateOut: 'slideOutIn',
autoplayTimeout: 2700,
smartSpeed: 1000,

responsive:{
  0:{
      items:1
  },
  600:{
      items:1
  },
  1000:{
      items:1
  }
}
});

$(window).load(function(){
  $("body").css("overflow","auto");
  $(".loding-overlay").fadeOut("slow");
});

$(".btnn").on("click", function() {
     $(".inputt").toggleClass("inclicked");
     $(".btnn").toggleClass("close");
   });


   $(document).ready(function(){
     $(window).scroll(function(){
     	var scroll = $(window).scrollTop();
   	  if (scroll > 100) {
   	    $(".black").css("background" , "#333");
        $(".black").css("box-shadow" , "0 1px 3px rgba(0, 0, 0, 0.15)");

        // $(".nav-link").css("color" , "#000");

   	  }

   	  else{
   		  $(".black").css("background" , "none");
        $(".nav-link").css("color" , "#fff");
   	  }
     })
   });


   var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

