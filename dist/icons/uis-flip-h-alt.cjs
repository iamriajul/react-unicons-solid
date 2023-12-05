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

// src/icons/uis-flip-h-alt.tsx
var uis_flip_h_alt_exports = {};
__export(uis_flip_h_alt_exports, {
  default: () => uis_flip_h_alt_default
});
module.exports = __toCommonJS(uis_flip_h_alt_exports);
var import_react = __toESM(require("react"), 1);
var UisFlipHAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M7.4,7.2c0.1,0,0.2,0,0.2,0l1.9-0.5c0.5-0.1,0.9-0.7,0.7-1.2c-0.1-0.5-0.7-0.9-1.2-0.7L7.1,5.2c-0.4,0.1-0.8,0.5-0.8,1C6.4,6.7,6.8,7.2,7.4,7.2z M9.5,9h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S10.1,9,9.5,9z M13.2,5.7c0.1,0,0.2,0,0.2,0l1.9-0.5c0,0,0,0,0,0C15.9,5,16.3,4.5,16.1,4c-0.1-0.5-0.7-0.9-1.2-0.7L13,3.7c-0.4,0.1-0.8,0.5-0.8,1C12.2,5.2,12.7,5.7,13.2,5.7z M13.5,9c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1H13.5z M21,2.8c-0.1-0.5-0.7-0.9-1.2-0.7l-1,0.2c-0.4,0.1-0.8,0.5-0.8,1c0,0.6,0.4,1,1,1C19.1,4.7,19.5,5,20,5h0c0.6,0,1-0.4,1-1V3C21,2.9,21,2.8,21,2.8z M4,10.5L4,10.5c0.6,0,1-0.4,1-1v-2c0-0.6-0.4-1-1-1S3,7,3,7.5v2C3,10.1,3.4,10.5,4,10.5z M20,7c-0.6,0-1,0.4-1,1v1.1c-0.3,0.2-0.5,0.5-0.5,0.9c0,0.6,0.4,1,1,1H20c0.6,0,1-0.4,1-1V8C21,7.4,20.6,7,20,7z M20,13H4c-0.6,0-1,0.4-1,1v3c0,0.5,0.3,0.9,0.8,1l16,4c0.1,0,0.2,0,0.2,0c0.6,0,1-0.4,1-1v-7C21,13.4,20.6,13,20,13z"
  }));
};
var uis_flip_h_alt_default = UisFlipHAlt;
