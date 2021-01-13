let canvas = document.getElementBuild("snack");
let context = canvas.getContext("2D");
let box = 32;

function criarBG() {
    context.fillStyle ="Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);

}
criarBG();