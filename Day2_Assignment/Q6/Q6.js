
//Script
//Array of grades
var arr = [60, 100, 10, 15, 85];

// Descinding Numbers

arr.sort(function (a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
});

document.write("Sorted Grades :" + " <br> " + arr);

//Ascending Numbers
/*arr.sort(function (a, b) {
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
});*/



//Using the sorted Array find the highest student degree (first degree less than or equal to 100) [Use find()].]
var high_gra = arr.find(function (a) {
    return a <= 100;
});
document.write("<br><br>" + "high Grades :" + " <br> " + high_gra)


//filter
var fil_grades = arr.filter(function (a) {
    return a <= 60;
});
document.write("<br><br><br>" + " Grades less than :" + " <br> " + fil_grades)