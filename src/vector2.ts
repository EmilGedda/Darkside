/**
 * Two dimensional vector.
 */
export class Vector2 {
    public x: number;
    public y: number;

    public constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Calculate direction of vector.
     * @return rotational orientation of vector in radians
     */
    public toRadians(): number {
        return Math.atan2(this.y, this.x);
    }

    /**
     * Create a unit vector given an angle.
     * @param theta angle in radians
     * @return unit vector with direction theta
     */
    public static fromRadians(theta: number): Vector2 {
        return new Vector2(Math.cos(theta), Math.sin(theta));
    }
}

/**
 * Create a equalateral triangle given a center, radius, and a rotation
 * @param center center point of the triangle
 * @param radius the distance from the center to the vertices
 * @param rotation the rotation of the triangle
 * @return the three Vector2 which make up the triangle
 */
export function EquilateralTriangle(
    center: Vector2,
    radius: number,
    rotation: number = 0
): Vector2[] {
    let x = center.x;
    let y = center.y;
    return [
        new Vector2(x - radius * Math.sin(rotation), y - radius * Math.cos(rotation)),
        new Vector2(
            x - radius * Math.sin(rotation + (2 * Math.PI) / 3),
            y - radius * Math.cos(rotation + (2 * Math.PI) / 3)
        ),
        new Vector2(
            x - radius * Math.sin(rotation + (4 * Math.PI) / 3),
            y - radius * Math.cos(rotation + (4 * Math.PI) / 3)
        ),
    ];
}
