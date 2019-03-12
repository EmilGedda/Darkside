import { RGB } from './rgb';

/**
 * Holds color of lines, color of background and so on.
 * Defines the style of the render, for `themes`
 */
export class RenderConfig {
    //TODO Colors should use the RGB classes instead of strings
    public readonly backgroundColor: string;
    public readonly lineColor: RGB;
    public readonly lineWidth: number;
    public readonly lightsourceColor: string;
    public readonly lightsourceRadius: number;

    public constructor(
        backgroundColor: string = '#000000',
        lineColor: RGB = new RGB(255, 255, 255),
        lineWidth: number = 10,
        lightsourceColor: string = '#FFFFFF',
        lightsourceRadius: number = 20
    ) {
        this.backgroundColor = backgroundColor;
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.lightsourceColor = lightsourceColor;
        this.lightsourceRadius = lightsourceRadius;
    }
}
