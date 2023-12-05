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

// src/icons/uis-coronavirus.tsx
var uis_coronavirus_exports = {};
__export(uis_coronavirus_exports, {
  default: () => uis_coronavirus_default
});
module.exports = __toCommonJS(uis_coronavirus_exports);
var import_react = __toESM(require("react"), 1);
var UisCoronavirus = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22,11h-1.1c-0.2-1.7-0.9-3.3-1.9-4.6l0.8-0.8c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L17.6,5c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1.1C9.3,3.2,7.7,3.9,6.4,5L5.6,4.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L5,6.4C3.9,7.7,3.2,9.3,3.1,11H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.1c0.2,1.7,0.9,3.3,1.9,4.6l-0.8,0.8c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L6.4,19c1.3,1.1,2.9,1.7,4.6,1.9V22c0,0.6,0.4,1,1,1s1-0.4,1-1v-1.1c1.7-0.2,3.3-0.9,4.6-1.9l0.8,0.8c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L19,17.6c1.1-1.3,1.7-2.9,1.9-4.6H22c0.6,0,1-0.4,1-1S22.6,11,22,11z M9,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S9.6,16,9,16z M9.5,12C8.7,12,8,11.3,8,10.5S8.7,9,9.5,9S11,9.7,11,10.5S10.3,12,9.5,12z M14.5,15c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S15.3,15,14.5,15z M15,10c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S15.6,10,15,10z"
  }));
};
var uis_coronavirus_default = UisCoronavirus;
