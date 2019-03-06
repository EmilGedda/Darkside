import { Polygon } from './polygon'
import { Vector2 } from './vector2'
import { Material } from './material'

// Schott BK7 glass
const SCHOTT_BK7 = new Material(
    1.03961212,
    0.231792344,
    0.231792344,
    6.00069867e-3,
    2.00179144e-2,
    1.03560653e2,
);

export class Prism implements Polygon {
    vertices: Vector2[];
    material: Material;
    constructor(vertices: Vector2[], material: Material = SCHOTT_BK7) {
        this.vertices = vertices;
        this.material = material;
    }
}
