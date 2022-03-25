//Script
var childwindow;
document
  .getElementById("checklabel")
  .addEventListener("click", function (event) {
    childwindow = document.open(
      "newWindow.html",
      "_blank",
      "width=800,height=800"
    );
  });
