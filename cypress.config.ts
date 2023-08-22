import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5174",
    experimentalStudio: true,
  },
  video: false,
  env: {
    baseUrl: "http://localhost:5174",
  },
});
