import { RGB } from '../src/rgb';

test('RGB construction', async () => {
    let rgb = new RGB();
    expect(rgb.r).toBe(0);
    expect(rgb.g).toBe(0);
    expect(rgb.b).toBe(0);

    let r = 1;
    let g = 2;
    let b = 3;
    rgb = new RGB(r, g, b);
    expect(rgb.r).toBe(r);
    expect(rgb.g).toBe(g);
    expect(rgb.b).toBe(b);

    rgb = new RGB(0, -1, -999);
    expect(rgb.r).toBe(0);
    expect(rgb.g).toBe(0);
    expect(rgb.b).toBe(0);

    rgb = new RGB(255, 256, 999);
    expect(rgb.r).toBe(255);
    expect(rgb.g).toBe(255);
    expect(rgb.b).toBe(255);
});
