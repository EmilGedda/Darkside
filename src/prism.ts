import { Polygon } from './polygon';
import { Vector2 } from './vector2';
import { Material } from './material';
import { Drawable, drawLine } from './draw';
import { RenderConfig } from './renderconfig';

// Schott BK7 glass
const SCHOTT_BK7 = new Material();

/**
 * A prism for use in simulation
 */
export class Prism implements Polygon, Drawable {
    public vertices: Vector2[];
    public material: Material;

    public constructor(vertices: Vector2[], material: Material = SCHOTT_BK7) {
        this.vertices = vertices;
        this.material = material;
    }

    public draw(context: CanvasRenderingContext2D, config: RenderConfig): void {
        drawLine(this.vertices, context, config.lineColor);
    }
}
