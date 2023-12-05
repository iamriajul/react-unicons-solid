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

// src/icons/uis-microscope.tsx
var uis_microscope_exports = {};
__export(uis_microscope_exports, {
  default: () => uis_microscope_default
});
module.exports = __toCommonJS(uis_microscope_exports);
var import_react = __toESM(require("react"), 1);
var UisMicroscope = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20,21h-5.2c0.1-0.2,0.1-0.4,0.1-0.6c3-1.2,5-4.1,5-7.4c0-2-0.8-3.9-2.1-5.4l0.6-0.6c0.1-0.1,0.2-0.2,0.2-0.4l0.7-2.1c0.1-0.4,0-0.8-0.2-1l-2.1-2.1c-0.3-0.3-0.7-0.4-1-0.2L14,1.8c-0.1,0-0.3,0.1-0.4,0.2L7.2,8.4c-0.4,0.4-0.4,1,0,1.4l0,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4l0,0l2.1,2.1c0.4,0.4,1,0.4,1.4,0l1.4-1.4l0,0c0.4,0.4,1,0.4,1.4,0l0,0L16.5,9c1,1.1,1.5,2.5,1.5,4c0,2.3-1.4,4.4-3.5,5.4c-0.9-1.4-2.7-1.9-4.1-1c-0.4,0.3-0.8,0.6-1,1.1c-0.4-0.2-0.8-0.3-1.1-0.6C8.7,17.8,9,17.4,9,17c0-0.6-0.4-1-1-1H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.3c1,1.1,2.3,2,3.7,2.5c0,0.2,0.1,0.4,0.1,0.5H4c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1C21,21.5,20.6,21,20,21z M8.6,12.6l-0.7-0.7l0.7-0.7l0.7,0.7L8.6,12.6z M12,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1C13,20.6,12.6,21,12,21z"
  }));
};
var uis_microscope_default = UisMicroscope;
