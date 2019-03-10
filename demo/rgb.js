/**
 * sRGB Color Model.
 */
export class RGB {
    constructor(r = 0, g = 0, b = 0) {
        this.r = Math.min(Math.max(r, 0), 255);
        this.g = Math.min(Math.max(g, 0), 255);
        this.b = Math.min(Math.max(b, 0), 255);
    }
}
//# sourceMappingURL=rgb.js.map