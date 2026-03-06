import ShaderSphere from '../components/ShaderSphere'
import styles from './TestPage.module.css'

export default function TestPage() {
  return (
    <>
      <h1 className="page-title">Test</h1>
      <h2>Shader Graphic</h2>
      <div className={styles.container}>
        <ShaderSphere
          width={600}
          height={400}
          sphereRadius={120}
          rotateYSpeed={5.5}
          rotateXSpeed={0.75}
          storageKey="largeShaderStartTime"
          className={styles.largeShader}
        />
      </div>
    </>
  )
}
