import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
import { RGB } from './rgb';
type Point = Vector2;

/**
 * A dummy config class for better readability when drawing sine curves
 */
export interface SineCurveConfig {
    start: Point;
    end: Point;
    amplitude: number;
    period: number;
    offset: number;
    count: number;
}

/**
 * Represents an entity which can be drawn given a rendering context
 */
export interface Drawable {
    /**
     * Draw the entity given the rendering context and our RenderConfig
     * @param context context to draw with
     * @param config config for styling the rendering
     */
    draw(context: CanvasRenderingContext2D, config: RenderConfig, timeDelta: number): void;
}

/**
 * Draw a line between a list of vertices
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
export function drawLine(points: Point[], context: CanvasRenderingContext2D, color: RGB): void {
    context.beginPath();
    context.strokeStyle = color.toString();
    let prev = points[points.length - 1];
    context.moveTo(prev.x, prev.y);
    for (let current of points) {
        context.lineTo(current.x, current.y);
    }
    context.stroke();
}

/**
 * Draw a line between a list of vertices
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
export function fillPolygon(points: Point[], context: CanvasRenderingContext2D, color: RGB): void {
    context.beginPath();
    context.fillStyle = color.toString();
    let prev = points[points.length - 1];
    context.moveTo(prev.x, prev.y);
    for (let current of points) {
        context.lineTo(current.x, current.y);
    }
    context.fill();
}

/**
 * Draw a sine wave between two points
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
export function drawSine(
    curve: SineCurveConfig,
    context: CanvasRenderingContext2D,
    color: RGB,
    config: RenderConfig
): void {
    const line = curve.end.minus(curve.start);
    const rotation = line.toRadians();
    const length = line.magnitude();
    const stepSize = 20;

    for (let flatX = (curve.count / 2) % stepSize; flatX < length; flatX += stepSize) {
        context.beginPath();
        const flatY = curve.amplitude * Math.sin(flatX / curve.period + curve.offset);
        const { x, y } = new Vector2(flatX, flatY).rotate(rotation).plus(curve.start);

        const radius = 4;
        let gradient = context.createRadialGradient(x, y, 1, x, y, radius);
        gradient.addColorStop(0, color.toString());
        gradient.addColorStop(1, config.backgroundColor.toString());
        context.lineWidth = 1;

        if (flatX === 0) context.moveTo(x, y + 0.5);
        context.fillStyle = gradient;
        context.fillRect(x - radius - 2, y - radius - 2, x + radius + 2, y + radius + 2);
    }
}
