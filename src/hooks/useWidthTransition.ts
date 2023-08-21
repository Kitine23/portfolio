import { useEffect, useRef } from "react"

/**
 * hook personnalisé qui utilise l'API Intersection Observer pour faire la transition de la largeur d'un élément spécifié lorsqu'il devient visible dans la fenêtre d'affichage.
 * @param {number} width - Le paramètre `width` est un nombre qui représente la largeur souhaitée d'un élément en pourcentage.
 * @param [offset=0px] - Le paramètre `offset` est un paramètre facultatif qui spécifie la marge racine pour l'observateur d'intersection. La marge racine est un moyen d'ajuster la zone d'intersection autour de l'élément racine. Il peut être spécifié en pixels (par exemple, "10px") ou en pourcentage
 * de la fenêtre d'affichage (par exemple,
 * @returns La fonction `useWidthTransition` renvoie un objet avec une seule propriété `ref`.
 */
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
