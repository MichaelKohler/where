module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "public/fonts/*": "fonts" });
};
