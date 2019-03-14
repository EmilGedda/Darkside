import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
import { Drawable, drawSine, drawLine } from './draw';
import { Wavelength } from './wavelength';
import { RGB } from './rgb';
import { Prism } from './prism';

type Radians = number;
type Point = Vector2;

/**
 * A LightSource which emits Photons in a direction
 */
export class LightSource implements Drawable {
    public rotation: Radians;
    public position: Point;
    public spectrum: Wavelength[];
    public offset: number = 0;
    public count: number = 0;
    public bounces: number;
    public endPoint: Point;

    public constructor(
        position: Point = new Vector2(0, 0),
        rotation: Radians = 0,
        spectrum: Wavelength[] = [],
        bounces: number = 0,
    ) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
        this.bounces = bounces;
        this.endPoint = Vector2.fromRadians(this.rotation).scale(10000).plus(position);
    }

    public collides(prism: Prism): Vector2 | undefined {
        const beamStart = this.position;
        const beamEnd = Vector2.fromRadians(this.rotation).scale(10000).plus(beamStart);
        let sideStart = prism.vertices[prism.vertices.length - 1];
        let collisions: Vector2[] = [];
        for (let sideEnd of prism.vertices) {
            const determinant =
                (beamEnd.x - beamStart.x) * (sideEnd.y - sideStart.y) -
                (sideEnd.x - sideStart.x) * (beamEnd.y - beamStart.y);

            if (determinant === 0) {
                sideStart = sideEnd;
                continue;
            }

            const lambda =
                ((sideEnd.y - sideStart.y) * (sideEnd.x - beamStart.x) +
                    (sideStart.x - sideEnd.x) * (sideEnd.y - beamStart.y)) /
                determinant;
            const gamma =
                ((beamStart.x - beamEnd.y) * (sideEnd.x - beamStart.x) +
                    (beamEnd.x - beamStart.x) * (sideEnd.y - beamStart.y)) /
                determinant;

            if (0 < lambda && lambda < 1 && 0 < gamma && gamma < 1) {
                collisions.push(beamStart.plus(beamEnd.minus(beamStart).scale(lambda)));
            }
            sideStart = sideEnd;
        }

        if(collisions.length == 0)
            return undefined;

        let closest = new Vector2();
        let distance = Number.MAX_VALUE;
        for(let collision of collisions) {
            const d = collision.minus(this.position).magnitude()
            if(distance > d) {
                distance = d;
                closest = collision;
            }
        }
        return closest;
    }
    /**
     * Draws the LightSource's beam
     * @param context The rendering context to draw width
     * @param config The render config which defines styles and such
     */
    public draw(context: CanvasRenderingContext2D, config: RenderConfig, timeDelta: number): void {
        if (this.spectrum.length < 1) return;

        this.offset = this.offset + timeDelta / 350;
        this.count++;
        const brightness = 1;

        const avg = (a: RGB, b: RGB): RGB => {
            return new RGB(
                Math.floor((a.r + b.r) / brightness),
                Math.floor((a.g + b.g) / brightness),
                Math.floor((a.b + b.b) / brightness)
            );
        };

        const blend = this.spectrum.map(w => w.toRGB()).reduce(avg);

        drawSine(
            {
                start: this.position,
                end: this.endPoint,
                amplitude: 6,
                period: 12,
                offset: -this.offset,
                count: this.count,
            },
            context,
            blend,
            config
        );

        // drawLine([this.position, this.endPoint], context, blend);
    }
}
