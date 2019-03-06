import { LightSource } from './lightsource';
import { Grid } from './grid';
import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Darkside started');
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d') as CanvasRenderingContext2D;

    const config = new RenderConfig();
    context.fillStyle = config.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    let lightsources = [
        new Vector2(canvas.width * 0.2 - 5, canvas.height * 0.2 - 5),
        new Vector2(canvas.width * 0.5 - 5, canvas.height * 0.5 - 5),
        new Vector2(canvas.width * 0.8 - 5, canvas.height * 0.8 - 5)
    ].map(pos => new LightSource(pos));

    let grid = new Grid(lightsources);
    grid.render(context);

});
