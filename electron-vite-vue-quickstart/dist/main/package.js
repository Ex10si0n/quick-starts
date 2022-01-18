"use strict";
exports[Symbol.toStringTag] = "Module";
const name = "electron-vite-boilerplate";
const version = "0.0.1";
const main = "dist/main/index.js";
const author = "\u8349\u978B\u6CA1\u53F7 <308487730@qq.com>";
const license = "MIT";
const engines = {
  node: ">=14.17.0"
};
const scripts = {
  dev: "node scripts/watch.mjs",
  build: "vue-tsc --noEmit && node scripts/build.mjs && electron-builder"
};
const dependencies = {
  autoprefixer: "^10.4.2",
  "electron-store": "^8.0.1",
  postcss: "^8.4.5",
  serialport: "^10.0.2",
  sqlite3: "^5.0.2",
  tailwindcss: "^3.0.15",
  "vue-router": "^4.0.12",
  vuex: "^4.0.2"
};
const devDependencies = {
  "@types/serialport": "^8.0.2",
  "@types/sqlite3": "^3.1.8",
  "@vitejs/plugin-vue": "^2.0.1",
  chalk: "^5.0.0",
  electron: "16.0.2",
  "electron-builder": "^22.14.5",
  typescript: "^4.5.4",
  vite: "^2.7.12",
  "vitejs-plugin-electron": "^1.3.0",
  vue: "^3.2.26",
  "vue-tsc": "^0.30.2"
};
const env = {
  "//": "Used in build scripts",
  HOST: "127.0.0.1",
  PORT: 5555
};
var _package = {
  name,
  version,
  main,
  author,
  license,
  engines,
  scripts,
  dependencies,
  devDependencies,
  env
};
exports.author = author;
exports["default"] = _package;
exports.dependencies = dependencies;
exports.devDependencies = devDependencies;
exports.engines = engines;
exports.env = env;
exports.license = license;
exports.main = main;
exports.name = name;
exports.scripts = scripts;
exports.version = version;
