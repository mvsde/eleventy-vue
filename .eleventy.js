const doctype = require('./eleventy/doctypeTransform.js')
const vue = require('@11ty/eleventy-plugin-vue')

// Relative to `content` directory.
const DIRECTORIES = {
  layouts: '../src/layouts',
  includes: '../src/components',
  data: '../data'
}

// Relative to current directory.
const LAYOUTS = [
  'content/index.vue',
  'src/layouts/LBase.vue'
]

module.exports = function (config) {
  config.addTransform('doctype', doctype)
  config.addPlugin(vue, { input: LAYOUTS })

  return {
    dir: DIRECTORIES
  }
}
