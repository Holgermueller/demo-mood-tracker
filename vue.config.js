module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/demo-mood-tracker/" : "/",
  transpileDependencies: ["vuetify"],
};
