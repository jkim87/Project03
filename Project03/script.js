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
