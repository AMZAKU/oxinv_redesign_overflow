/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
        colors: {
            // Main colors - fácilmente configurables desde global.css
            'main': 'var(--color-main)',
            'secondary': 'var(--color-secondary)',
            'secondary-highlight': 'var(--color-secondary-highlight)',
            'accent': 'var(--color-accent)',
            'text-primary': 'var(--color-text)',
            'border-primary': 'var(--color-border)',

            // Clothing interface colors
            'clothing': {
                'active': 'var(--color-clothing-active)',
                'active-from': 'var(--color-clothing-active-from)',
                'active-to': 'var(--color-clothing-active-to)',
                'border-active': 'var(--color-clothing-border-active)',
                'inactive': 'var(--color-clothing-inactive)',
                'border-inactive': 'var(--color-clothing-border-inactive)',
            },
        },
        fontFamily: {
            'main': 'var(--font-main)',
            'secondary': 'var(--font-secondary)',
        },
        backdropBlur: {
            'medium': 'var(--blur-medium)',
            'strong': 'var(--blur-strong)',
        },
        transitionProperty: {
            'smooth': 'var(--transition-smooth)',
            'quick': 'var(--transition-quick)',
        },
        boxShadow: {
            'glow': 'var(--shadow-glow)',
            'subtle': 'var(--shadow-subtle)',
        }
    },
},
plugins: [],
}

