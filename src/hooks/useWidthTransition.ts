import { useEffect, useRef } from "react"

const useWidthTransition = (width: number, offset = "0px") => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && ref.current) {
            ref.current.style.width = width + "%"
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [offset, ref, width])

  return {
    ref,
  }
}

export default useWidthTransition
