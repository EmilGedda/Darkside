---
layout: post
title:  "Sellmeier's Equation"
date:   2019-03-02 22:10:30 +0100
---

The [Sellmeieier equation](https://en.wikipedia.org/wiki/Sellmeier_equation) will be an essential part of our simulation. It gives us the refractive index used to calculate refraction, based on the wavelength. This refractive index is in turn needed for [Snell's Law](https://en.wikipedia.org/wiki/Snell%27s_law) which we will use to calculate the angles at which light "bends" when passing thorugh different media.

## Translating it to code

As mentioned in our previous post about our class diagram, we want to create a *Material* class that we can use to calculate refractive indices for different materials and wavelengths.

### src/material.ts
```typescript
/**
 * Material defined by Sellmeier coefficients.
 */
export class Material {
    private b1: number;
    private b2: number;
    private b3: number;
    private c1: number;
    private c2: number;
    private c3: number;

    public constructor(
        b1: number,
        b2: number,
        b3: number,
        c1: number,
        c2: number,
        c3: number,
    ) {
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }

    /**
     * Calculate the refractive index of the material for a given wavelength
     * using the Sellmeier equation.
     *
     * @param lambda Wavelength in vacuum
     *
     * @returns The refractive index of the material for a given wavelength.
     */
    public refractiveIndex(lambda: number): number {
        const a = (this.b1 * lambda ** 2) / (lambda ** 2 - this.c1);
        const b = (this.b2 * lambda ** 2) / (lambda ** 2 - this.c2);
        const c = (this.b3 * lambda ** 2) / (lambda ** 2 - this.c3);
        return Math.sqrt(1 + a + b + c);
    }
}
```

Here we can see our first steps creating the Material class. It now features a constructor that takes 6 Sellmeier coefficients, and a method for calculating the refractive index given a wavelength, using the Sellmeier equation.

To make sure this works, we wrote some tests:

### test/material.ts

```typescript
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
```

Here we try out three different wavelengths on two different materials. For this we chose the *BK7* and *BAF10* glasses, both from German manufacturer [Schott AG](https://www.schott.com/).

The test values were retrieved from https://refractiveindex.info/, a database of optical specifications for a wide range of different materials.

For our next post, hopefully we will get some graphics going!

*// Anders & Emil*
