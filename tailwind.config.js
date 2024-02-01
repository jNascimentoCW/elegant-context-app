/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                merriweather: [
                    '"Merriweather"',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            gridTemplateColumns: {
                "auto-fill-27": "repeat(auto-fill, minmax(27rem, 1fr))",
                "auto-fit-27": "repeat(auto-fit, minmax(27rem, 1fr))",
            },
        },
    },
    plugins: [],
};
