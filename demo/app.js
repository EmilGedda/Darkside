import { LightSource } from './lightsource';
import { Grid } from './grid';
import { Vector2, EquilateralTriangle } from './vector2';
import { Prism } from './prism';
import { Wavelength } from './wavelength';
function resize(grid, context) {
    const canvas = context.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const prismCenter = new Vector2(canvas.width * 0.7, canvas.height * 0.5);
    let lightsources = [
        new Vector2(canvas.width * 0.2 - 5, canvas.height * 0.2 - 5),
        new Vector2(canvas.width * 0.5 - 5, canvas.height * 0.5 - 5),
        new Vector2(canvas.width * 0.8 - 5, canvas.height * 0.8 - 5),
        prismCenter,
    ].map(pos => new LightSource(pos));
    lightsources[1].spectrum = [new Wavelength(700), new Wavelength(400)];
    let prisms = [EquilateralTriangle(prismCenter, 100)].map(vertices => new Prism(vertices));
    grid.lights = lightsources;
    grid.prisms = prisms;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log('Darkside started');
    let grid = new Grid();
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    window.addEventListener('resize', () => {
        resize(grid, context);
    });
    resize(grid, context);
    const fps = 1;
    var lastRender = new Date().getTime();
    setInterval(() => {
        var startTime = new Date().getTime();
        var timeDelta = startTime - lastRender;
        grid.update(timeDelta);
        grid.render(context);
        lastRender = new Date().getTime();
        console.log('Update+render took: ' + (lastRender - startTime) + 'ms');
    }, 1000 / fps);
});
//# sourceMappingURL=app.js.map