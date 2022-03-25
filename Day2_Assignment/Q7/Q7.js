
// Script
var students = [
    { "name": "abdo", "grade": 100 },
    { "name": "ali", "grade": 60 },
    { "name": "zaki", "grade": 92 },
    { "name": "jou", "grade": 40 },
    { "name": "mostafa", "grade": 95 },
    { "name": "samir", "grade": 55 },
    { "name": "youssef", "grade": 98 }
]

//console.log(students)


/*-----------------------------------------------------------*/
// a- between 91 and 100
var big_grade = [];
console.log(" between 91 and 100")
for (var i = 0; i < students.length; i++) {
    if (students[i].grade >= 90 && 100 >students[i].grade ) 
    {
        big_grade.push(students[i]);
    }
}
console.log(big_grade)
/*-----------------------------------------------------------*/
/* With Find*/
// var highgrade = students.find(function (a) {
//     return a.grade <= 100;
// });

//console.log(big_grade)
//console.log(highgrade)

/*-----------------------------------------------------------*/
//b - Print students names, who got a degree less than 60 [Use filter()].
console.log("got a degree less than 60")
var lessdegree = students.filter(function (a) {
    return a.grade <= 60
});
console.log(lessdegree)

/*-----------------------------------------------------------*/
//c - Add a new student to the array [Use push()],()], and then use for…in to print all elements of the array.
console.log("Add a new student to the array [Use push()]")
students.push({ "name": "mohamed", "grade": 86 })
for (i in students) {
    console.log(students[i])
}


/*-----------------------------------------------------------*/
//d - Remove the last student of the array [Use pop()], and then use for…of to print all elements of the array.
console.log("Remove the last student of the array [Use pop()]")
students.pop();
for (i of students) {
    console.log(i)
}


/*-----------------------------------------------------------*/
//e -Sort the array alphabetically based on the student name.
console.log("Sort the array alphabetically based on the student name")
var newArr = students.sort(function (a, b) {
    if (a.name > b.name)
        return 1;
    if (a.name < b.name)
        return -1;
    return 0;
});
console.log(newArr)



/*----------------------------------------BOOOONUUUUUS--------------------------------------------------------*/

//f -Use splice() function to add 2 new students after the second element of the array [Bonus].
console.log("Use splice() function to add 2 new students")
students.splice(2, 0, { "name": "First-Splice", "grade": 60 }, { "name": "Second-splice", "grade": 50 })
console.log(students)

//g- Use splice() function to remove 1 student after the third element in the array [Bonus].
console.log("Use splice() function to remove 1 student")
students.splice(2, 1)
console.log(students)