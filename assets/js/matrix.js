// matrix.js

// Translation matrix
function translation(x, y, z) {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    ];
}

// Rotation matrix around the X axis
function rotationX(t) {
    let c = Math.cos(t), s = Math.sin(t);
    return [
        1, 0, 0, 0,
        0, c, -s, 0,
        0, s, c, 0,
        0, 0, 0, 1
    ];
}

// Rotation matrix around the Y axis
function rotationY(t) {
    let c = Math.cos(t), s = Math.sin(t);
    return [
        c, 0, s, 0,
        0, 1, 0, 0,
        -s, 0, c, 0,
        0, 0, 0, 1
    ];
}

// Rotation matrix around the Z axis
function rotationZ(t) {
    let c = Math.cos(t), s = Math.sin(t);
    return [
        c, -s, 0, 0,
        s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
}

// Scale matrix
function scale(x, y, z) {
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    ];
}

// Multiply two 4x4 matrices
function multiply(a, b) {
    let result = [];
    for (let i = 0; i < 16; i++) result[i] = 0;
    for (let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++)
            for (let k = 0; k < 4; k++)
                result[i + 4 * j] += a[i + 4 * k] * b[k + 4 * j];
    return result;
}

// Matrix transpose
function transpose(m) {
    return [
        m[0], m[4], m[8], m[12],
        m[1], m[5], m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15]
    ];
}

// Matrix inversion
function matrixInverse(src) {
    let dst = [], det = 0, cofactor = (c, r) => {
        let s = (i, j) => src[c + i & 3 | (r + j & 3) << 2];
        return (c + r & 1 ? -1 : 1) * (
            (s(1,1) * (s(2,2) * s(3,3) - s(3,2) * s(2,3)))
            - (s(2,1) * (s(1,2) * s(3,3) - s(3,2) * s(1,3)))
            + (s(3,1) * (s(1,2) * s(2,3) - s(2,2) * s(1,3)))
        );
    };
    for (let n = 0; n < 16; n++) dst.push(cofactor(n >> 2, n & 3));
    for (let n = 0; n < 4; n++) det += src[n] * dst[n << 2];
    for (let n = 0; n < 16; n++) dst[n] /= det;
    return dst;
}
