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

// src/icons/uis-layer-group.tsx
var uis_layer_group_exports = {};
__export(uis_layer_group_exports, {
  default: () => uis_layer_group_default
});
module.exports = __toCommonJS(uis_layer_group_exports);
var import_react = __toESM(require("react"), 1);
var UisLayerGroup = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M2.5,8.9l9,5.2c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1l9-5.2c0.2-0.1,0.3-0.2,0.4-0.4C22.1,8,22,7.4,21.5,7.1l-9-5.2c-0.3-0.2-0.7-0.2-1,0l-9,5.2C2.3,7.2,2.2,7.3,2.1,7.5C1.9,8,2,8.6,2.5,8.9z M21.5,11.1L21.3,11l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,11l-0.2,0.1C2,11.4,1.9,12,2.1,12.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,11.3,21.7,11.2,21.5,11.1z M21.5,15.1L21.3,15l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,15l-0.2,0.1C2,15.4,1.9,16,2.1,16.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,15.3,21.7,15.2,21.5,15.1z"
  }));
};
var uis_layer_group_default = UisLayerGroup;
