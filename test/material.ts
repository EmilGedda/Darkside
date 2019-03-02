import { Material } from '../src/material';

// Schott BK7 glass
const SCHOTT_BK7 = new Material(
    1.03961212,
    0.231792344,
    0.231792344,
    6.00069867e-3,
    2.00179144e-2,
    1.03560653e2,
);
// Schott BAF10 glass
const SCHOTT_BAF10 = new Material(
    1.5851495,
    0.143559385,
    1.08521269,
    0.926681282e-2,
    0.0424489805,
    1.05613573e2,
);

test('Material construction', async () => {
    new Material(0, 0, 0, 0, 0, 0);
});

test('Material.refractiveIndex(lambda: number): number', async () => {
    expect(SCHOTT_BK7.refractiveIndex(0.43)).toBeCloseTo(1.5273);
    expect(SCHOTT_BK7.refractiveIndex(0.6)).toBeCloseTo(1.5163);
    expect(SCHOTT_BK7.refractiveIndex(0.77)).toBeCloseTo(1.5114);
    expect(SCHOTT_BAF10.refractiveIndex(0.43)).toBeCloseTo(1.6891);
    expect(SCHOTT_BAF10.refractiveIndex(0.6)).toBeCloseTo(1.6692);
    expect(SCHOTT_BAF10.refractiveIndex(0.77)).toBeCloseTo(1.661);
});
