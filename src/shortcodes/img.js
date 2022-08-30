const isContentful = require('../util/isContentful')
const isCloudinary = require('../util/isCloudinary')
const formatImgAttributes = require('../util/formatImgAttributes')
const contentfulImg = require('../util/contentfulImg')
const cloudinaryImg = require('../util/cloudinaryImg')

module.exports = async (...attributes) => {
  let [src, alt] = attributes

  if (isContentful(src)) return contentfulImg(src, alt, attributes)
  if (isCloudinary(src)) return cloudinaryImg(src, alt, attributes)

  const { format } = await formatImgAttributes(
    src,
    alt,
    null,
    null,
    null,
    attributes,
  )

  return format
}
