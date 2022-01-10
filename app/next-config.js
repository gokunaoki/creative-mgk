const path = require('path')
module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    }
    return config
  },
}

// module.exports = {
//   images: {
//     domains: ["localhost"],
//   },
// };
