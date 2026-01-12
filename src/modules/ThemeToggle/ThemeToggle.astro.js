document.addEventListener("astro:page-load", () => {
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")
  
  if (!themesMenu) return

  const getThemePreference = () => {
      if (typeof localStorage !== "undefined") {
          return localStorage.getItem("theme") ?? "dark"
      }

      return "dark"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", (e) => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn")
    if (themeToggleBtn && !themesMenu.contains(e.target) && !themeToggleBtn.contains(e.target)) {
      themesMenu.classList.remove("open")
    }
  })

  const themeToggleBtn = document.getElementById("theme-toggle-btn")
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      e.preventDefault()
      const isClosed = !themesMenu.classList.contains("open")
      themesMenu.classList[isClosed ? "add" : "remove"]("open")
    })
  }

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation()
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
      themesMenu.classList.remove("open")
    })
  })
})