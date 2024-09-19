'use client'

import { useEffect, useRef, useState } from 'react'

interface Dot {
  x: number;
  y: number;
  h: number;
  w: number;
  c: number;
  m: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bgGlowRef = useRef<HTMLDivElement>(null)
  const [, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!canvasRef.current || !bgGlowRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dots: Dot[] = []

    const updateDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      setDimensions({ width, height })
      canvas.width = width
      canvas.height = height
      return { width, height }
    }

    let { width: w, height: h } = updateDimensions()

    const calculateParameters = () => {
      const scale = Math.min(w / 1920, h / 1080) // Base scale on a 1920x1080 reference
      return {
        maxHeight: h * 0.9,
        minHeight: h * 0.5,
        maxWidth: 15 * scale,
        minWidth: 2 * scale,
        maxSpeed: 35 * scale,
        minSpeed: 6 * scale,
        md: Math.floor(100 * scale), // Adjust number of dots based on screen size
        glow: 10 * scale
      }
    }

    let params = calculateParameters()

    const pushDots = () => {
      dots = []
      for (let i = 0; i < params.md; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h / 2,
          h: Math.random() * (params.maxHeight - params.minHeight) + params.minHeight,
          w: Math.random() * (params.maxWidth - params.minWidth) + params.minWidth,
          c: Math.random() * 100 + 200,
          m: Math.random() * (params.maxSpeed - params.minSpeed) + params.minSpeed
        })
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < dots.length; i++) {
        ctx.beginPath()
        const grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x + dots[i].w, dots[i].y + dots[i].h)
        grd.addColorStop(0.0, `hsla(${dots[i].c},50%,50%,.0)`)
        grd.addColorStop(0.2, `hsla(${dots[i].c + 20},50%,50%,.5)`)
        grd.addColorStop(0.5, `hsla(${dots[i].c + 50},70%,60%,.8)`)
        grd.addColorStop(0.8, `hsla(${dots[i].c + 80},50%,50%,.5)`)
        grd.addColorStop(1.0, `hsla(${dots[i].c + 100},50%,50%,.0)`)
        ctx.shadowBlur = params.glow
        ctx.shadowColor = `hsla(${dots[i].c},50%,50%,1)`
        ctx.fillStyle = grd
        ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h)
        ctx.closePath()
        dots[i].x += dots[i].m / 100
        if (dots[i].x > w + params.maxWidth) {
          dots[i].x = -params.maxWidth
        }
      }
      window.requestAnimationFrame(render)
    }

    const handleResize = () => {
      const newDimensions = updateDimensions()
      w = newDimensions.width
      h = newDimensions.height
      params = calculateParameters()
      pushDots()
      ctx.globalCompositeOperation = 'lighter'
    }

    handleResize()
    pushDots()
    render()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div ref={bgGlowRef} className="absolute top-0 left-0 w-full h-full z-0" />
    </>
  )
}