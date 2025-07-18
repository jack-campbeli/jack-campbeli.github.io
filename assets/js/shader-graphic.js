// Jack Campbell's Header Shader Graphic
// Vertex shader code as a string
let vertexShader = `
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTexCoord;

void main() {
  // Apply the camera transform
  vec4 viewModelPosition =
    uModelViewMatrix *
    vec4(aPosition, 1.0);

  // Tell WebGL where the vertex goes
  gl_Position =
    uProjectionMatrix *
    viewModelPosition;  

  // Pass along data to the fragment shader
  vTexCoord = aTexCoord;
}
`;

// Fragment shader code as a string
let fragmentShader = `
// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/
// rotate/tile functions from example by patricio gonzalez vivo
// @patriciogv ( patriciogonzalezvivo.com )

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;
varying vec2 vTexCoord;

vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

vec2 tile (vec2 _st, float _zoom) {
    _st *= _zoom;
    return fract(_st);
}

vec2 rotateTilePattern(vec2 _st){
    
    //  Scale the coordinate system by 2x2
    _st *= 2.0;
    
    //  Give each cell an index number
    //  according to its position
    float index = 0.0;
    index += step(1., mod(_st.x,2.0));
    index += step(1., mod(_st.y,2.0))*2.0;
    
    //      |
    //  2   |   3
    //      |
    //--------------
    //      |
    //  0   |   1
    //      |
    
    // Make each cell between 0.0 - 1.0
    _st = fract(_st);
    
    // Rotate each cell according to the index
    if(index == 1.0){
        //  Rotate cell 1 by 90 degrees
        _st = rotate2D(_st,PI*0.5);
    } else if(index == 2.0){
        //  Rotate cell 2 by -90 degrees
        _st = rotate2D(_st,PI*-0.5);
    } else if(index == 3.0){
        //  Rotate cell 3 by 180 degrees
        _st = rotate2D(_st,PI);
    }
    
    return _st;
}

float concentricCircles(in vec2 st, in vec2 radius, in float res, in float scale) {
    float dist = distance(st,radius);
    float pct = floor(dist*res)/scale;
    return pct;
}

void main (void) {
    vec2 st = vTexCoord;
    vec2 mst = gl_FragCoord.xy/resolution.xy;
    float mdist= distance(vec2(0.5,0.5), mst);
    
    float dist = distance(st,vec2(sin(time/5.0),cos(time/2.5)));
    st = tile(st,1.0);
    
    st = rotate2D(st,dist/(mdist/5.0)*PI*2.0);
    
    gl_FragColor = vec4(vec3(concentricCircles(st, vec2(0.0,0.0), 8.0, 8.0),concentricCircles(st, vec2(0.0,0.0), 12.0, 12.0),concentricCircles(st, vec2(0.0,0.0), 16.0, 12.0)),1.0);
}
`;

// This variable will hold our shader object
let theShader;
let shaderCanvas;
let startTime;

function setup() {
  // Wait for DOM to be ready and container to exist
  let container = document.getElementById('shader-container');
  if (!container) {
    // If container doesn't exist yet, wait and try again
    setTimeout(setup, 100);
    return;
  }
  
  // Create a smaller canvas for header display
  shaderCanvas = createCanvas(60, 40, WEBGL);
  shaderCanvas.parent('shader-container');
  
  noStroke();
  angleMode(DEGREES);
  
  // Store start time in sessionStorage to persist across page loads
  if (!sessionStorage.getItem('shaderStartTime')) {
    sessionStorage.setItem('shaderStartTime', Date.now().toString());
  }
  startTime = parseInt(sessionStorage.getItem('shaderStartTime'));

  // Create a shader object using the vertex shader and fragment shader strings
  theShader = createShader(vertexShader, fragmentShader);
}

function draw() {
  // Only draw if shader and canvas exist
  if (!theShader || !shaderCanvas) {
    return;
  }
  
  clear(); // Completely transparent background

  // Use consistent time based on start time for continuous animation
  let currentTime = (Date.now() - startTime) / 1000.0;
  
  // Send uniform values to the shader
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('time', currentTime);
  theShader.setUniform('mouse', [mouseX, map(mouseY, 0, height, height, 0)]);

  shader(theShader);
  
  // Create a simple animated shape for the header
  translate(0, 0, 0);
  push();
  rotateY(currentTime * 1000 * 0.001);
  rotateX(currentTime * 1000 * 0.0005);
  sphere(15);
  pop();
}

// Initialize the shader - this will be called when p5.js is ready
function initShader() {
  // Check if we already have a canvas running
  if (document.querySelector('#shader-container canvas')) {
    return; // Already initialized
  }
  
  // Ensure container exists
  let container = document.getElementById('shader-container');
  if (!container) {
    setTimeout(initShader, 50);
    return;
  }
  
  // Call p5.js setup
  if (typeof setup === 'function') {
    setup();
  }
}

// Try to initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShader);
} else {
  // DOM already loaded
  setTimeout(initShader, 50);
} 