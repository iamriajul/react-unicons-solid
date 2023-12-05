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

// src/icons/uis-store-slash.tsx
var uis_store_slash_exports = {};
__export(uis_store_slash_exports, {
  default: () => uis_store_slash_default
});
module.exports = __toCommonJS(uis_store_slash_exports);
var import_react = __toESM(require("react"), 1);
var UisStoreSlash = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15,10.6c0.8,0.9,1.8,1.4,3,1.4v1.8l2,2v-4.3c1.2-0.7,2-2,2-3.4c0-0.1,0-0.3-0.1-0.4l-2-5C19.8,2.2,19.4,2,19,2H6.2L15,10.6C14.9,10.7,15,10.6,15,10.6z M22.7,21.3L20,18.6v0l-2-2v0l-4.8-4.8l0,0L4.1,2.6l0,0L2.7,1.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2,2l-1.2,3C2,7.7,2,7.9,2,8c0,1.4,0.8,2.7,2,3.4V21c0,0.6,0.4,1,1,1h14c0.4,0,0.8-0.3,0.9-0.7l1.4,1.4c0.4,0.4,1,0.4,1.4,0C23.1,22.3,23.1,21.7,22.7,21.3z M10,14c-0.6,0-1,0.4-1,1v5H6v-8c1.2,0,2.2-0.5,3-1.4c0.3,0.3,0.6,0.6,1,0.8l2.6,2.6H10z M18,20h-3v-3.6l3,3V20z"
  }));
};
var uis_store_slash_default = UisStoreSlash;
