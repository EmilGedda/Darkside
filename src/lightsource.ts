import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
import { Drawable } from './draw';
type Wavelength = number;
type Radians = number;
type Point = Vector2;

/**
 * A LightSource which emits Photons in a direction
 */
export class LightSource implements Drawable {
    private rotation: Radians;
    private position: Point;
    private spectrum: Wavelength[];

    public constructor(
        position: Point = new Vector2(0, 0),
        rotation: Radians = 0,
        spectrum: Wavelength[] = []
    ) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }

    public draw(context: CanvasRenderingContext2D, config: RenderConfig): void {
        const x = this.position.x;
        const y = this.position.y;
        const radius = config.lightsourceRadius;
        let gradient = context.createRadialGradient(x, y, radius, x, y, radius * 0.5);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)'); // TODO take this from RenderConfig
        gradient.addColorStop(1, config.lightsourceColor);
        context.beginPath();
        context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        context.arc(x, y, config.lightsourceRadius, 0, 2 * Math.PI);
        context.fillStyle = gradient;
        context.fill();
        context.closePath();
    }
}
