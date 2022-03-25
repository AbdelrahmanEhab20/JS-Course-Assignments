// Script
var user = "";
document.getElementById("user").onkeydown = function (eve) {
  eve.preventDefault();
  if (eve.keyCode <= 90 && eve.keyCode >= 65) {
    user += eve.key;
    eve.target.value = user;
  }
};

