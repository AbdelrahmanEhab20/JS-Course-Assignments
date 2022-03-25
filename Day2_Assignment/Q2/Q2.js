//Script

function show_Date() {
    var my_time = new Date();
    document.getElementById('display').innerHTML = my_time.toLocaleDateString();
}