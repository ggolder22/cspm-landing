module.exports = function(eleventyConfig) {

  // Archivos estáticos que se copian sin procesar
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("google6fc124116cb938b2.html");

  // Colección de artículos del blog, ordenados por fecha descendente
  eleventyConfig.addCollection("posts", function(api) {
    return api.getFilteredByGlob("blog/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Filtro de fecha en español
  eleventyConfig.addFilter("fechaES", function(date) {
    return new Date(date).toLocaleDateString("es-AR", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
    });
  });

  // Filtro de fecha ISO para schema.org
  eleventyConfig.addFilter("dateISO", function(date) {
    return new Date(date).toISOString().split("T")[0];
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
