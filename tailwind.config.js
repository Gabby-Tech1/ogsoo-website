/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mistyrose: "#f8dddd",
        salmon: {
          "100": "#f16464",
          "200": "#f05e5e",
        },
        dimgray: {
          "100": "#707070",
          "200": "rgba(107, 69, 69, 0.5)",
        },
        white: "#fff",
        whitesmoke: "#f9f8f8",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(217, 217, 217, 0)",
        },
        indianred: "#d94a4a",
        darkgray: "#9b9898",
        gray: {
          "100": "#fffefe",
          "200": "#7d7373",
          "300": "rgba(22, 21, 21, 0.3)",
          "400": "rgba(255, 255, 255, 0.77)",
          "500": "rgba(139, 134, 134, 0.9)",
          "600": "rgba(255, 255, 255, 0.68)",
          "700": "rgba(0, 0, 0, 0.41)",
          "800": "rgba(255, 255, 255, 0.85)",
          "900": "rgba(255, 255, 255, 0.9)",
        },
        darkslategray: "#474545",
        rosybrown: "rgba(145, 107, 107, 0.5)",
        cornflowerblue: "#64a1f1",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "poppins-medium-25": "Poppins",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        "21xl": "45px",
        "19xl": "38px",
        "27xl": "46px",
        xl: "20px",
        "17xl": "36px",
        "7xl": "26px",
        "11xl": "30px",
        "30xl": "49px",
        "47xl": "66px",
      },
    },
    fontSize: {
      "6xl": "25px",
      xl: "20px",
      "16xl": "35px",
      "9xl": "28px",
      "2xl": "21px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "3xl": "22px",
      lgi: "19px",
      base: "16px",
      "46xl": "65px",
      "33xl": "52px",
      "20xl": "39px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      "7xl": "26px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
