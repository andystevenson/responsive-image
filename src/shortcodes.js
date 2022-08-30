const picture = require('./shortcodes/picture')
const img = require('./shortcodes/img')
const html = require('./shortcodes/html')
const shortcodes = {
  ...html,
  picture,
  img,
}

module.exports = (eleventyConfig) => {
  for (const shortcode in shortcodes) {
    const fn = shortcodes[shortcode]
    const isAsync = fn.constructor.name === 'AsyncFunction'
    isAsync
      ? eleventyConfig.addAsyncShortcode(shortcode, fn)
      : eleventyConfig.addShortcode(shortcode, fn)
  }
}
