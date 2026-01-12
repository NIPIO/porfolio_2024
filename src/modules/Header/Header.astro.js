document.addEventListener("astro:page-load", () => {
    (() => {
        const btn = document.getElementById("menu-btn")
        const menu = document.getElementById("menu")

        if (!btn || !menu) return

        const closeMenu = () => {
            menu.classList.add("hidden")
            btn.setAttribute("aria-expanded", "false")
        }

        btn.addEventListener("click", (e) => {
            e.stopPropagation()
            const open = !menu.classList.contains("hidden")
            menu.classList.toggle("hidden")
            btn.setAttribute("aria-expanded", !open)
        })

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", closeMenu)
        })

        document.addEventListener("click", (e) => {
            const themeToggle = document.getElementById("theme-toggle-btn")
            const themesMenu = document.getElementById("themes-menu")
            const isThemeToggleClick = themeToggle && (themeToggle.contains(e.target) || themesMenu?.contains(e.target))
            
            if (!menu.contains(e.target) && !btn.contains(e.target) && !isThemeToggleClick) {
                closeMenu()
            }
        })
    })()
})