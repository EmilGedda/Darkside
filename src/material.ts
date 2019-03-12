import fs from 'fs';
import path from 'path';

/**
 * Material name constants.
 */
export enum MATERIAL {
    SCHOTT_BK7 = 'SCHOTT_BK7',
    SCHOTT_BAF10 = 'SCHOTT_BAF10',
}

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

    public constructor(material: MATERIAL = MATERIAL.SCHOTT_BK7) {
        const jsonPath = path.join(__dirname, 'data', 'materials.json');
        const json = JSON.parse(fs.readFileSync(jsonPath).toString());
        const coeffs = json[material];

        this.b1 = coeffs[0];
        this.b2 = coeffs[1];
        this.b3 = coeffs[2];
        this.c1 = coeffs[3];
        this.c2 = coeffs[4];
        this.c3 = coeffs[5];
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
