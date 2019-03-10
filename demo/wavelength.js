import { XYZ } from './xyz';
/**
 * Wavelength defined by nanometers.
 * Contains method for converting to the XYZ color model which in turn can be
 * converted into sRGB.
 */
export class Wavelength {
    constructor(wavelength) {
        this.value = wavelength;
    }
    /**
     * Convert wavelength to RGB color model representation.
     * @returns RGB color model representation
     */
    toRGB() {
        return this.toXYZ().toRGB();
    }
    /**
     * Convert wavelength to XYZ color model representation.
     * @returns RGB color model representation
     */
    toXYZ() {
        return new XYZ(this.x(), this.y(), this.z());
    }
    x() {
        let t1 = (this.value - 442.0) * (this.value < 442.0 ? 0.0624 : 0.0374);
        let t2 = (this.value - 599.8) * (this.value < 599.8 ? 0.0264 : 0.0323);
        let t3 = (this.value - 501.1) * (this.value < 501.1 ? 0.049 : 0.0382);
        return (0.362 * Math.exp(-0.5 * t1 * t1) +
            1.056 * Math.exp(-0.5 * t2 * t2) -
            0.065 * Math.exp(-0.5 * t3 * t3));
    }
    y() {
        let t1 = (this.value - 568.8) * (this.value < 568.8 ? 0.0213 : 0.0247);
        let t2 = (this.value - 530.9) * (this.value < 530.9 ? 0.0613 : 0.0322);
        return 0.821 * Math.exp(-0.5 * t1 * t1) + 0.286 * Math.exp(-0.5 * t2 * t2);
    }
    z() {
        let t1 = (this.value - 437.0) * (this.value < 437.0 ? 0.0845 : 0.0278);
        let t2 = (this.value - 459.0) * (this.value < 459.0 ? 0.0385 : 0.0725);
        return 1.217 * Math.exp(-0.5 * t1 * t1) + 0.681 * Math.exp(-0.5 * t2 * t2);
    }
}
//# sourceMappingURL=wavelength.js.map