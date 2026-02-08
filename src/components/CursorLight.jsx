import { useEffect, useRef } from 'react'

export default function CursorLight() {
  const lightRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!lightRef.current) return
      lightRef.current.style.left = `${e.clientX}px`
      lightRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-light" ref={lightRef} />
}
