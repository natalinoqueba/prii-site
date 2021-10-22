let aberto = false

function abrirMenu() {
    let menu = document.getElementById("menu")
    if (aberto) {
        aberto = false
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
        aberto = true
    }
}