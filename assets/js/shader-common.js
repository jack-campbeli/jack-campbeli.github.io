// Shared GLSL shaders and ShaderSphere class used by all shader instances

const shaderVertexCode = `
precision highp float;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
attribute vec4 aVertexColor;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying vec2 vTexCoord;

void main() {
  vec4 viewModelPosition =
    uModelViewMatrix *
    vec4(aPosition, 1.0);

  gl_Position =
    uProjectionMatrix *
    viewModelPosition;

  vTexCoord = aTexCoord;
}
`;

const shaderFragmentCode = `
// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/
// rotate/tile functions from example by patricio gonzalez vivo
// @patriciogv ( patriciogonzalezvivo.com )

#ifdef GL_ES
precision highp float;
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
    _st *= 2.0;

    float index = 0.0;
    index += step(1., mod(_st.x,2.0));
    index += step(1., mod(_st.y,2.0))*2.0;

    _st = fract(_st);

    if(index == 1.0){
        _st = rotate2D(_st,PI*0.5);
    } else if(index == 2.0){
        _st = rotate2D(_st,PI*-0.5);
    } else if(index == 3.0){
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

    gl_FragColor = vec4(vec3(
        concentricCircles(st, vec2(0.0,0.0), 8.0, 8.0),
        concentricCircles(st, vec2(0.0,0.0), 12.0, 12.0),
        concentricCircles(st, vec2(0.0,0.0), 16.0, 12.0)
    ),1.0);
}
`;

// Configurable shader sphere that renders into any container element.
// Config: { containerId, width, height, sphereRadius, rotateYSpeed, rotateXSpeed, storageKey }
class ShaderSphere {
  constructor(config) {
    this.config = config;
    this.p5Instance = null;
    this.theShader = null;
    this.startTime = null;
    this.isInitialized = false;
    this._initializeShader();
  }

  _initializeShader() {
    const container = document.getElementById(this.config.containerId);
    if (!container) {
      setTimeout(() => this._initializeShader(), 100);
      return;
    }

    if (this.isInitialized || container.querySelector('canvas')) {
      return;
    }

    if (!sessionStorage.getItem(this.config.storageKey)) {
      sessionStorage.setItem(this.config.storageKey, Date.now().toString());
    }
    this.startTime = parseInt(sessionStorage.getItem(this.config.storageKey));

    this.p5Instance = new p5((p) => {
      p.setup = () => {
        const canvas = p.createCanvas(this.config.width, this.config.height, p.WEBGL);
        canvas.parent(this.config.containerId);
        p.noStroke();
        p.angleMode(p.DEGREES);
        this.theShader = p.createShader(shaderVertexCode, shaderFragmentCode);
        this.isInitialized = true;
      };

      p.draw = () => {
        if (!this.theShader) return;
        p.clear();
        const currentTime = (Date.now() - this.startTime) / 1000.0;
        this.theShader.setUniform('resolution', [p.width, p.height]);
        this.theShader.setUniform('time', currentTime);
        this.theShader.setUniform('mouse', [p.mouseX, p.map(p.mouseY, 0, p.height, p.height, 0)]);
        p.shader(this.theShader);
        p.push();
        p.rotateY(currentTime * this.config.rotateYSpeed);
        p.rotateX(currentTime * this.config.rotateXSpeed);
        p.sphere(this.config.sphereRadius);
        p.pop();
      };
    });
  }
}
