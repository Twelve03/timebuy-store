module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "landing-page":
          "url('https://i.pinimg.com/originals/64/7a/68/647a68f3cb88e6a78005c22d066978b5.gif')",
      }),
      fontFamily: {
        delagothicone: ["Dela Gothic One"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
