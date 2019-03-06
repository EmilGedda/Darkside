---
layout: post
title:  "Colors and the visible spectrum"
date:   2019-03-06 15:31:00 +0100
---

For our simulation, accurate rendering of colors will be of huge importance.
Since we are simulating light, our simulation will be useless unless we represent the simulation correct visually.

## Colors

Color are what we call the human visual perception of different wavelengths of light that hit the human eye. The range of all wavelengths of light that are visible to humans is known as the [visible spectrum](https://en.wikipedia.org/wiki/Visible_spectrum). The visible spectrum can be represented using what is known as the [CIE 1931 color space](https://en.wikipedia.org/wiki/CIE_1931_color_space). Colors in this space are represented by three values, *X*, *Y*, and *Z*.

### CIE 1931 color space chromaticity diagram
![CIE 1931 color space chromaticity diagram](/Darkside/assets/CIE1931xy.png)

To render our different wavelengths of light in our simulation, we must somehow translate the wavelengths to a digital representation of a color. A digital representation of color will not contain all colors visible to the human eye, much like floating point numbers cannot accurately represent all decimal numbers. A subset of colors are known as a [gamut](https://en.wikipedia.org/wiki/Gamut). The word is most commonly used to refer to the subset of colors which can be accurately represented in a given circumstance. In our simulation, the gamut will be the range of colors we can accurately represent using the [sRGB color model](https://en.wikipedia.org/wiki/RGB_color_model). The sRGB color uses three values, red, blue, and green, to together represent a single color.

### sRGB gamut
![sRGB gamut](/Darkside/assets/sRGBgamut.png)

We can see how this only allows us to display a subset, or gamut, of the entire visible spectrum.

## Converting wavelength to sRGB

To convert wavelengths to CIE color in our code, we will utilize analytical  approximations as defined in the paper [Simple Analytic Approximations to the CIE XYZ Color Matching Functions](http://jcgt.org/published/0002/02/01/) published in [The Journal of Computer Graphics Techniques](http://jcgt.org/).

### Code from *Simple Analytic Approximations to the CIE XYZ Color Matching Functions*:
```c
// Inputs:
Wavelength in nanometers
float xFit_1931( float wave )
{
    float t1 = (wave-442.0f)*((wave<442.0f)?0.0624f:0.0374f);
    float t2 = (wave-599.8f)*((wave<599.8f)?0.0264f:0.0323f);
    float t3 = (wave-501.1f)*((wave<501.1f)?0.0490f:0.0382f);
    return 0.362f*expf(-0.5f*t1*t1) + 1.056f*expf(-0.5f*t2*t2)
    - 0.065f*expf(-0.5f*t3*t3);
}

float yFit_1931( float wave )
{
    float t1 = (wave-568.8f)*((wave<568.8f)?0.0213f:0.0247f);
    float t2 = (wave-530.9f)*((wave<530.9f)?0.0613f:0.0322f);
    return 0.821f*exp(-0.5f*t1*t1) + 0.286f*expf(-0.5f*t2*t2);
}

float zFit_1931( float wave )
{
    float t1 = (wave-437.0f)*((wave<437.0f)?0.0845f:0.0278f);
    float t2 = (wave-459.0f)*((wave<459.0f)?0.0385f:0.0725f);
    return
}
```

We can see here how the *X*, *Y*, and *Z* values of the CIE color space are approximated using only the wavelength of the light.

Finally, we must convert these values to sRGB to be able to render them to a monitor. This can be done by using the following equation:

### CIE to sRGB
![CIE to sRGB](/Darkside/assets/cietosrgb.svg)

This will give us the *R*, *G*, and *B* values we need to render colors in our simulation.

*// Anders & Emil*
