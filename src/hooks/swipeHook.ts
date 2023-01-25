import { useEffect, useState } from 'react'

import { sliderSwipe } from 'utils/constants/sliderSwipe'

export const useSwipe = (initialState = '') => {
  const [swipe, setSwipe] = useState(initialState)

  const onSwipeLeft = () => setSwipe(sliderSwipe.LEFT)
  const onSwipeRight = () => setSwipe(sliderSwipe.RIGHT)

  useEffect(() => {
    setSwipe('')
  }, [swipe])

  return { onSwipeLeft, onSwipeRight, swipe }
}
