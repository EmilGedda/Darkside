/**
 * Material defined by Sellmeier coefficients.
 */
export class Material {
    constructor(b1, b2, b3, c1, c2, c3) {
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }
    /**
     * Calculate the refractive index of the material for a given wavelength
     * using the Sellmeier equation.
     *
     * @param wavelength Wavelength in vacuum
     *
     * @returns The refractive index of the material for a given wavelength.
     */
    refractiveIndex(wavelength) {
        const a = (this.b1 * wavelength ** 2) / (wavelength ** 2 - this.c1);
        const b = (this.b2 * wavelength ** 2) / (wavelength ** 2 - this.c2);
        const c = (this.b3 * wavelength ** 2) / (wavelength ** 2 - this.c3);
        return Math.sqrt(1 + a + b + c);
    }
}
//# sourceMappingURL=material.js.map