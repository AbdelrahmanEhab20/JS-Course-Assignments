//Script

var mycookies = document.cookie;

var User = document.getElementById("user_name");
var Pass = document.getElementById("pass");

function AddData() {

    document.cookie = `username=${User.value};expires=Thu, 15 jul 2022 08:15:20 UTC`;
    document.cookie = `password=${Pass.value};expires=Thu, 15 jul 2022 08:15:20 UTC`;
}

function ClearData() {
    document.cookie = `username=${User.value};expires=Thu, 15 jul 2000 08:15:20 UTC`;
    document.cookie = `password=${Pass.value};expires=Thu, 15 jul 2000 08:15:20 UTC`;
}