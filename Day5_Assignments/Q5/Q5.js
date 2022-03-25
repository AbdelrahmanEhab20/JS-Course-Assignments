// Script

var myData = [];

//Get Data And Seacrch with it inside the API
function GetData() {
    var id = document.getElementById("INPUTNUM").value;
    var Req = new XMLHttpRequest();
    Req.open("get", `https://reqres.in/api/users/${id}`, true);
    //onreadystatechange takes a function to check the readyState  and 
    Req.onreadystatechange = function () {
        if (Req.readyState == 4 && Req.status == 200) {
            myData = JSON.parse(Req.response);
            return JSON.parse(Req.response);
        }
    }
    Req.send();
    return myData["data"]
}
//Display The Values of Data
function DiplayData() {
    document.getElementById("firstname").innerText = myData["data"].first_name;
    document.getElementById("lastname").innerText = myData["data"].last_name;
    document.getElementById("avatar").src = myData["data"].avatar;
}