import materials from './data/materials.json';
/**
 * Material name constants.
 */
export var MATERIAL;
(function (MATERIAL) {
    MATERIAL["SCHOTT_BK7"] = "SCHOTT_BK7";
    MATERIAL["SCHOTT_BAF10"] = "SCHOTT_BAF10";
})(MATERIAL || (MATERIAL = {}));
/**
 * Material defined by Sellmeier coefficients.
 */
export class Material {
    constructor(material = MATERIAL.SCHOTT_BK7) {
        const coeffs = materials[material];
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
    refractiveIndex(wavelength) {
        const a = (this.b1 * wavelength ** 2) / (wavelength ** 2 - this.c1);
        const b = (this.b2 * wavelength ** 2) / (wavelength ** 2 - this.c2);
        const c = (this.b3 * wavelength ** 2) / (wavelength ** 2 - this.c3);
        return Math.sqrt(1 + a + b + c);
    }
}
//# sourceMappingURL=material.js.map