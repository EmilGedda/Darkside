import { Vector2 } from './vector2';
import { RenderConfig } from './renderconfig';
type Point = Vector2;

export interface Drawable {
    draw(context: CanvasRenderingContext2D, config: RenderConfig): void;
}

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
