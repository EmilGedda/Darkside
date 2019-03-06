// To hold color of lines, color of background and so on.
export class RenderConfig {
    public readonly backgroundColor: string;
    public readonly lineColor: string;
    public readonly lineWidth: number;
    public readonly lightsourceColor: string;
    public readonly lightsourceRadius: number;

    public constructor(
        backgroundColor: string = '#000000',
        lineColor: string = '#FFFFFF',
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
