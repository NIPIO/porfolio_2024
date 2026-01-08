document.querySelectorAll('.social-pill').forEach(pill => {
    pill.addEventListener('mousemove', (e) => {
        const rect = pill.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        pill.style.setProperty('--x', `${x}px`)
        pill.style.setProperty('--y', `${y}px`)
    })
})
