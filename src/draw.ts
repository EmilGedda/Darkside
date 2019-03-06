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
): void {}
