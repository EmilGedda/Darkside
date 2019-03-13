import { Material } from './material';
import { drawLine } from './draw';
// Schott BK7 glass
const SCHOTT_BK7 = new Material();
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