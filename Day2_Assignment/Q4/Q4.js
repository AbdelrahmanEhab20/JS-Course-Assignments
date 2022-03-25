//Script
var name_reg = /^([a-z]{3,})*[ ]([a-z]{3,})$/gi

// (\s) matchen any white space and capture this match , $ must end with)
var mail_reg = /^\S+@\S+(.com.eg|.net.eg|.edu.eg|.org.eg)$/i

//Name Check
do {
    var user_name = prompt("Enter Your Valid Name Please :");
} while (!name_reg.test(user_name));

//Mail Check
do {
    var mail = prompt("Enter Your Mail Please :");
} while (!mail_reg.test(mail));

document.getElementById("ValidData").innerHTML="This Is A Valid Data , Thank You";