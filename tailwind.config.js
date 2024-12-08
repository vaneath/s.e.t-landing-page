/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#004AAD",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"]
  },
};
