tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#003357",
                "primary-light": "#004e85",
                "secondary": "#00d4ff",
                "accent-yellow": "#fbbf24",
                "background-light": "#f5f7f8",
                "background-dark": "#0f1b23",
                "surface": "#ffffff",
                "footer-bg": "#003458",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "2xl": "4rem",
                "card": "30px",
                "ultra": "30px",
                "full": "9999px"
            },
            boxShadow: {
                "glow": "0 0 20px rgba(0, 51, 87, 0.15)",
                "glow-active": "0 0 30px rgba(0, 212, 255, 0.25)",
                "card": "0 10px 40px -10px rgba(0,0,0,0.08)"
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #0033570a 1px, transparent 1px), linear-gradient(to bottom, #0033570a 1px, transparent 1px)",
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
}