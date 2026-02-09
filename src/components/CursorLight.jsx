import { useEffect, useRef } from 'react'

export default function CursorLight() {
  const lightRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08
      pos.current.y += (target.current.y - pos.current.y) * 0.08

      if (lightRef.current) {
        lightRef.current.style.left = `${pos.current.x}px`
        lightRef.current.style.top = `${pos.current.y}px`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div className="cursor-light" ref={lightRef} />
}
