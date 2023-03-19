import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/mybook.js",
      fileName: "index",
      formats: ["es"],
    },
  },
});
