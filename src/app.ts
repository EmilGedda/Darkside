import { LightSource } from './lightsource';
import { Grid } from './grid';
import { Vector2, EquilateralTriangle } from './vector2';
import { Prism } from './prism';
import { Wavelength } from './wavelength';

import '../css/canvas.css';

function resize(grid: Grid, context: CanvasRenderingContext2D): void {
    const canvas = context.canvas;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lightsource = new LightSource(
        new Vector2(canvas.width * 0.5 - 5, canvas.height * 0.5 - 5),
        Math.PI / 6,
        [new Wavelength(475), new Wavelength(550), new Wavelength(600), new Wavelength(750)]
    );

    const prismCenter = new Vector2(canvas.width * 0.7, canvas.height * 0.5);
    const prism = new Prism(EquilateralTriangle(prismCenter, 100));

    grid.lights = [lightsource];
    grid.prisms = [prism];
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Darkside started');

    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    let context = canvas.getContext('2d') as CanvasRenderingContext2D;

    let grid = new Grid();
    window.addEventListener('resize', () => resize(grid, context));

    resize(grid, context);
    grid.render(context);
    const fps = 1;

    var lastRender = performance.now();
    setInterval(() => {
        let startTime = performance.now();
        let timeDelta = startTime - lastRender;
        grid.update(timeDelta);
        grid.render(context);
        lastRender = performance.now();
        console.log('Update+render took: ' + (lastRender - startTime) + 'ms');
    }, 1000 / fps);
});
