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





var images = [
        './Image/IMG_2596.png',
        './Image/IMG_2126.png',
        './Image/IMG_2028.png'
    ],
    i = 1;

for (var j=images.length; j--;) {
    var img = new Image();
    img.src = images[j];
}

document.getElementById('myButton').addEventListener('click', function() {
    this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);


////////////////first page happyimage change every secound///
var imgurls = ['IMG_2596.png', 'IMG_2126.png', 'IMG_5782.png', 'IMG_9099.png', 'IMG_1755.png']
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
  $(".dogball4").addClass("showDogBall1");
})




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
