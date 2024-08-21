/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "310px",
      msm: "360px",
      msmsm: "368px",
      mmsm: "385px",
      ssm: "412px",
      sm: "480px",
      smd: "553px",
      md: "768px",
      lg: "913px",
      xlg: "1015px",
      xmlg: "1140px",
      xxlg: "1200px",
      xl: "1440px",
    },

    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        blue1: "#0074C3",
        blue2: "#144C8C",
        blue3: "#11A5BA",
        black: "#1C242C",
        white: "#F2EFEB",
        whiteo: "#FFF",
      },
      fontFamily: {
        gothicbold: ["ALL-ROUND-GOTHIC-BOLD"],
        gothicoblique: ["ALL-ROUND-GOTHIC-BOLD-OBLIQUE"],
        gothicbook: ["ALL-ROUND-GOTHIC-BOOK"],
        gothicbookoblique: ["ALL-ROUND-GOTHIC-BOOK-OBLIQUE"],
        gothicdemi: ["ALL-ROUND-GOTHIC-DEMI"],
        gothicdemioblique: ["ALL-ROUND-GOTHIC-DEMI-OBLIQUE"],
        gothicmedium: ["ALL-ROUND-GOTHIC-MEDIUM"],
        gothicmediumoblique: ["ALL-ROUND-GOTHIC-MEDIUM-OBLIQUE"],
      },
    },
  },
  variants: {},
  plugins: [],
};
