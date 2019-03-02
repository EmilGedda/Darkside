import { Vector2 } from '../src/vector2';

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
