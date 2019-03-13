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

    /**
     * Creates a new Vector  from this which is scaled by the given constant
     * @param scale the scale for the Vector2
     * @return The longer Vector2
     */
    public scale(k: number): Vector2 {
        return new Vector2(this.x * k, this.y * k);
    }

    /**
     * Returns a new Vector2 which is the current Vector2 moved by this offset in both x and y
     * @param The position offset
     * @return The relocated Vector2
     */
    public plus(rhs: Vector2): Vector2 {
        return new Vector2(this.x + rhs.x, this.y + rhs.y);
    }

    /**
     * Returns the magnitude of a Vector2
     * @return the magnitude
     */
    public magnitude(): number {
        return Math.hypot(this.x, this.y);
    }

    /**
     * Returns a normalized copy of this Vector2
     * @return the normalized Vector2
     */
    public normalize(): Vector2 {
        return this.scale(1 / this.magnitude());
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
