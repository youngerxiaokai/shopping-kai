module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/libs/px2rem/px2rem.scss";`
      },
    },
  },
};
