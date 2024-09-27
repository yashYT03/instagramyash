

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:false,
  theme: {
    extend: { },
    },
    varients: {
      extend:{},
    },
    "compilerOptions": {
      "typeRoots": ["./types", "./node_modules/@types"],
    },
  plugins: [require("@tailwindcss/forms"),
     require("tailwind-scrollbar"),
     require('tailwind-scrollbar-hide'),
    ],
};

