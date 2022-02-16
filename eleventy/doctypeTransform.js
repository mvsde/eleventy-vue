const DOCTYPE = '<!DOCTYPE html>'

/**
 * Add doctype to HTML files.
 *
 * @param {string} content
 * @param {string} outputPath
 * @returns {string}
 */
module.exports = function (content, outputPath) {
  // If we’re writing to an HTML file and a Doctype does not already exist.
  if (outputPath.endsWith('.html') && !content.trim().toLowerCase().startsWith(DOCTYPE)) {
    return `${DOCTYPE}${content}`
  }

  return content
}
