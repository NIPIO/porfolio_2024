function initExperienceScroll() {
  // Verificar si se deben deshabilitar los efectos
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  const disableEffects = localStorage.getItem('disable-3d-effects') === 'true'
  
  // Si no es Firefox y los efectos están deshabilitados, no inicializar scroll
  if (!isFirefox && disableEffects) {
    const timelineWrapper = document.querySelector('.timeline-wrapper')
    
    if (timelineWrapper) {
      // Agregar clase para aplicar estilos CSS
      timelineWrapper.classList.add('effects-disabled')
    }
    return
  }

  const timeline = document.getElementById('timeline')
  const timelineWrapper = document.querySelector('.timeline-wrapper')
  let snapTimeout

  if (timeline && timelineWrapper) {
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

    // Escuchar el evento wheel en toda la sección y en el timeline
    timelineWrapper.addEventListener('wheel', handleWheel, {passive: false})
    timeline.addEventListener('wheel', handleWheel, {passive: false})
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperienceScroll)
} else {
  initExperienceScroll()
}

// Reinicializar en transiciones de Astro
document.addEventListener('astro:page-load', initExperienceScroll)

// Escuchar evento para deshabilitar efectos
window.addEventListener('disable-3d-effects', initExperienceScroll)