/**
 * sRGB Color Model.
 */
export class RGB {
    public r: number;
    public g: number;
    public b: number;

    public constructor(r: number = 0, g: number = 0, b: number = 0) {
        this.r = Math.min(Math.max(r, 0), 255);
        this.g = Math.min(Math.max(g, 0), 255);
        this.b = Math.min(Math.max(b, 0), 255);
    }
}
