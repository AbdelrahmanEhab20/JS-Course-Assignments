/// SCRIPT


function FadesOut(item) {
    item.classList.add("addTransition")
    item.style.opacity = "0.3"
}
function FadesIN(item) {
    item.style.opacity = "1"
}

//Question - 7 ----> HTML DOM

//createElement , setAttribute and append

var src1, src2, src3, src4;
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img");
var img4 = document.createElement("img");
function AddElements() {

    src1 = img1.setAttribute("src", "img/5.jpg")
    src2 = img2.setAttribute("src", "img/6.jpg")
    src3 = img3.setAttribute("src", "img/7.jpg")
    src4 = img4.setAttribute("src", "img/8.jpg")
    //Append
    document.querySelector(".newgallery").appendChild(img1);
    document.querySelector(".newgallery").appendChild(img2);
    document.querySelector(".newgallery").appendChild(img3);
    document.querySelector(".newgallery").appendChild(img4);
}

AddElements();

/*After appending the image, alert the number of child nodes to the div (Use element.childNodes.length),
what are the count of div child nodes?*/
var x = document.body.childNodes;
alert("the number of child nodes to the div =" + " " + x.length);