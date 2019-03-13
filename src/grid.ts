import { LightSource } from './lightsource';
import { Prism } from './prism';
import { Drawable } from './draw';
import { RenderConfig } from './renderconfig';

/**
 * A grid for simulating light refraction
 * This is what can be considered the root object of the simulation
 */
export class Grid {
    public lights: LightSource[];
    public prisms: Prism[];
    public config: RenderConfig;

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
     * Renders the grid with the given 2D context
     * @param context The rendering context to use for rendering
     */
    public render(context: CanvasRenderingContext2D, timeDelta: number): void {
        context.fillStyle = this.config.backgroundColor;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        const drawables = (this.lights as Drawable[]).concat(this.prisms as Drawable[]);
        drawables.map(obj => obj.draw(context, this.config, timeDelta));
    }
}
