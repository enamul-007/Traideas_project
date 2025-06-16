/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "4rem",
        xl: "5rem",
      },
    },

    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        network_img: "url('/src/assets/network_img.png')",
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
        gray_text_color: "var(--gray_text_color)",
      },
      fontFamily: {
        open_sans: ['"Open Sans"', "sans-serif"],
        roboto_sans: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
