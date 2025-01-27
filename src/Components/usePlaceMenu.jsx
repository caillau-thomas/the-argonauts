import { useEffect } from 'react'

export const usePlaceMenu = (menuRef, headerRef, open) => {
  useEffect(() => {
    if(open) {
      menuRef.current.style.top = `${headerRef.current.offsetHeight - 3}px`
    }
  }, [open])
}
