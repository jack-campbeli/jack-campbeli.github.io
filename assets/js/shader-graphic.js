// Header shader — uses shared ShaderSphere class from shader-common.js
function _initHeaderShader() {
  new ShaderSphere({
    containerId: 'shader-container',
    width: 60,
    height: 40,
    sphereRadius: 15,
    rotateYSpeed: 1.5,
    rotateXSpeed: 0.75,
    storageKey: 'headerShaderStartTime'
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initHeaderShader);
} else {
  setTimeout(_initHeaderShader, 50);
}
