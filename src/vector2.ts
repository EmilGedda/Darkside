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
