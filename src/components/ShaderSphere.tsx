import { useRef, useEffect } from 'react'
import p5 from 'p5'
import { vertexShader } from '../shaders/vertex.glsl'
import { fragmentShader } from '../shaders/fragment.glsl'
import styles from './ShaderSphere.module.css'

interface ShaderSphereProps {
  width: number
  height: number
  sphereRadius: number
  rotateYSpeed?: number
  rotateXSpeed?: number
  storageKey?: string
  className?: string
}

export default function ShaderSphere({
  width,
  height,
  sphereRadius,
  rotateYSpeed = 1.5,
  rotateXSpeed = 0.75,
  storageKey = 'shaderStartTime',
  className,
}: ShaderSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const p5Ref = useRef<p5 | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    if (!sessionStorage.getItem(storageKey)) {
      sessionStorage.setItem(storageKey, Date.now().toString())
    }
    const startTime = parseInt(sessionStorage.getItem(storageKey)!)

    p5Ref.current = new p5((p: p5) => {
      let theShader: p5.Shader

      p.setup = () => {
        const canvas = p.createCanvas(width, height, p.WEBGL)
        canvas.parent(containerRef.current!)
        p.noStroke()
        p.angleMode(p.DEGREES)
        theShader = p.createShader(vertexShader, fragmentShader)
      }

      p.draw = () => {
        if (!theShader) return
        p.clear()
        const currentTime = (Date.now() - startTime) / 1000.0
        theShader.setUniform('resolution', [p.width, p.height])
        theShader.setUniform('time', currentTime)
        theShader.setUniform('mouse', [
          p.mouseX,
          p.map(p.mouseY, 0, p.height, p.height, 0),
        ])
        p.shader(theShader)
        p.push()
        p.rotateY(currentTime * rotateYSpeed)
        p.rotateX(currentTime * rotateXSpeed)
        p.sphere(sphereRadius)
        p.pop()
      }
    })

    return () => {
      p5Ref.current?.remove()
      p5Ref.current = null
    }
  }, [width, height, sphereRadius, rotateYSpeed, rotateXSpeed, storageKey])

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className ?? ''}`}
    />
  )
}
