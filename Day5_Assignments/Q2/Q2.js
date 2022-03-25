//SCRIPTTTT

var UserKey = document.getElementById("user_name");
var PassValue = document.getElementById("pass");


var CHECKBOX = document.getElementById("validCheck");

var mycheck = false;
//Button Enter Function
function EnterData() {

    // console.log(UserKey.value + " " + PassValue.value + "Valid Data");
    if (mycheck === true) {
        localStorage.setItem('username', UserKey.value);
        localStorage.setItem('passWord', PassValue.value);
        localStorage.setItem('checkbox', CHECKBOX.value)
        UserKey.value = localStorage.username;
        PassValue.value = localStorage.passWord;
    }
    else {
        ClearData();
    }
}


function ClearData() {
    localStorage.clear();
}



if (localStorage.checkbox == true) {
    document.getElementById("validCheck").value = "off";
} else {
    document.getElementById("validCheck").value = "on";
}

