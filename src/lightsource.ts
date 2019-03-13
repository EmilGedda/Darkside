import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
import { Drawable, drawLine } from './draw';
import { Wavelength } from './wavelength';
import { RGB } from './rgb';

type Radians = number;
type Point = Vector2;

/**
 * A LightSource which emits Photons in a direction
 */
export class LightSource implements Drawable {
    public rotation: Radians;
    public position: Point;
    public spectrum: Wavelength[];

    public constructor(
        position: Point = new Vector2(0, 0),
        rotation: Radians = 0,
        spectrum: Wavelength[] = []
    ) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }

    /**
     * Draws the LightSource's beam
     * @param context The rendering context to draw width
     * @param config The render config which defines styles and such
     */
    public draw(context: CanvasRenderingContext2D, config: RenderConfig): void {
        if (this.spectrum.length < 1) return;

        const avg = (a: RGB, b: RGB): RGB => {
            return new RGB(
                Math.floor((a.r + b.r) / 2),
                Math.floor((a.g + b.g) / 2),
                Math.floor((a.b + b.b) / 2)
            );
        };

        const blend = this.spectrum.map(w => w.toRGB()).reduce(avg);

        // TODO: Limit scale to first collision
        const endPoint = Vector2.fromRadians(this.rotation)
            .scale(300)
            .plus(this.position);

        drawLine([this.position, endPoint], context, blend);
    }
}
