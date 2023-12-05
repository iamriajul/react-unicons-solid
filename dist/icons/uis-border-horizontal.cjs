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

// src/icons/uis-border-horizontal.tsx
var uis_border_horizontal_exports = {};
__export(uis_border_horizontal_exports, {
  default: () => uis_border_horizontal_default
});
module.exports = __toCommonJS(uis_border_horizontal_exports);
var import_react = __toESM(require("react"), 1);
var UisBorderHorizontal = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M12,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,15,12,15z M12,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,19,12,19z M12,9c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,9,12,9z M12,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S11.4,5,12,5z M4,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,15,4,15z M4,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,19,4,19z M4,9c0.6,0,1-0.4,1-1S4.6,7,4,7S3,7.4,3,8S3.4,9,4,9z M4,5c0.6,0,1-0.4,1-1S4.6,3,4,3S3,3.4,3,4S3.4,5,4,5z M8,5c0.6,0,1-0.4,1-1S8.6,3,8,3S7,3.4,7,4S7.4,5,8,5z M16,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S15.4,5,16,5z M8,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,19,8,19z M16,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,19,16,19z M20,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,15,20,15z M20,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,19,20,19z M20,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,7,20,7z M20,5c0.6,0,1-0.4,1-1s-0.4-1-1-1s-1,0.4-1,1S19.4,5,20,5z"
  }));
};
var uis_border_horizontal_default = UisBorderHorizontal;
