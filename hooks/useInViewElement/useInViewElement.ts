"use client"
import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function useInViewElement() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView)
      animate(scope.current, { opacity: 1, scale: 1 }, { duration: 1.5 })
    else
      animate(scope.current, { opacity: 0, scale: 0.9 }, { duration: 0.75 })
  }, [isInView])

  return { scope }
}
