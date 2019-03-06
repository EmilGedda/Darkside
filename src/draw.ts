import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
type Point = Vector2;

/**
 * Represents an entity which can be drawn given a rendering context
 */
export interface Drawable {
    /**
     * Draw the entity given the rendering context and our RenderConfig
     * @param context context to draw with
     * @param config config for styling the rendering
     */
    draw(context: CanvasRenderingContext2D, config: RenderConfig): void;
}

/**
 * Draw a line between a list of vertices
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
export function drawLine(
    points: Point[],
    context: CanvasRenderingContext2D,
    config: RenderConfig
): void {
    let prev = points[points.length - 1];
    for (let current of points) {
        context.beginPath();
        context.strokeStyle = config.lineColor;
        context.moveTo(prev.x, prev.y);
        context.lineTo(current.x, current.y);
        context.stroke();
        context.closePath();
        prev = current;
    }
}
