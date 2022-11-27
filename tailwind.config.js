/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                appear: {
                    from: { opacity: 0, transform: 'translateY(-20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                scaleDown: {
                    '0%': {
                        transform: 'scaleY(0)',
                    },
                    '80%': {
                        transform: 'scaleY(1.1)',
                    },
                    '100%': {
                        transform: 'scaleY(1)',
                    },
                },
                scaleUp: {
                    '0%': {
                        transform: 'scaleY(1)',
                    },
                    '80%': {
                        transform: 'scaleY(1.1)',
                    },
                    '100%': {
                        transform: 'scaleY(0)',
                    },
                },
                typing: {
                    '100%': {
                        left: '100%',
                        margin: '0 -12px 0 12px',
                    },
                },
                slide: {
                    '100%': {
                        top: '-108px',
                    },
                },
                translateY: {
                    '0%': {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                    '100%': {
                        transform: 'translateY(100%)',
                        opacity: 0,
                    },
                },
                mouseScroll: {
                    '0%': {
                        opacity: 0,
                    },
                    '50%': {
                        opacity: 0.5,
                    },
                    '100%': {
                        opacity: 1,
                    },
                },
                modalFadeIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-140px)',
                    },

                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                appear: 'appear 2s ease-in',
                scaleDown: 'scaleDown 0.7s ease-in-out',
                scaleUp: 'scaleUp 1s ease-in-out',
                typing: 'typing 3s steps(13) infinite',
                slide: 'slide 6s steps(2) infinite',
                translateY: 'translateY 1s linear infinite',
                mouseScroll: 'mouseScroll alternate 1s ease infinite running',
                'spin-slow': 'spin 3s linear infinite',
                modalFadeIn: 'modalFadeIn 0.5s ease',
            },
            boxShadow: {
                custom: '0 10px 15px 6px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
};
