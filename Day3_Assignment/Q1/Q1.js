// Script

//text
function myFunction(even) {
    var check = even.which;
    document.getElementById("mytext").innerHTML = check;
}
// Button
function mouseFunction(eve) {
    var mycheck = eve.button;
    document.getElementById("clicked").innerHTML ="<b>Your Mouse Down Key Press Code is</b>"+" " +`<b>${mycheck}</b>`;
}