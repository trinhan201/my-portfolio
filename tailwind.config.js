/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
            },
            animation: {
                appear: 'appear 2s ease-in',
                scaleDown: 'scaleDown 0.7s ease-in-out',
                scaleUp: 'scaleUp 1s ease-in-out',
            },
        },
    },
    plugins: [],
};
