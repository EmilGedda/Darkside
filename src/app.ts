import { LightSource } from './lightsource';
import { Grid } from './grid';
import { Vector2, EquilateralTriangle } from './vector2';
import { Prism } from './prism';

function resize(grid: Grid, context: CanvasRenderingContext2D): void {
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

    let prisms = [EquilateralTriangle(prismCenter, 100)].map(vertices => new Prism(vertices));

    grid.lights = lightsources;
    grid.prisms = prisms;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Darkside started');

    let grid = new Grid();

    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d') as CanvasRenderingContext2D;

    window.addEventListener('resize', () => {
        resize(grid, context);
    });

    resize(grid, context);
    const fps = 60;

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
