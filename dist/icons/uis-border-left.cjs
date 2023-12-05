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

// src/icons/uis-border-left.tsx
var uis_border_left_exports = {};
__export(uis_border_left_exports, {
  default: () => uis_border_left_default
});
module.exports = __toCommonJS(uis_border_left_exports);
var import_react = __toESM(require("react"), 1);
var UisBorderLeft = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M3.5,3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V4C4.5,3.4,4.1,3,3.5,3z M7.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,11,7.5,11z M11.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,11,11.5,11z M15.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,11,15.5,11z M19.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,11,19.5,11z M7.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,3,7.5,3z M11.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,3,11.5,3z M15.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,3,15.5,3z M19.5,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S18.9,5,19.5,5z M19.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,7,19.5,7z M19.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,15,19.5,15z M11.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,7,11.5,7z M11.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,15,11.5,15z M7.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.1,19,7.5,19z M11.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.1,19,11.5,19z M15.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.1,19,15.5,19z M19.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.1,19,19.5,19z"
  }));
};
var uis_border_left_default = UisBorderLeft;
