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

// src/icons/uis-border-vertical.tsx
var uis_border_vertical_exports = {};
__export(uis_border_vertical_exports, {
  default: () => uis_border_vertical_default
});
module.exports = __toCommonJS(uis_border_vertical_exports);
var import_react = __toESM(require("react"), 1);
var UisBorderVertical = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M11,3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V4C12,3.4,11.6,3,11,3z M7,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S7.6,11,7,11z M3,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,11,3,11z M15,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,11,15,11z M19,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,11,19,11z M7,3C6.4,3,6,3.4,6,4s0.4,1,1,1s1-0.4,1-1S7.6,3,7,3z M3,3C2.4,3,2,3.4,2,4s0.4,1,1,1s1-0.4,1-1S3.6,3,3,3z M15,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,3,15,3z M19,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S18.4,5,19,5z M19,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,7,19,7z M19,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,15,19,15z M3,7C2.4,7,2,7.4,2,8s0.4,1,1,1s1-0.4,1-1S3.6,7,3,7z M3,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,15,3,15z M7,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S7.6,19,7,19z M3,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S3.6,19,3,19z M15,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S15.6,19,15,19z M19,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S19.6,19,19,19z"
  }));
};
var uis_border_vertical_default = UisBorderVertical;
