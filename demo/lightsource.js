import { Vector2 } from './vector2';
import { drawLine } from './draw';
import { RGB } from './rgb';
/**
 * A LightSource which emits Photons in a direction
 */
export class LightSource {
    constructor(position = new Vector2(0, 0), rotation = 0, spectrum = []) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }
    /**
     * Draws the LightSource's beam
     * @param context The rendering context to draw width
     * @param config The render config which defines styles and such
     */
    draw(context, config) {
        if (this.spectrum.length < 1)
            return;
        const avg = (a, b) => {
            return new RGB(Math.floor((a.r + b.r) / 2), Math.floor((a.g + b.g) / 2), Math.floor((a.b + b.b) / 2));
        };
        const blend = this.spectrum.map(w => w.toRGB()).reduce(avg);
        // TODO: Limit scale to first collision
        const endPoint = Vector2.fromRadians(this.rotation)
            .scale(300)
            .plus(this.position);
        drawLine([this.position, endPoint], context, blend);
    }
}
//# sourceMappingURL=lightsource.js.map