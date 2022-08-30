// return a srcset attribute from the openProps breakpoints

const props = require('./openProps')

module.exports = (src, type) =>
  props.breakpoints
    .slice(3)
    .map((bp) => `${src}?fm=${type}&w=${bp} ${bp}w`)
    .join(',\n')
