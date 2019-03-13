/**
 * sRGB Color Model.
 */
export class RGB {
    constructor(r = 0, g = 0, b = 0) {
        this.r = Math.min(Math.max(r, 0), 255);
        this.g = Math.min(Math.max(g, 0), 255);
        this.b = Math.min(Math.max(b, 0), 255);
    }
    /**
     * Creates a hex representation of the RGB value
     * @returns the string in hex: #XXXXXX
     */
    toString() {
        return ('#' +
            this.r.toString(16).padStart(2, '0') +
            this.g.toString(16).padStart(2, '0') +
            this.b.toString(16).padStart(2, '0'));
    }
}
//# sourceMappingURL=rgb.js.map