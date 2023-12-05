"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/uis-sync-slash.tsx
var uis_sync_slash_exports = {};
__export(uis_sync_slash_exports, {
  default: () => uis_sync_slash_default
});
module.exports = __toCommonJS(uis_sync_slash_exports);
var import_react = __toESM(require("react"), 1);
var UisSyncSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M18.3,7.1C18.3,7.1,18.3,7.1,18.3,7.1l1.4-1.4c0,0,0,0,0,0l2-2c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2,2c-3.6-3-8.9-3.1-12.6,0C5.5,4.4,5.3,4.6,5.1,4.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4.5c0,0.6,0.4,1,1,1h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2c2.5-2.6,6.5-3.3,9.8-1.4c0.3,0.2,0.6,0.4,0.9,0.6L5.7,16.9C4.6,15.5,4,13.8,4,12c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,2.3,0.8,4.6,2.3,6.3l-2,2C2.1,20.5,2,20.7,2,21c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l2-2c0,0,0,0,0,0l1.4-1.4c0,0,0,0,0,0L18.3,7.1z M19.9,15.5h-4.5c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.4c-2.2,2.4-5.8,3.2-8.9,1.9l-1.5,1.5c1.4,0.7,3,1.1,4.6,1.1c2.6,0,5-1,6.9-2.8V21c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5C20.9,15.9,20.4,15.5,19.9,15.5z M19.4,8.9c0.4,1,0.6,2,0.6,3.1c0,0.6,0.4,1,1,1s1-0.4,1-1c0-1.6-0.4-3.2-1.1-4.6L19.4,8.9z"
  }));
};
var uis_sync_slash_default = UisSyncSlash;
