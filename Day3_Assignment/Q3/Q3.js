// Script

var count = 0;
var image = document.querySelectorAll(".img");

function countfunc() {
    count++;
    console.log(count);
}

for (var i = 0; i < image.length; i++) {
    image[i].addEventListener("click", countfunc)
}

setTimeout(() => {
    for (var i = 0; i < image.length; i++) {
        image[i].removeEventListener("click", countfunc);
    }
    alert("Your Final Res of Count(num of clicks) after Time Out:" +"   "+ count)
}, 10000);
