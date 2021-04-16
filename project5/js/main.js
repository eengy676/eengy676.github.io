

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 5) {
      
     $(".top-log").css("top" , "0rem");

     

      }

      else{
          
          $(".top-log").css("top" , "2.8rem");
      }
  })
})

// When any accordion title is clicked...
$(".accordion__title").click(function() {
  const $accordion_wrapper = $(this).parent();
  const $accordion_content = $(this).parent().find(".accordion__content");
  const $accordion_open = "accordion--open";

  // If this accordion is already open
  if ($accordion_wrapper.hasClass($accordion_open)) {
    $accordion_content.slideUp();                     // Close the content.
    $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
  }
  // If this accordion is not already open
  else {
    $accordion_content.slideDown();                 // Show this accordion's content.
    $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
  }
})



// Grab Links of first and third pagination
// no js code is needed for second pagination
const firstLinks = document.querySelectorAll(".first a");
const thirdLinks = document.querySelectorAll(".third a");

// JS code needed for first pagination effect
firstLinks.forEach(link => {
  link.addEventListener("mouseover", mouseOverEvent);
  link.addEventListener("mouseleave", mouseLeaveEvent);
});

function mouseOverEvent(e) {
  firstLinks.forEach(link => {
    link.style.opacity = 0.7;
  });

  e.target.style.opacity = 1;
  e.target.style.transform = "scale(1.2)";
}

function mouseLeaveEvent(e) {
  firstLinks.forEach(link => {
    link.style.opacity = 1;
    e.target.style.transform = "scale(1)";
  });
}

// JS code needed for third pagination effect
let opacityValue = 0;
thirdLinks.forEach((link, index) => {
  if (index > 5) {
    opacityValue -= 0.15;
  } else {
    opacityValue += 0.15;
  }

  link.style.opacity = opacityValue;
})

//<![CDATA[
  jQuery(document).ready(function($){ $(".multitab-widget-content-widget-id").hide(); $("ul.multitab-widget-content-tabs-id li:first a").addClass("multitab-widget-current").show(); $(".multitab-widget-content-widget-id:first").show(); $("ul.multitab-widget-content-tabs-id li a").click(function() { $("ul.multitab-widget-content-tabs-id li a").removeClass("multitab-widget-current a"); $(this).addClass("multitab-widget-current"); $(".multitab-widget-content-widget-id").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(); return false; }); });
  //]]>

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