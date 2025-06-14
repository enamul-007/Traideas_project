/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        network_img: "/src/assets/network_img.png",
      },
      colors: {
        navbar_color: "var(--navbar_color)",
        white_text_color: "var(--white_text_color)",
        custom_color: "var(--custom_color)",
        black_color: "var(--black_color)",
        left_ani_Bgcolor: "var(--left_ani_Bgcolor)",
        ani_text_color: "var(--ani_text_color)",
        expertise_bg_color: "var(--expertise_bg_color)",
        cart_color: "var(--cart_color)",
        Industry_bg_color: "var(--Industry_bg_color)",
        gray_text_color : "var(--gray_text_color)"
      },

      fontFamily: {
        open_sans: ['"Open Sans"', "sans-serif"],
        roboto_sans: ['"Roboto"', "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1260px",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
