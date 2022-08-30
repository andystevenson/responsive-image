const isContentful = require('./isContentful')
const contentfulSrcset = require('./contentfulSrcset')
const metaPicture = require('./metaPicture')

module.exports = async (src, alt, types, attributes) => {
  return metaPicture(
    src,
    alt,
    types,
    attributes,
    'contentful',
    isContentful,
    contentfulSrcset,
  )
}
