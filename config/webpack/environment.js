const { environment } = require('@rails/webpacker')

const path = require('path')
// Add an alias for @src and @components
const customConfig = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
      '@components': path.resolve(__dirname, '..', '..', 'app/javascript/src/components'),
    }
  }
}

environment.config.merge(customConfig)

environment.splitChunks()

module.exports = environment
