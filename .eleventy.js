const doctype = require('./eleventy/doctypeTransform.js')
const vue = require('@11ty/eleventy-plugin-vue')

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
  config.addTransform('doctype', doctype)
  config.addPlugin(vue, { input: VUE_SFCS })

  return {
    dir: DIRECTORIES
  }
}
