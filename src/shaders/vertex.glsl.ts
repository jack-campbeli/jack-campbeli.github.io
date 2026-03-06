export const vertexShader = `
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
`
