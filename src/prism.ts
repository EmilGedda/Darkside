import { Vector2 } from './vector2';
import { Material } from './material';
import { Drawable, fillPolygon } from './draw';
import { RenderConfig } from './renderconfig';

// Schott BK7 glass
const SCHOTT_BK7 = new Material();

/**
 * A prism for use in simulation
 */
export class Prism implements Drawable {
    public vertices: Vector2[];
    public inner: Vector2[];
    public material: Material;

    public constructor(vertices: Vector2[], material: Material = SCHOTT_BK7) {
        this.vertices = vertices;
        this.inner = Prism.calculateInnerVertices(vertices);
        this.material = material;
    }

    private static calculateInnerVertices(vertices: Vector2[]): Vector2[] {
        const offset = 5;
        let list: Vector2[] = [];
        const center = vertices.reduce((a, b) => a.plus(b)).scale(1 / vertices.length);
        for (let vertex of vertices) {
            const fromCenter = vertex.minus(center);
            list.push(
                fromCenter
                    .normalize()
                    .scale(fromCenter.magnitude() - offset)
                    .plus(center)
            );
        }
        return list;
    }

    public setVertices(vertices: Vector2[]): void {
        this.vertices = vertices;
        this.inner = Prism.calculateInnerVertices(vertices);
    }

    public draw(context: CanvasRenderingContext2D, config: RenderConfig, timeDelta: number): void {
        context.shadowBlur = 4;
        context.shadowColor = config.lineColor.toString();
        fillPolygon(this.vertices, context, config.lineColor);
        context.shadowBlur = 5;
        context.shadowColor = config.backgroundColor.toString();
        fillPolygon(this.inner, context, config.backgroundColor);
    }
}
