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

    /**
     * Creates a hex representation of the RGB value
     * @returns the string in hex: #XXXXXX
     */
    public toString(): string {
        return (
            '#' +
            this.r.toString(16).padStart(2, '0') +
            this.g.toString(16).padStart(2, '0') +
            this.b.toString(16).padStart(2, '0')
        );
    }
}
