




var images = [
        './image/IMG_2596.png',
        './image/IMG_2126.png',
        './image/IMG_2028.png'
    ],
    i = 1;

for (var j=images.length; j--;) {
    var img = new Image();
    img.src = images[j];
}

document.getElementById('myButton').addEventListener('click', function() {
    this.src = images[i >= images.length - 1 ? i = 0 : ++i];
}, false);



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
