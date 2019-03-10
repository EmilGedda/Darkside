/**
 * Draw a line between a list of vertices
 * @param points a list of points to draw lines between, including between the first and last vertex
 * @param condig config for styling the rendering
 */
export function drawLine(points, context, config) {
    let prev = points[points.length - 1];
    for (let current of points) {
        context.beginPath();
        context.strokeStyle = config.lineColor;
        context.moveTo(prev.x, prev.y);
        context.lineTo(current.x, current.y);
        context.stroke();
        context.closePath();
        prev = current;
    }
}
//# sourceMappingURL=draw.js.map