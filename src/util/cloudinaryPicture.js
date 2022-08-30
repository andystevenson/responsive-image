const isCloudinary = require('./isCloudinary')
const cloudinarySrcset = require('./cloudinarySrcset')
const metaPicture = require('./metaPicture')

module.exports = async (src, alt, types, attributes) => {
  return metaPicture(
    src,
    alt,
    types,
    attributes,
    'cloudinary',
    isCloudinary,
    cloudinarySrcset,
  )
}
