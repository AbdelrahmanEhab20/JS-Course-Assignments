// Script
var childwindow;
document.getElementById("ads").addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(MynewWindow, 3000);
});
function MynewWindow() {
    childwindow = document.open("", "_blank", "width=300,height=400");
  childwindow.document.write(`<h1> Thanks For Visiting Our Site </h1>`);
}

function closeWindow() {
  childwindow.close();
}
