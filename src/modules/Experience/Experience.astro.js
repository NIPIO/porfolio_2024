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
          e.clientY <= wrapperRect.bottom &&
          e.clientX >= wrapperRect.left &&
          e.clientX <= wrapperRect.right

      if (!isInWrapperZone) return

      const maxScrollLeft =
          timeline.scrollWidth - timeline.clientWidth
      const currentScrollLeft = timeline.scrollLeft
      const isAtStart = currentScrollLeft <= 1
      const isAtEnd = currentScrollLeft >= maxScrollLeft - 1

      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      // 🔓 Si ya no hay más scroll horizontal en la dirección del scroll, 
      // NO interceptar y permitir que el scroll vertical nativo continúe
      if (
          (isAtEnd && scrollingDown) ||
          (isAtStart && scrollingUp)
      ) {
          timeline.classList.remove('no-snap')
          // No prevenir el evento - el scroll vertical nativo funcionará automáticamente
          return
      }

      // Intentar hacer scroll horizontal
      const newScrollLeft = currentScrollLeft + (e.deltaY * 0.8)
      const wouldExceedEnd = newScrollLeft > maxScrollLeft
      const wouldExceedStart = newScrollLeft < 0

      // Si el scroll intentaría exceder los límites, permitir scroll vertical
      if ((wouldExceedEnd && scrollingDown) || (wouldExceedStart && scrollingUp)) {
          timeline.classList.remove('no-snap')
          // No interceptar - permitir scroll vertical nativo
          return
      }

      // 🔒 Mientras haya scroll horizontal disponible, lo interceptamos
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()

      timeline.classList.add('no-snap')
      timeline.scrollLeft = newScrollLeft

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