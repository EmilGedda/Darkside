import { Vector2 } from './vector2';
/**
 * A LightSource which emits Photons in a direction
 */
export class LightSource {
    constructor(position = new Vector2(0, 0), rotation = 0, spectrum = []) {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }
    draw(context, config) {
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
//# sourceMappingURL=lightsource.js.map