
// Script
alert("Please Enter Mail and  Don't put @ at the start or end  of your mail")


do {
    var mymail = prompt("Please Enter your Valid Email : ");
    if ((!mymail.startsWith("@")) && (!mymail.endsWith("@")) && (mymail.includes("@"))) {
        true;
        break
    }
    else {
        false;
    }
} while (true)

document.getElementById("ValidMail").innerHTML = "Thank You This IS A Valid Mail";




