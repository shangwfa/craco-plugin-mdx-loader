module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const oneOfRules = webpackConfig.module.rules.find((x) => !!x.oneOf).oneOf;
    oneOfRules.unshift({
      test: /\.mdx?$/,
      use: ["babel-loader", "@mdx-js/loader"],
    });
    webpackConfig.node.fs = "empty";
    return webpackConfig;
  },
};
