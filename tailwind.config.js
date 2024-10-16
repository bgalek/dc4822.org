const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./_includes/**/*.html",
        "./_layouts/**/*.html",
        "./_drafts/**/*.md",
        "./_posts/*.md",
        "./*.md",
        "./*.html",
        "./about/*.html",
    ],
    darkMode: "media",
    theme: {
        extend: {
            fontSize: {
                '2xs': '.6875rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Mona Sans', ...defaultTheme.fontFamily.sans],
            },
            opacity: {
                2.5: '0.025',
                7.5: '0.075',
                15: '0.15',
            },
        },
    },

};