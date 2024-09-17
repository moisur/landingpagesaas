'use client'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    if (!canvasRef.current || !bgGlowRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const maxHeight = h * 0.9
    const minHeight = h * 0.5
    const maxWidth = 15
    const minWidth = 2
    const maxSpeed = 35
    const minSpeed = 6
    const md = 100
    const glow = 10

    let dots: Dot[] = []

    const pushDots = () => {
      for (let i = 1; i < md; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h / 2,
          h: Math.random() * (maxHeight - minHeight) + minHeight,
          w: Math.random() * (maxWidth - minWidth) + minWidth,
          c: Math.random() * 100 + 200, // Using purple to pink range
          m: Math.random() * (maxSpeed - minSpeed) + minSpeed
        })
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 1; i < dots.length; i++) {
        ctx.beginPath()
        const grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x + dots[i].w, dots[i].y + dots[i].h)
        grd.addColorStop(0.0, `hsla(${dots[i].c},50%,50%,.0)`)
        grd.addColorStop(0.2, `hsla(${dots[i].c + 20},50%,50%,.5)`)
        grd.addColorStop(0.5, `hsla(${dots[i].c + 50},70%,60%,.8)`)
        grd.addColorStop(0.8, `hsla(${dots[i].c + 80},50%,50%,.5)`)
        grd.addColorStop(1.0, `hsla(${dots[i].c + 100},50%,50%,.0)`)
        ctx.shadowBlur = glow
        ctx.shadowColor = `hsla(${dots[i].c},50%,50%,1)`
        ctx.fillStyle = grd
        ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h)
        ctx.closePath()
        dots[i].x += dots[i].m / 100
        if (dots[i].x > w + maxWidth) {
          dots[i].x = -maxWidth
        }
      }
      window.requestAnimationFrame(render)
    }

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      dots = []
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