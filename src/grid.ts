import { LightSource } from './lightsource';
import { Prism } from './prism';
import { Drawable } from './draw';
import { RenderConfig } from './renderconfig';

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

    public addLightSource(light: LightSource): void {
        this.lights.push(light);
    }

    public render(context: CanvasRenderingContext2D): void {
        const drawables = (this.prisms as Drawable[]).concat(this.lights as Drawable[]);
        drawables.map(obj => obj.draw(context, this.config));
    }
}
