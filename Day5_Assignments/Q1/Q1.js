//SCRIPTTTT

var UserKey = document.getElementById("user_name");
var PassValue = document.getElementById("pass");
var Btn_Enter = document.getElementById("btn_Enter");


//Button Enter Function
function addData() {

  // console.log(UserKey.value + " " + PassValue.value + "Valid Data");
  localStorage.setItem('username', UserKey.value);
  localStorage.setItem('passWord', PassValue.value);

  UserKey.value = localStorage.username;
  PassValue.value = localStorage.passWord;
}


function ClearData() {
  localStorage.clear()
}
