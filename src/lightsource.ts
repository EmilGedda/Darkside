import { Vector2 } from "./vector2";

type Wavelength = number;
type Radians = number;
type Point = Vector2;

export class LightSource {
    rotation: Radians;
    position: Point;
    spectrum: Wavelength[];
    constructor(position: Point = new Vector2(0, 0), rotation: Radians = 0, spectrum : Wavelength[] = [])  {
        this.position = position;
        this.spectrum = spectrum;
        this.rotation = rotation;
    }
}
