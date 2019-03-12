import { Material, MATERIAL } from '../src/material';
import fs from 'fs';
import path from 'path';

test('Material constants file', async () => {
    const jsonPath = path.join(__dirname, '..', 'src', 'data', 'materials.json');
    fs.readFile(jsonPath, (err, data) => {
        expect(err).toBeNull();
        JSON.parse(data.toString());
    });
});

test('Material construction', async () => {
    new Material();
    new Material(MATERIAL.SCHOTT_BK7);
    new Material(MATERIAL.SCHOTT_BAF10);
});

test('Material.refractiveIndex(lambda: number): number', async () => {
    const bk7 = new Material(MATERIAL.SCHOTT_BK7); // Schott BK7 glass
    const baf10 = new Material(MATERIAL.SCHOTT_BAF10); // Schott BAF10 glass

    expect(bk7.refractiveIndex(0.43)).toBeCloseTo(1.5273);
    expect(bk7.refractiveIndex(0.6)).toBeCloseTo(1.5163);
    expect(bk7.refractiveIndex(0.77)).toBeCloseTo(1.5114);
    expect(baf10.refractiveIndex(0.43)).toBeCloseTo(1.6891);
    expect(baf10.refractiveIndex(0.6)).toBeCloseTo(1.6692);
    expect(baf10.refractiveIndex(0.77)).toBeCloseTo(1.661);
});
