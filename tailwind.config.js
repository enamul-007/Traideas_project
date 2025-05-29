/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar_color: "var(--navbar_color)",
        white_text_color: "var(--white_text_color)",
        custom_color: "var(--custom_color)",
        black_color: "var(--black_color)",
        left_ani_Bgcolor: "var(--left_ani_Bgcolor)",
        ani_text_color:"var(--ani_text_color)",
        expertise_bg_color:"var(--expertise_bg_color)",
        cart_color:"var(--cart_color)",
      },

      fontFamily: {
        open_sans: "var(--open_sans)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
