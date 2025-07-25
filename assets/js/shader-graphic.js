// Jack Campbell's Header Shader Graphic - Instance Mode
// Vertex shader code as a string
const headerShaderVertexCode = `
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
const headerShaderFragmentCode = `
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
    
    float dist = distance(st,vec2(sin(time/5.0),cos(time/5.0)));
    st = tile(st,1.0);
    
    st = rotate2D(st,dist/(mdist/5.0)*PI*2.0);
    
    gl_FragColor = vec4(vec3(concentricCircles(st, vec2(0.0,0.0), 8.0, 8.0),concentricCircles(st, vec2(0.0,0.0), 12.0, 12.0),concentricCircles(st, vec2(0.0,0.0), 16.0, 12.0)),1.0);
}
`;

// Header Shader Class
class HeaderShader {
  constructor() {
    this.p5Instance = null;
    this.theShader = null;
    this.startTime = null;
    this.isInitialized = false;
    this.initializeShader();
  }

  initializeShader() {
    // Wait for DOM to be ready and container to exist
    const container = document.getElementById('shader-container');
    if (!container) {
      setTimeout(() => this.initializeShader(), 100);
      return;
    }
    
    // Check if already initialized
    if (this.isInitialized || container.querySelector('canvas')) {
      return;
    }

    // Store start time in sessionStorage to persist across page loads
    if (!sessionStorage.getItem('headerShaderStartTime')) {
      sessionStorage.setItem('headerShaderStartTime', Date.now().toString());
    }
    this.startTime = parseInt(sessionStorage.getItem('headerShaderStartTime'));

    // Create p5.js instance
    this.p5Instance = new p5((p) => {
      p.setup = () => {
        const canvas = p.createCanvas(60, 40, p.WEBGL);
        canvas.parent('shader-container');
        
        p.noStroke();
        p.angleMode(p.DEGREES);
        
        this.theShader = p.createShader(headerShaderVertexCode, headerShaderFragmentCode);
        this.isInitialized = true;
      };

      p.draw = () => {
        if (!this.theShader) return;
        
        p.clear(); // Completely transparent background

        // Use consistent time based on start time for continuous animation
        const currentTime = (Date.now() - this.startTime) / 1000.0;
        
        // Send uniform values to the shader
        this.theShader.setUniform('resolution', [p.width, p.height]);
        this.theShader.setUniform('time', currentTime);
        this.theShader.setUniform('mouse', [p.mouseX, p.map(p.mouseY, 0, p.height, p.height, 0)]);

        p.shader(this.theShader);
        
        // Create a simple animated shape for the header
        p.translate(0, 0, 0);
        p.push();
        p.rotateY(currentTime * 1000 * 0.001);
        p.rotateX(currentTime * 1000 * 0.0005);
        p.sphere(15);
        p.pop();
      };
    });
  }
}

// Initialize the header shader
let headerShaderInstance = null;

function initHeaderShader() {
  if (!headerShaderInstance) {
    headerShaderInstance = new HeaderShader();
  }
}

// Auto-initialize when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeaderShader);
} else {
  setTimeout(initHeaderShader, 50);
} 