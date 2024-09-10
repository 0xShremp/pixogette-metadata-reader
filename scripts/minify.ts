import fs from "fs";
import { minify } from "html-minifier";

console.log("minifying html");

fs.readFile("index.html", (err, html) => {
  console.log("html loaded");
  if (err) {
    throw err;
  }

  var result = minify(html.toString(), {
    collapseWhitespace: true,
    removeComments: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeTagWhitespace: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true,
  });

  console.log("html minified");

  fs.writeFile("./dist/index.html", result, (err) => {
    if (err) {
      throw err;
    }
    console.log("html written to dist");
  });
});
