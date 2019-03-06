import { LightSource } from './lightsource';
import { Prism } from './prism';
import { Drawable } from './draw';
import { RenderConfig } from './renderconfig';

/**
 * A grid for simulating light refraction
 * This is what can be considered the root object of the simulation
 */
export class Grid {
    private lights: LightSource[];
    private prisms: Prism[];
    private config: RenderConfig;

    public constructor(
        lights: LightSource[] = [],
        prisms: Prism[] = [],
        config: RenderConfig = new RenderConfig()
    ) {
        this.lights = lights;
        this.prisms = prisms;
        this.config = config;
    }

    /**
     * Adds a LightSource to the grid
     * @param light The LightSource to add
     */
    public addLightSource(light: LightSource): void {
        this.lights.push(light);
    }

    /**
     * Adds a Prism to the grid
     * @param prism The Prism to add
     */
    public addPrism(prism: Prism): void {
        this.prisms.push(prism);
    }

    /**
     * Renders the grid with the given 2D context
     * @param context The rendering context to use for rendering
     */
    public render(context: CanvasRenderingContext2D): void {
        const drawables = (this.prisms as Drawable[]).concat(this.lights as Drawable[]);
        drawables.map(obj => obj.draw(context, this.config));
    }
}
