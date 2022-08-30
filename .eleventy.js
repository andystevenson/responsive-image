/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 *  @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */

const shortcodes = require('@andystevenson/lib/shortcodes')
const filters = require('@andystevenson/lib/filters')

module.exports = (eleventyConfig) => {
  shortcodes(eleventyConfig)
  filters(eleventyConfig)
  return {
    dir: {
      input: './src',
    },
  }
}
