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
     * Adds a LightSource to the grid
     * @param light The LightSource to add
     */
    addLightSource(light) {
        this.lights.push(light);
    }
    /**
     * Adds a Prism to the grid
     * @param prism The Prism to add
     */
    addPrism(prism) {
        this.prisms.push(prism);
    }
    /**
     * Renders the grid with the given 2D context
     * @param context The rendering context to use for rendering
     */
    render(context) {
        const drawables = this.prisms.concat(this.lights);
        drawables.map(obj => obj.draw(context, this.config));
    }
}
//# sourceMappingURL=grid.js.map