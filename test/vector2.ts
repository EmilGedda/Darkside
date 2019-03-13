import { Vector2, EquilateralTriangle } from '../src/vector2';


function randomVectors(amount: number): Vector2[] {
    let vectors: Vector2[] = [];
    for(let i = 0; i < amount; i++) {
        vectors.push(new Vector2(
            Math.random() * 10000,
            Math.random() * 10000,
        ));
    }
    return vectors;
}

test('Vector2 construction', async () => {
    let v = new Vector2();
    expect(v.x).toBe(0);
    expect(v.y).toBe(0);

    let x = 1;
    let y = 2;
    v = new Vector2(x, y);
    expect(v.x).toBe(x);
    expect(v.y).toBe(y);
});

test('Vector2 toRadians()', async () => {
    let v = new Vector2(1, 0);
    expect(v.toRadians()).toBeCloseTo(0);

    v = new Vector2(-1, 0);
    expect(v.toRadians()).toBeCloseTo(Math.PI);

    v = new Vector2(0, -1);
    expect(v.toRadians()).toBeCloseTo(-Math.PI / 2);

    v = new Vector2(0, 0);
    expect(v.toRadians()).toBeCloseTo(0);
});

test('Vector2 fromRadians()', async () => {
    let v1 = new Vector2(1, 0);
    let theta = 0;
    let v2 = Vector2.fromRadians(theta);
    expect(v1.x).toBeCloseTo(v2.x);
    expect(v1.y).toBeCloseTo(v2.y);

    v1 = new Vector2(-1, 0);
    theta = Math.PI;
    v2 = Vector2.fromRadians(theta);
    expect(v1.x).toBeCloseTo(v2.x);
    expect(v1.y).toBeCloseTo(v2.y);

    v1 = new Vector2(0, -1);
    theta = -Math.PI / 2;
    v2 = Vector2.fromRadians(theta);
    expect(v1.x).toBeCloseTo(v2.x);
    expect(v1.y).toBeCloseTo(v2.y);
});

test('Vector2 EquilateralTriangle()', async () => {
    const origo = new Vector2(0, 0);
    expect(
        EquilateralTriangle(origo, 0)
            .map(v => v.x + v.y)
            .reduce((a, b) => a + b)
    ).toBeCloseTo(0);

    const steps = 1000;
    for (let i = 0; i < steps; i++) {
        const rotation = i * ((2 * Math.PI) / steps);
        const triangles = EquilateralTriangle(origo, 1, rotation);
        for (let j = 0; j < 3; j++) {
            const unit = Vector2.fromRadians(
                -rotation - // they rotation opposite directions
                Math.PI / 2 - // with a 90 degree offset
                    (j * (2 * Math.PI)) / 3 // offset of every vertex in our equalateral triangle
            );
            const { x, y } = triangles[j];
            expect(x).toBeCloseTo(unit.x);
            expect(y).toBeCloseTo(unit.y);
        }
    }
});

test('Vector2 normalize()', async () => {
    randomVectors(1000).map(v => {
        const { x, y }= v.normalize();
        const unit = Vector2.fromRadians(v.toRadians());
        expect(x).toBeCloseTo(unit.x);
        expect(y).toBeCloseTo(unit.y);
    });
});

test('Vector2 magnitude()', async () => {
    randomVectors(1000).map(v => {
        const scaled = Vector2.fromRadians(v.toRadians()).scale(v.magnitude());
        expect(v.x).toBeCloseTo(scaled.x);
        expect(v.y).toBeCloseTo(scaled.y);
    });
});
