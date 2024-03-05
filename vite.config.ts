/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2024-03-05 09:39:08
 * @LastEditors: Chengya
 * @LastEditTime: 2024-03-05 10:08:04
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
