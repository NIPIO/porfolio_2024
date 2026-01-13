document.addEventListener("astro:page-load", () => {
  const languagesMenu = document.getElementById("languages-menu")
  const languageToggleBtn = document.getElementById("language-toggle-btn")
  const currentLanguageFlag = document.getElementById("current-language-flag")
  
  if (!languagesMenu || !languageToggleBtn || !currentLanguageFlag) return

  const languages = {
    'es': '🇦🇷',
    'en': '🇺🇸',
    'pt': '🇧🇷'
  }

  // Obtener idioma actual desde la URL
  function getCurrentLanguage() {
    const pathname = window.location.pathname
    if (pathname.startsWith("/en")) return "en"
    if (pathname.startsWith("/pt")) return "pt"
    return "es" // Default
  }

  // Actualizar flag según idioma actual
  function updateLanguageFlag() {
    const currentLang = getCurrentLanguage()
    if (currentLanguageFlag) {
      currentLanguageFlag.textContent = languages[currentLang] || '🇦🇷'
    }
  }

  // Inicializar flag inmediatamente
  updateLanguageFlag()
  
  // También actualizar después de un pequeño delay para asegurar que el DOM esté listo
  setTimeout(updateLanguageFlag, 100)

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", (e) => {
    if (languageToggleBtn && !languagesMenu.contains(e.target) && !languageToggleBtn.contains(e.target)) {
      languagesMenu.classList.remove("open")
    }
  })

  // Abrir/cerrar menú
  languageToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    e.preventDefault()
    const isClosed = !languagesMenu.classList.contains("open")
    languagesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  // Seleccionar idioma
  document.querySelectorAll(".language-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation()
      e.preventDefault()
      const lang = element.getAttribute("data-lang")
      const supportedLangs = ['es', 'en', 'pt']
      if (lang && supportedLangs.includes(lang)) {
        // Obtener la ruta actual y hash
        const currentPath = window.location.pathname
        const currentHash = window.location.hash
        const currentSearch = window.location.search
        
        // Construir nueva URL con el idioma seleccionado
        let newPath = currentPath
        
        // Buscar y reemplazar cualquier prefijo de idioma existente
        for (const existingLang of supportedLangs) {
          if (currentPath.startsWith(`/${existingLang}`)) {
            newPath = currentPath.replace(`/${existingLang}`, `/${lang}`)
            break
          }
        }
        
        // Si no tiene prefijo de idioma, agregar el nuevo
        if (newPath === currentPath && !supportedLangs.some(l => currentPath.startsWith(`/${l}`))) {
          newPath = `/${lang}` + (currentPath === '/' ? '' : currentPath)
        }
        
        // Navegar a la nueva URL manteniendo hash y search params
        window.location.href = newPath + currentSearch + currentHash
      }
    })
  })
})
