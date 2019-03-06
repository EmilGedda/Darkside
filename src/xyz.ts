import { RGB } from './rgb';

/**
 * XYZ Color Model.
 */
export class XYZ {
    public x: number;
    public y: number;
    public z: number;

    public constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Convert to sRGB w/ Standard Illuminant D65
     * @returns RGB equivalent of XYZ object
     */
    public toRGB(): RGB {
        // Linear transformation for XYZ to RGB
        let r = 3.2404542 * this.x - 1.5371385 * this.y - 0.4985314 * this.z;
        let g = -0.969266 * this.x + 1.8760108 * this.y + 0.041556 * this.z;
        let b = 0.0556434 * this.x - 0.2040259 * this.y + 1.0572252 * this.z;

        // Gamma Correction
        r = Math.floor(this.gammaCorr(r) * 255);
        g = Math.floor(this.gammaCorr(g) * 255);
        b = Math.floor(this.gammaCorr(b) * 255);

        return new RGB(r, g, b);
    }

    /**
     * Gamma correction for RGB, r, g, and b, values assuming Standard Illuminant D65.
     * https://en.wikipedia.org/wiki/SRGB#The_forward_transformation_(CIE_XYZ_to_sRGB)
     * @param u value to be gamma corrected
     * @returns gamma corrected value u
     */
    private gammaCorrection(u: number): number {
        u = Math.max(u, 0);
        if (Math.abs(u) < 0.0031308) return 12.92 * u;
        return 1.055 * u ** (1 / 2.4) - 0.055;
    }
}
