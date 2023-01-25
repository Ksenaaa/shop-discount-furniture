import { useEffect, useState } from 'react'

export const useSizeListener = (initialState = 0) => {
  const [windowWidth, setWindowWidth] = useState(initialState)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { windowWidth }
}
