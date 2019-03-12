import { RenderConfig } from './renderconfig';
/**
 * A grid for simulating light refraction
 * This is what can be considered the root object of the simulation
 */
export class Grid {
    constructor(lights = [], prisms = [], config = new RenderConfig()) {
        this.lights = lights;
        this.prisms = prisms;
        this.config = config;
    }
    /**
     * Renders the grid with the given 2D context
     * @param context The rendering context to use for rendering
     */
    render(context) {
        const drawables = this.prisms.concat(this.lights);
        context.fillStyle = this.config.backgroundColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        drawables.map(obj => obj.draw(context, this.config));
    }
    update(timeDelta) {
        console.log('Sleep time: ' + timeDelta + 'ms');
    }
}
//# sourceMappingURL=grid.js.map