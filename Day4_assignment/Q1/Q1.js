//script

var textBox = false;
var passwords = false;

var checkvalid = document.getElementById("invalid");
const Regex = /^([a-z]{3,})*[ ]([a-z]{3,})$/gi;
document.getElementById("username").addEventListener("focus", function (eve) {
  eve.style.border = "5px solid blue";
});

username.addEventListener("change", function (e) {
  var res = Regex.test(e.target.value);
  if (res == true) {
    textBox = true;
    e.target.style.border = "blue";
    e.target.style = "font-weight=20px";
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
    checkvalid.style.display = "none";
  } else {
    checkvalid.style.display = "inline";
    e.target.style.backgroundColor = "red ";
    e.target.style.color = "green";
    e.target.focus();
    e.target.select();
  }
});

var pass1 = "";
var pass2 = "";

document.getElementById("passw1").addEventListener("change", function (e) {
  pass1 = e.target.value;
  checkPass();
});

document.getElementById("passw2").addEventListener("change", function (e) {
  pass2 = e.target.value;
  checkPass();
});

function checkPass() {
  if (pass1 != "" && pass2 != "") {
    if (pass1 !== pass2) {
      document.getElementById("passVali").style.display = "inline";
      document.getElementById("passVali").innerText =
        "Password and RE.password Are not the same";
    } else {
      passwords = true;
      document.getElementById("passVali").style.display = "inline";
    }
  }
}
