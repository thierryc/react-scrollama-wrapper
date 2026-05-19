module.exports = {
  reactStrictMode: true,
  output: "export",
  turbopack: {
    root: __dirname,
  },
  ...(process.env.NODE_ENV === "production" ? { assetPrefix: "/react-scrollama-wrapper/" } : {}),
};
