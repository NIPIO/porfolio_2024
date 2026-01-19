function initProjectsScroll() {
  // Verificar si es Firefox
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  
  const cards = [...document.querySelectorAll('.card')]
  if (cards.length === 0) return
  
  // Si no es Firefox, desactivar todos los efectos y mostrar cards estáticas
  // if (!isFirefox) {
  //   const section = document.querySelector('section.relative')
  //   if (section) {
  //     section.style.height = 'auto'
  //     section.style.minHeight = 'auto'
  //     section.style.marginTop = '0' // Quitar margin negativo para que el título sea visible
  //   }
    
  //   cards.forEach((card, i) => {
  //     card.style.position = 'relative'
  //     card.style.top = 'auto'
  //     card.style.left = 'auto'
  //     card.style.width = '100%'
  //     card.style.height = 'auto'
  //     card.style.transform = 'none'
  //     card.style.marginBottom = '2rem'
  //     card.style.opacity = '1'
  //     card.style.zIndex = 'auto'
  //   })
    
  //   // Cambiar el contenedor sticky a normal
  //   const stickyContainer = document.querySelector('.sticky')
  //   if (stickyContainer) {
  //     stickyContainer.style.position = 'relative'
  //     stickyContainer.style.height = 'auto'
  //     stickyContainer.style.overflow = 'visible'
  //   }
    
  //   const innerContainer = document.querySelector('.sticky > div')
  //   if (innerContainer) {
  //     innerContainer.style.display = 'flex'
  //     innerContainer.style.flexDirection = 'column'
  //     innerContainer.style.gap = '2rem'
  //     innerContainer.style.alignItems = 'stretch'
  //   }
    
  //   return
  // }
  
  // Comportamiento con efectos solo para Firefox
  const vh = window.innerHeight
  const total = cards.length

  function onScroll() {
    const y = window.scrollY
    const step = vh * 0.65

    cards.forEach((card, i) => {
      const start = i * step
      const p = Math.min(Math.max((y - start) / step, 0), 1)

      card.style.setProperty('--p', p)

      // 🔑 el activo pasa atrás
      const z = Math.round((1 - p) * 100) + (total - i)
      card.style.zIndex = z
    })
  }

  window.addEventListener('scroll', onScroll)
  onScroll()
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectsScroll)
} else {
  initProjectsScroll()
}

// Reinicializar en transiciones de Astro
document.addEventListener('astro:page-load', initProjectsScroll)
