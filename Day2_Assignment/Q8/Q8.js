//Script

var ourdate = prompt("please enter date in this format (DD-MM-YYYY) :")


var arr = ourdate.split("-");

var day = arr[0];
var month = arr[1];
var year = arr[2];

//Validation : x

function formatdate() {
    document.write(this.year + " / " + this.month + " / " + this.day)
}