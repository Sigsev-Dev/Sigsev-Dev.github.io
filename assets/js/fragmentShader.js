let fragmentShader = `
    precision mediump float;
    uniform float uTime, uFL;
    uniform vec3 uCursor;
    uniform mat4 uA[` + NQ + `];
    uniform mat4 uB[` + NQ + `];
    uniform mat4 uC[` + NQ + `];
    varying vec3 vPos;

    vec3 bgColor = vec3(0.1, 0.1, 0.1); // Background color

    // Ray-quadratic intersection function, returns the entry and exit t-values
    vec2 rayQ(vec3 V, vec3 W, mat4 Q) {
        vec4 V_h = vec4(V, 1.0); // Homogeneous coordinates of ray origin
        vec4 W_h = vec4(W, 0.0); // Homogeneous coordinates of ray direction

        float a = dot(W_h, Q * W_h);
        float b = dot(W_h, Q * V_h) * 2.0;
        float c = dot(V_h, Q * V_h);

        float discriminant = b * b - 4.0 * a * c;
        if (discriminant < 0.0) return vec2(-1.0, -1.0); // No intersection

        float t1 = (-b - sqrt(discriminant)) / (2.0 * a);
        float t2 = (-b + sqrt(discriminant)) / (2.0 * a);

        return vec2(t1, t2);
    }

    // Intersection of three quadrics, returning t values, surface point, and normal
    mat3 rayQ3(vec3 V, vec3 W, mat4 A, mat4 B, mat4 C, int inOut) {
        vec2 tA = rayQ(V, W, A);
        vec2 tB = rayQ(V, W, B);
        vec2 tC = rayQ(V, W, C);

        // Find the max entry t and min exit t
        float tIn = max(max(tA.x, tB.x), tC.x);
        float tOut = min(min(tA.y, tB.y), tC.y);

        if (tIn > tOut) return mat3(-1.0); // No intersection

        // Compute the surface point P
        vec3 P = V + tIn * W;

        // Calculate the surface normal at P using the gradient of the quadric equation
        vec4 P_h = vec4(P, 1.0); // Homogeneous coordinates of the surface point
        vec3 N = vec3((A + transpose(A)) * P_h);
        N = normalize(N);

        // Return entry t and exit t, as well as surface point and normal
        return mat3(
            vec2(tIn, tOut), // First row: t values
            P,               // Second row: surface point P
            N                // Third row: surface normal N
        );
    }

    // Reflection calculation
    vec3 reflectRay(vec3 W, vec3 N) {
        return W - 2.0 * dot(N, W) * N;
    }

    void main(void) {
        vec3 color = bgColor;
        vec3 V = vec3(0.0);
        vec3 W = normalize(vec3(vPos.xy, -uFL));
        float tMin = 1000.0;

        // // Iterate over each quadric object
        // for (int i = 0; i < ` + NQ + `; i++) {
        //     mat3 result = rayQ3(V, W, uA[i], uB[i], uC[i], 0); // Intersect with 3 quadrics

        //     float tIn = result[0].x;
        //     float tOut = result[0].y;

        //     if (tIn < 0.0 || tOut < 0.0 || tIn >= tOut) continue;

        //     float t = (tIn < tMin) ? tIn : tMin;
        //     if (t < tMin) {
        //         tMin = t;
        //         vec3 P = result[1]; // Surface point P
        //         vec3 N = result[2]; // Surface normal N
        //         color = vec3(0.5) + 0.5 * N; // Shading based on normal

        //         // Reflection logic
        //         vec3 R = reflectRay(W, N);
        //         vec3 reflectionColor = vec3(0.0); // Placeholder for reflection
        //         color += reflectionColor;
        //     }
        // }

            if (vPos.x < 0.0) {
            color = vec3(1.0, 0.0, 0.0); // Red for left half of screen
            } else {
                color = vec3(0.0, 1.0, 0.0); // Green for right half of screen
                }

        gl_FragColor = vec4(sqrt(color), 1.0);
    }
`;

