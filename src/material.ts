/**
 * Material defined by Sellmeier coefficients.
 */
export class Material {
    private b1: number;
    private b2: number;
    private b3: number;
    private c1: number;
    private c2: number;
    private c3: number;

    public constructor(
        b1: number,
        b2: number,
        b3: number,
        c1: number,
        c2: number,
        c3: number,
    ) {
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
    public refractiveIndex(wavelength: number): number {
        const a = (this.b1 * wavelength ** 2) / (wavelength ** 2 - this.c1);
        const b = (this.b2 * wavelength ** 2) / (wavelength ** 2 - this.c2);
        const c = (this.b3 * wavelength ** 2) / (wavelength ** 2 - this.c3);
        return Math.sqrt(1 + a + b + c);
    }
}
