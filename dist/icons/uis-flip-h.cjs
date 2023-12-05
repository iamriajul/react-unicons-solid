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

// src/icons/uis-flip-h.tsx
var uis_flip_h_exports = {};
__export(uis_flip_h_exports, {
  default: () => uis_flip_h_default
});
module.exports = __toCommonJS(uis_flip_h_exports);
var import_react = __toESM(require("react"), 1);
var UisFlipH = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z M17,15H7c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l5,5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l5-5c0.2-0.2,0.3-0.4,0.3-0.7C18,15.4,17.6,15,17,15z M15.4,8c0,0.6,0.4,1,1,1H17c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-0.7-0.7c-0.3-0.3-0.8-0.4-1.2-0.2c-0.5,0.2-0.7,0.8-0.4,1.3C15.4,7.9,15.4,7.9,15.4,8z M11.6,4.8L12,4.4l0.8,0.8c0.2,0.2,0.4,0.3,0.7,0.3h0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3-0.2c0-0.1-0.1-0.2-0.2-0.3c-0.4-0.4-1-0.4-1.4,0l-1.1,1.1c-0.4,0.4-0.4,1,0,1.4S11.3,5.2,11.6,4.8z M7.1,9c0.3,0,0.5-0.1,0.7-0.3l1.1-1.1c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.3,7.2C6.2,7.4,6.1,7.7,6.1,7.9C6.1,8.5,6.5,8.9,7.1,9z M10.9,9h1.5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1.5c-0.6,0-1,0.4-1,1S10.4,9,10.9,9z"
  }));
};
var uis_flip_h_default = UisFlipH;
