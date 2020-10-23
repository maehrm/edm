var img = new Image();
img.src = 'from.png';
var canvas = document.getElementById('SimpleCanvas');
var ctx = canvas.getContext('2d');
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
}
// function draw() {

//     if (!canvas || !canvas.getContext) {
//         return false;
//     }
//     var context = 

//     var img = new Image();

//     img.onload = function onImageLoad() {
//         context.drawImage(img, 0, 0);
//         var imageData = context.getImageData(64, 64, 1, 1);
//         var outFrame = document.getElementById('output');
//         outFrame.innerText = "(R,G,B,a) = (" + imageData.data[0] + "," + imageData.data[1] + "," + imageData.data[2] + "," + imageData.data[3] + ")";
//     }


// }
