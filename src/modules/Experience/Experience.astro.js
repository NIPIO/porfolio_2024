function initExperienceScroll() {
  // Verificar si es Firefox
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  
  const timeline = document.getElementById('timeline')
  const timelineWrapper = document.querySelector('.timeline-wrapper')
  
  if (!timeline || !timelineWrapper) return
  
  // Si no es Firefox, desactivar todos los efectos y usar modo grid estático
  if (!isFirefox) {
    timelineWrapper.classList.add('effects-disabled')
    return
  }

  // Comportamiento completo solo para Firefox
  let snapTimeout

  const handleWheel = (e) => {
      if (window.innerWidth < 768) return

      // Verificar si el scroll está dentro de la zona del timeline-wrapper
      const wrapperRect = timelineWrapper.getBoundingClientRect()
      const isInWrapperZone = 
          e.clientY >= wrapperRect.top && 
          e.clientY <= wrapperRect.bottom

      if (!isInWrapperZone) return

      const maxScrollLeft =
          timeline.scrollWidth - timeline.clientWidth
      const isAtStart = timeline.scrollLeft <= 0
      const isAtEnd = timeline.scrollLeft >= maxScrollLeft - 1

      const scrollingRight = e.deltaY > 0
      const scrollingLeft = e.deltaY < 0

      // 🔓 Si ya no hay más scroll horizontal, liberar el scroll vertical
      if (
          (isAtEnd && scrollingRight) ||
          (isAtStart && scrollingLeft)
      ) {
          timeline.classList.remove('no-snap')
          return
      }

      // 🔒 Mientras haya scroll horizontal, lo interceptamos
      e.preventDefault()
      e.stopPropagation()

      timeline.classList.add('no-snap')
      timeline.scrollLeft += e.deltaY * 0.8

      clearTimeout(snapTimeout)
      snapTimeout = setTimeout(() => {
          timeline.classList.remove('no-snap')
      }, 150)
  }

  // Escuchar el evento wheel solo en Firefox
  timelineWrapper.addEventListener('wheel', handleWheel, {passive: false})
  timeline.addEventListener('wheel', handleWheel, {passive: false})
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperienceScroll)
} else {
  initExperienceScroll()
}

// Reinicializar en transiciones de Astro
document.addEventListener('astro:page-load', initExperienceScroll)