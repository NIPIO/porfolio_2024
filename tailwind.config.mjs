/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "dark-moss-green": "#606c38ff",
                "pakistan-green": "#283618ff",
                "cornsilk": "#fefae0ff",
                "earth-yellow": "#dda15eff",
                "tigers-eye": "#bc6c25ff",
                "custom-green": "#22c55e",
            }
        },
    },
    plugins: [],
}