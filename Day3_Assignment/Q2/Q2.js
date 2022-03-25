//SCRIPT

var mytime;
document.getElementById("new-btn").addEventListener("click", function () {
    alert("Clock Started");
    mytime = setInterval(starttime, 50);
});

function starttime() {
    var mydate = new Date();
    document.getElementById("clock").innerHTML = mydate.toLocaleTimeString();
}

//only with one button ----->  W
document.body.addEventListener("keypress", function (e) {
    if (e.key == "w") {
        clearInterval(mytime);
        alert("Clock Stopped");
    }
});

