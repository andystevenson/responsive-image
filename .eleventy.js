/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */

const shortcodes = require('./src/shortcodes')
const filters = require('./src/filters')

module.exports = (eleventyConfig) => {
  shortcodes(eleventyConfig)
  filters(eleventyConfig)
  return {
    dir: {
      input: './src',
    },
  }
}
