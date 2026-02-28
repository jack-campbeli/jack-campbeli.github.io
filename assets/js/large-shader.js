// Large shader — uses shared ShaderSphere class from shader-common.js
function _initLargeShader() {
  new ShaderSphere({
    containerId: 'large-shader-container',
    width: 600,
    height: 400,
    sphereRadius: 120,
    rotateYSpeed: 5.5,
    rotateXSpeed: 0.75,
    storageKey: 'largeShaderStartTime'
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initLargeShader);
} else {
  setTimeout(_initLargeShader, 50);
}
