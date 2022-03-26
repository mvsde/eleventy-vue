const transformDoctype = require('./eleventy/transform-doctype.js')
const pluginVue = require('@11ty/eleventy-plugin-vue')

const DIRECTORIES = {
  input: 'content',
  output: 'dist',

  // Relative to `content` directory.
  layouts: '../src/layouts',
  includes: '../src/components',
  data: '../data'
}

// Relative to current directory.
const VUE_SFCS = [
  'content/dev-server.vue',
  'content/index.vue',
  'src/layouts/LBase.vue'
]

module.exports = function (config) {
  config.addTransform('doctype', transformDoctype)
  config.addPlugin(pluginVue, { input: VUE_SFCS })

  return {
    dir: DIRECTORIES
  }
}
