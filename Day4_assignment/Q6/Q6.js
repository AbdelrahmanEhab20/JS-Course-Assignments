//Script

function FadesOut(item) {
    item.classList.add("addTransition")
    item.style.transition = "transition: all 1s ease;"
    item.style.opacity = "0.3"
}
function FadesIN(item) {

    item.style.transition = "transition: all 1s ease;"
    item.style.opacity = "1"
}