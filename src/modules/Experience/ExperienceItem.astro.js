const timeline = document.getElementById('timeline')
const line = timeline?.querySelector('.timeline-line')

function updateLineWidth() {
    if (!timeline || !line) return
    line.style.width = timeline.scrollWidth + 'px'
}

updateLineWidth()
window.addEventListener('resize', updateLineWidth)