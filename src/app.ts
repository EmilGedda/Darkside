document.addEventListener("DOMContentLoaded", () => {
    console.log('Darkside started');
    let canvas = <HTMLCanvasElement>document.getElementById("canvas");
    let context = <CanvasRenderingContext2D>canvas.getContext('2d');
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
});
