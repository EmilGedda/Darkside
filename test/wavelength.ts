import { Wavelength } from '../src/wavelength';

test('Wavelength construction', async () => {
    let wl = new Wavelength(500);
    expect(wl.value).toBe(500);
});

test('Wavelength.toXYZ()', async () => {
    let wl = new Wavelength(380);
    let xyz = wl.toXYZ();

    expect(xyz.x).toBeCloseTo(0.0002035351490246239);
    expect(xyz.y).toBeCloseTo(0.0002527216161851356);
    expect(xyz.z).toBeCloseTo(0.006685041076624995);

    wl = new Wavelength(450);
    xyz = wl.toXYZ();

    expect(xyz.x).toBeCloseTo(0.34375002796377574);
    expect(xyz.y).toBeCloseTo(0.033414799531508076);
    expect(xyz.z).toBeCloseTo(1.7813850393059028);

    wl = new Wavelength(550);
    xyz = wl.toXYZ();

    expect(xyz.x).toBeCloseTo(0.43371467213236936);
    expect(xyz.y).toBeCloseTo(0.994462468844167);
    expect(xyz.z).toBeCloseTo(0.008757821094157462);

    wl = new Wavelength(650);
    xyz = wl.toXYZ();

    expect(xyz.x).toBeCloseTo(0.2836318733808084);
    expect(xyz.y).toBeCloseTo(0.11004534326898177);
    expect(xyz.z).toBeCloseTo(2.9611585031324308e-8);

    wl = new Wavelength(740);
    xyz = wl.toXYZ();
});
