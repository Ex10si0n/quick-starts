"use strict";
var os = require("os");
var path = require("path");
var electron = require("electron");
var Store = require("electron-store");
var sqlite3 = require("sqlite3");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var os__default = /* @__PURE__ */ _interopDefaultLegacy(os);
var path__default = /* @__PURE__ */ _interopDefaultLegacy(path);
var Store__default = /* @__PURE__ */ _interopDefaultLegacy(Store);
var sqlite3__default = /* @__PURE__ */ _interopDefaultLegacy(sqlite3);
Store__default["default"].initRenderer();
const dbpath = path__default["default"].join(electron.app.getPath("userData"), "sqlite3.db");
new sqlite3__default["default"].Database(dbpath, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("[sqlite3] connect success.");
  console.log(dbpath);
});
const isWin7 = os__default["default"].release().startsWith("6.1");
if (isWin7)
  electron.app.disableHardwareAcceleration();
if (!electron.app.requestSingleInstanceLock()) {
  electron.app.quit();
  process.exit(0);
}
let win = null;
async function createWindow() {
  win = new electron.BrowserWindow({
    title: "Main window",
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  if (electron.app.isPackaged) {
    win.loadFile(path.join(__dirname, "../renderer/index.html"));
  } else {
    const pkg = await Promise.resolve().then(function() {
      return require("./package.js");
    });
    const url = `http://${pkg.env.HOST || "127.0.0.1"}:${pkg.env.PORT}`;
    win.loadURL(url);
  }
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", new Date().toLocaleString());
  });
}
electron.app.whenReady().then(createWindow);
electron.app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("second-instance", () => {
  if (win) {
    if (win.isMinimized())
      win.restore();
    win.focus();
  }
});
electron.app.on("activate", () => {
  const allWindows = electron.BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});
