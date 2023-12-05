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

// src/icons/uis-flip-v-alt.tsx
var uis_flip_v_alt_exports = {};
__export(uis_flip_v_alt_exports, {
  default: () => uis_flip_v_alt_default
});
module.exports = __toCommonJS(uis_flip_v_alt_exports);
var import_react = __toESM(require("react"), 1);
var UisFlipVAlt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4.9,12.2c-0.5-0.1-1.1,0.2-1.2,0.7l-0.5,1.9C3.1,15.4,3.4,16,4,16.1c0.1,0,0.2,0,0.2,0c0.5,0,0.9-0.3,1-0.8l0.5-1.9C5.8,12.9,5.5,12.4,4.9,12.2z M7.5,5h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1S7,5,7.5,5z M4.2,19c0-0.5-0.3-0.9-0.8-1c-0.5-0.1-1.1,0.2-1.2,0.7l-0.2,1c0,0.1,0,0.2,0,0.2c0,0.6,0.4,1,1,1h1c0.5,0,0.9-0.3,1-0.8C5.1,19.7,4.8,19.2,4.2,19z M6.4,6.4C5.9,6.3,5.3,6.6,5.2,7.1L4.7,9.1c0,0.1,0,0.2,0,0.2c0,0.6,0.4,1,1,1c0.5,0,0.9-0.3,1-0.8l0.5-1.9C7.3,7.1,6.9,6.6,6.4,6.4z M10,12.5c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-2C11,13,10.6,12.5,10,12.5z M10,6.5c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-2C11,7,10.6,6.5,10,6.5z M10.5,18.6C10,18.4,9.4,18.5,9.1,19H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1v-0.5C11,19.2,10.8,18.8,10.5,18.6z M22,19.8l-4-16C17.9,3.3,17.5,3,17,3h-3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h7c0.1,0,0.2,0,0.2,0C21.8,20.8,22.1,20.3,22,19.8z"
  }));
};
var uis_flip_v_alt_default = UisFlipVAlt;
