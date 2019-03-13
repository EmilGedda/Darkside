import { Material } from './material';
import { drawLine } from './draw';
// Schott BK7 glass
const SCHOTT_BK7 = new Material(1.03961212, 0.231792344, 0.231792344, 6.00069867e-3, 2.00179144e-2, 1.03560653e2);
/**
 * A prism for use in simulation
 */
export class Prism {
    constructor(vertices, material = SCHOTT_BK7) {
        this.vertices = vertices;
        this.material = material;
    }
    draw(context, config) {
        drawLine(this.vertices, context, config.lineColor);
    }
}
//# sourceMappingURL=prism.js.map