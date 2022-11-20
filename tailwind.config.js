/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                growthDownTab: {
                    from: { opacity: 0, height: '0' },
                    to: { opacity: 1, height: '280px' },
                },
                growthDownMob: {
                    from: { opacity: 0, height: '0' },
                    to: { opacity: 1, height: '220px' },
                },
                growthUpTab: {
                    from: { opacity: 1, height: '280px' },
                    to: { opacity: 0, height: '0' },
                },
                growthUpMob: {
                    from: { opacity: 1, height: '220px' },
                    to: { opacity: 0, height: '0' },
                },
            },
            animation: {
                growthDownTab: 'growthDownTab 1.5s ease-in',
                growthDownMob: 'growthDownMob 1.5s ease-in',
                growthUpTab: 'growthUpTab 1.5s ease-in',
                growthUpMob: 'growthUpMob 1.5s ease-in',
            },
        },
    },
    plugins: [],
};
