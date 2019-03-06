import { XYZ } from '../src/xyz';

test('RGB construction', async () => {
    let xyz = new XYZ();
    expect(xyz.x).toBe(0);
    expect(xyz.y).toBe(0);
    expect(xyz.z).toBe(0);

    let x = 1;
    let y = 2;
    let z = 3;
    xyz = new XYZ(x, y, z);
    expect(xyz.x).toBe(x);
    expect(xyz.y).toBe(y);
    expect(xyz.z).toBe(z);
});

test('XYZ.toRGB()', async () => {
    let xyz = new XYZ(0.25, 0.4, 0.1);
    let rgb = xyz.toRGB();
    expect(rgb.r).toBe(106);
    expect(rgb.g).toBe(189);
    expect(rgb.b).toBe(54);

    xyz = new XYZ(0.4, 0.4, 0.4);
    rgb = xyz.toRGB();

    expect(rgb.r).toBe(184);
    expect(rgb.g).toBe(165);
    expect(rgb.b).toBe(162);

    xyz = new XYZ(0.6, 0.2, 0.4);
    rgb = xyz.toRGB();
    expect(rgb.r).toBe(255);
    expect(rgb.g).toBe(0);
    expect(rgb.b).toBe(172);

    xyz = new XYZ(0.2, 0.3, 0.65);
    rgb = xyz.toRGB();
    expect(rgb.r).toBe(0);
    expect(rgb.g).toBe(168);
    expect(rgb.b).toBe(208);
});
