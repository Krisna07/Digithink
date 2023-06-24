/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "text-color": "var(--textcolor)",
        "hover-Text": "var(--textHover)",
        "primary-Btn": "var(--primaryBtn)",
        "secondary-Btn": "var(--secondaryBtn)",
        "accent-color": "var(--accent)",
        "background-color": "var(--backgroundColor)",
      },
      screens: {
        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
