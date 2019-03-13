import { RGB } from './rgb';
/**
 * Holds color of lines, color of background and so on.
 * Defines the style of the render, for `themes`
 */
export class RenderConfig {
    constructor(backgroundColor = '#000000', lineColor = new RGB(255, 255, 255), lineWidth = 10, lightsourceColor = '#FFFFFF', lightsourceRadius = 20) {
        this.backgroundColor = backgroundColor;
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.lightsourceColor = lightsourceColor;
        this.lightsourceRadius = lightsourceRadius;
    }
}
//# sourceMappingURL=renderconfig.js.map