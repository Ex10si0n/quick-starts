### This quick start template is forked from `caoxiemeihao/electron-vite-boilerplate`

# electron-vite-boilerplate

![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-boilerplate?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-boilerplate?color=fa6470&style=flat)

## Overview

Enabled `Electron` and `NodeJs` in `Renderer-process` by **[vitejs-plugin-electron](https://www.npmjs.com/package/vitejs-plugin-electron)**.

## Feature

- [x] `Vue3`
- [x] `electron-store`
- [x] `sqlite3`

## Run Setup

  ```bash
  # clone the project
  git clone git@github.com:caoxiemeihao/electron-vite-boilerplate.git

  # enter the project directory
  cd electron-vite-boilerplate

  # install dependency
  npm install

  # develop
  npm run dev
  ```

## Directory

Once `dev` or `build` npm-script executed will be generate named `dist` folder. It has children dir of same as `src` folder, the purpose of this design can ensure the correct path calculation.

```tree
├── dist              Tt's generated according to the "src" directory
├   ├── main
├   ├── preload
├   ├── renderer
├
├── scripts
├   ├── build.js      Build script, for -> npm run build
├   ├── esbuild.js
├   ├── watch.js      Develop script, for -> npm run dev
├
├── src
├   ├── main          Main-process source code
├   ├── preload       Preload-script source code
├   ├── renderer      Renderer-process source code
├
```

## ⚠️ pnpm

> The "node_modules" file structure generated by "pnpm" will lead to errors in the packaging of "electron builder". For example, the project needs to use "SQLite3"

## Branch

#### [esbuild](https://github.com/caoxiemeihao/electron-vite-boilerplate/tree/esbuild)
- Use `Vite` build `Renderer-process`.
- Use `esbuild` build `Main-process` and `Preload-script`.

#### [webpack](https://github.com/caoxiemeihao/electron-vite-boilerplate/tree/webpack)

- [x] `React` + `Antd` + `Less`
- [x] Support `swc-loader`
- [x] Support `babel-lader`
- [x] Integrate `electron-store`
- [x] Integrate `sqlite3`
