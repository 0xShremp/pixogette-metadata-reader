import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { fileURLToPath } from "node:url";

const filesNeedToExclude = ["index.js"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

export default defineConfig({
  plugins: [viteSingleFile(), ViteMinifyPlugin({})],
  build: {
    manifest: true,
    rollupOptions: {
      external: [...filesPathToExclude],
    },
  },
});
