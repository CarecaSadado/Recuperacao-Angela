
function header() {
    const header = document.getElementById("header");
    const cores = ["blue", "red", "green", "purple", "orange", "yellow", "pink", "brown", "black", "white"];
    const indice = Math.floor(Math.random() * cores.length);
    header.style.color = cores[indice];
}
