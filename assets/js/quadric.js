// quadric.js

// Define quadric matrices for different shapes

const sphere = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
];

const xParaboloid = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 0
];

const yParaboloid = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 0
];

const zParaboloid = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
];

// Slabs for clipping in x, y, and z directions
const xSlab = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -0.5
];

const ySlab = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -0.5
];

const zSlab = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -0.5
];

// Cylinders along x, y, and z axes
const xCylinder = [
    0, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
];

const yCylinder = [
    1, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, -1
];

const zCylinder = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, -1
];

// "Everywhere" matrix for objects that are always intersected
const everywhere = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 1
];

// Export quadric matrices so they are available in your shader
const quadricShapes = {
    sphere,
    xParaboloid,
    yParaboloid,
    zParaboloid,
    xSlab,
    ySlab,
    zSlab,
    xCylinder,
    yCylinder,
    zCylinder,
    everywhere
};
