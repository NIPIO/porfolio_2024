if (typeof window !== 'undefined') {
    // =======================
    // FUEGOS ARTIFICIALES MÚLTIPLES CON DESVANECIMIENTO GRADUAL
    // =======================

    function triggerFireworksSection() {
        if (document.getElementById('fireworks')) return;

        const canvas = document.createElement('canvas');
        canvas.id = 'fireworks';
        canvas.style.position = 'fixed';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = 9999;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Particle {
            constructor(x, y, color, speed, angle, gravity) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.speed = speed;
                this.angle = angle;
                this.gravity = gravity;
                this.alpha = 1;
            }

            update() {
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle) + this.gravity;
                this.speed *= 0.95;
                this.alpha -= 0.01; // más gradual
                if (this.alpha < 0) this.alpha = 0;
            }

            draw(ctx) {
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const fireworks = [];
        const totalExplosions = 10; // más fuegos
        const particlesPerExplosion = 40; // más partículas

        for (let i = 0; i < totalExplosions; i++) {
            setTimeout(() => {
                const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
                const y = Math.random() * canvas.height * 0.4 + 50;
                const hue = Math.random() * 360;
                const colors = [`hsl(${hue}, 100%, 50%)`, `hsl(${hue + 20}, 100%, 60%)`, `hsl(${hue - 20}, 100%, 60%)`];

                for (let j = 0; j < particlesPerExplosion; j++) {
                    const angle = Math.random() * Math.PI * 2;
                    const speed = Math.random() * 6 + 2;
                    const gravity = 0.05;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    fireworks.push(new Particle(x, y, color, speed, angle, gravity));
                }
            }, i * 300); // más rápido entre explosiones
        }

        let frame = 0;
        const maxFrames = 180; // duración total ~3-4s

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            frame++;
            if (frame < maxFrames) requestAnimationFrame(animate);
            else document.body.removeChild(canvas);
        }

        animate();
    }

    // =======================
    // OBSERVER PARA SECCIÓN
    // =======================
    function initAboutMeObserver() {
        const section = document.getElementById('aboutMe');

        if (section && window.innerWidth >= 768) {
            const observer = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            triggerFireworksSection();
                            obs.unobserve(section); // solo una vez
                        }
                    });
                },
                {threshold: 0.2} // 20% visible
            );

            observer.observe(section);
        }
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAboutMeObserver)
    } else {
        initAboutMeObserver()
    }

    // También ejecutar en navegación de Astro
    document.addEventListener('astro:page-load', initAboutMeObserver)
}
