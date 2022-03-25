
// Script
var arr = [
'Don’t forget var keyword when assigning a variable’s value for the first time.',
'use === instead of ==', 
'Use Semicolons for line termination',
'Create an object constructor',
'Be careful when using typeof, instanceof and constructor',
'Create a Self-calling Function',
'Get a random item from an array',
'Get a random number in a specific range',
'Verify that a given argument is a number', 
'Don’t use delete to remove an item from array',]

// console.log(arr.length)
//console.log(Math.random() * arr.length)

var tips = Math.floor(Math.random() * arr.length)

//console.log(arr[tips]);
document.getElementById("newtip").innerHTML = arr[tips]