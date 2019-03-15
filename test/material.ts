import { Material, MATERIAL } from '../src/material';
// @ts-ignore
import materials from './../src/data/materials.json';

test('Material constants file', async () => {
    expect(materials).toBeDefined;
});

test('Material construction', async () => {
    new Material();
    new Material(MATERIAL.SCHOTT_BK7);
    new Material(MATERIAL.SCHOTT_BAF10);
});

test('Material.refractiveIndex(lambda: number): number', async () => {
    const bk7 = new Material(MATERIAL.SCHOTT_BK7); // Schott BK7 glass
    const baf10 = new Material(MATERIAL.SCHOTT_BAF10); // Schott BAF10 glass
    const sf10 = new Material(MATERIAL.SCHOOTT_SF10); // Schott SF10 flint glass

    expect(bk7.refractiveIndex(430)).toBeCloseTo(1.5273);
    expect(bk7.refractiveIndex(600)).toBeCloseTo(1.5163);
    expect(bk7.refractiveIndex(770)).toBeCloseTo(1.5114);
    expect(baf10.refractiveIndex(430)).toBeCloseTo(1.6891);
    expect(baf10.refractiveIndex(600)).toBeCloseTo(1.6692);
    expect(baf10.refractiveIndex(770)).toBeCloseTo(1.661);
    expect(sf10.refractiveIndex(430)).toBeCloseTo(1.7643);
    expect(sf10.refractiveIndex(600)).toBeCloseTo(1.7267);
    expect(sf10.refractiveIndex(770)).toBeCloseTo(1.7128);
});
