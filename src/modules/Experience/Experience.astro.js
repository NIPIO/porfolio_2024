function initExperienceScroll() {
  // Verificar si es Firefox
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  
  const timeline = document.getElementById('timeline')
  const timelineWrapper = document.querySelector('.timeline-wrapper')
  
  if (!timeline || !timelineWrapper) return
  
  // Si no es Firefox, desactivar todos los efectos y usar modo grid estático
  // if (!isFirefox) {
  //   timelineWrapper.classList.add('effects-disabled')
  //   return
  // }

  // Comportamiento completo solo para Firefox
  let snapTimeout

  const handleWheel = (e) => {
    if (window.innerWidth < 768) return
  
    const wrapperRect = timelineWrapper.getBoundingClientRect()
    const isInWrapperZone =
      e.clientY >= wrapperRect.top &&
      e.clientY <= wrapperRect.bottom
  
    if (!isInWrapperZone) return
  
    const maxScrollLeft = timeline.scrollWidth - timeline.clientWidth
    const scrollLeft = timeline.scrollLeft
  
    const scrollingRight = e.deltaY > 0
    const scrollingLeft = e.deltaY < 0
  
    const canScrollRight = scrollLeft < maxScrollLeft - 1
    const canScrollLeft = scrollLeft > 1
  
    // 👉 NO hay más scroll horizontal → dejar que el navegador haga scroll Y
    if (
      (scrollingRight && !canScrollRight) ||
      (scrollingLeft && !canScrollLeft)
    ) {
      timeline.classList.remove('no-snap')
    
      // 🔁 reenviar scroll vertical manualmente
      window.scrollBy({
        top: e.deltaY,
        behavior: 'auto'
      })
    
      return
    }
  
    // 👉 Mientras haya scroll horizontal, lo secuestramos
    e.preventDefault()
    e.stopPropagation()
  
    timeline.classList.add('no-snap')
    timeline.scrollLeft += e.deltaY * 0.8
  
    clearTimeout(snapTimeout)
    snapTimeout = setTimeout(() => {
      timeline.classList.remove('no-snap')
    }, 120)
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