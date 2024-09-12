
module.exports = {
  reactStrictMode: true,
  ...(process.env.NODE_ENV === "production" ? { assetPrefix: '/react-scrollama-wrapper/' } : {})
}