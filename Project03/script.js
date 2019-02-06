$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();




$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();





// var images = [
//         './Image/IMG_2596.png',
//         './Image/IMG_2126.png',
//         './Image/IMG_2028.png'
//     ],
//     i = 1;
//
// for (var j=images.length; j--;) {
//     var img = new Image();
//     img.src = images[j];
// }
//
// document.getElementById('myButton').addEventListener('click', function() {
//     this.src = images[i >= images.length - 1 ? i = 0 : ++i];
// }, false);


////////////////first page happyimage change every secound///
var imgurls = ['IMG_1255.png','IMG_8345.png', 'IMG_9775.png', 'IMG_1755-1.png', 'IMG_2993.png','IMG_2968.png']
var count = 0;
setInterval(function() {
  $(".slideshow").html(`<img src="./Image/${imgurls[count]}">`);
  if (count < imgurls.length - 1) {
    count++;
  } else {
    count = 0;
  }

}, 200);

$(function() {
  // $('a[href*=#').on('click', function(e) {
  $('a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
  });
});

// Get from the DOM any element with the class of .dogwalk. On click, run this function.
$(".dogwalk").on("click", function() {
  // Get from the DOM any element with the class of .dogball1, and add the a class called showDogBall1
  $(".dogball1").addClass("showDogBall1");
})
$(".dogwalk").click(function() {
  $(".dogball2").addClass("showDogBall2");
})
$(".dogwalk").hover(function() {
  $(".dogball3").addClass("showDogBall3");
})
$(".dogwalk").hover(function() {
  $(".dogball4").addClass("showDogBall4");
})


// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// class HoverButton {
//   onHover(x, y) {
//     TweenMax.to(this.el, 0.4, {
//       x: (x - this.x) * 0.4,
//       y: (y - this.y) * 0.4,
//       scale: 1.15,
//       ease: Power2.easeOut
//     });
//     this.el.style.zIndex = 10;
//   }
//   onLeave() {
//     TweenMax.to(this.el, 0.7, {
//       x: 0,
//       y: 0,
//       scale: 1,
//       ease: Elastic.easeOut.config(1.2, 0.4)
//     });
//     this.el.style.zIndex = 1;
//   }
// }

//THREEJS RELATED VARIABLES
function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }




//onclick shack//
   $( document ).click(function() {
     $( "#wakeup1" ).effect( "shake" );
   });
   //onclick shack//






     function PlaySound(soundobj) {
         var thissound=document.getElementById(soundobj);
         thissound.play();
     }

     function StopSound(soundobj) {
         var thissound=document.getElementById(soundobj);
         thissound.pause();
         thissound.currentTime = 0;
     }
