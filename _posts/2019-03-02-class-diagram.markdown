---
layout: post
title:  "First post"
date:   2019-03-02 21:40:30 +0100
---
To start our project off, we made a simple UML-like sketch of our software.

![Class Diagram](/assets/class-diagram.png)

We believe this will help us get an overview of what needs to be implemented for this simulation to work. Below are some short descriptions of the classes from the diagram.

### Main Classes

#### Grid
Represents the "playing field" of the simulation. It contains all the lights and prisms of the simulation as well as a method to run the simulation.

#### Light
Represents a light surce. This includes a position and rotation as well as a width specifying how wide the beam will be (the light will emit as a cone in 2D). Also contains the wavelength of the light as well as methods for translating it into RGB-color for rendering.

#### Prism
Represents a prism (surprise!). Fields include a an array of points for the vertices of the prism as well as a material definition which it uses to get the refraction index for a given wavelength. 

#### Material
Represents an optical material defined by [Sellmeier coefficients](https://en.wikipedia.org/wiki/Sellmeier_equation). This class will be responsible for calculating the refraction index for a given wavelength of light.



*// Anders & Emil*
