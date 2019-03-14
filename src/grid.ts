import { LightSource } from './lightsource';
import { Prism } from './prism';
import { Drawable } from './draw';
import { RenderConfig } from './renderconfig';
import { Material, MATERIAL } from './material';

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
        context.fillStyle = this.config.backgroundColor.toString();
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        const drawables = (this.prisms as Drawable[]).concat(this.lights as Drawable[]);
        drawables.map(obj => {
            context.save();
            obj.draw(context, this.config, timeDelta);
            context.restore();
        });
    }

    public update(timeDelta: number = 0): void {
        const vacuum = new Material(MATERIAL.VACUUM);
        for (let light of this.lights) {
            for (let prism of this.prisms) {
                const position = light.collides(prism);
                if (position == undefined) continue;
                light.endPoint = position;
                for (let wave of light.spectrum) {
                    // TODO Fix this ordering better
                    const newAngle =
                        light.bounces % 2 == 0
                        ? wave.refract(vacuum, prism.material, Math.PI / 2)
                        : wave.refract(prism.material, vacuum, Math.PI / 2);

                    this.lights.push(
                        new LightSource(position, newAngle, [wave], light.bounces + 1)
                    );
                    console.log('Adding new LightSource: ');
                    console.log(this.lights[this.lights.length - 1]);
                }
                break;
            }
        }
    }
}
