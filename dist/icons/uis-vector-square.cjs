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

// src/icons/uis-vector-square.tsx
var uis_vector_square_exports = {};
__export(uis_vector_square_exports, {
  default: () => uis_vector_square_default
});
module.exports = __toCommonJS(uis_vector_square_exports);
var import_react = __toESM(require("react"), 1);
var UisVectorSquare = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M20,16.2V7.8c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3c-1.3,0-2.4,0.8-2.8,2H7.8C7.4,2.8,6.3,2,5,2C3.3,2,2,3.3,2,5c0,1.3,0.8,2.4,2,2.8v8.4c-1.2,0.4-2,1.5-2,2.8c0,1.7,1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h8.4c0.4,1.2,1.5,2,2.8,2c1.7,0,3-1.3,3-3C22,17.7,21.2,16.6,20,16.2z M16.2,18H7.8c-0.3-0.8-1-1.5-1.8-1.8V7.8c0.8-0.3,1.5-1,1.8-1.8h8.4c0.3,0.8,1,1.5,1.8,1.8v8.4C17.2,16.5,16.5,17.2,16.2,18z M19,4c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1s-1-0.4-1-1S18.4,4,19,4z M5,4c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1S4,5.6,4,5S4.4,4,5,4z M5,20c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1,0.4,1,1C6,19.6,5.6,20,5,20z M19,20c-0.6,0-1-0.4-1-1s0.4-1,1-1c0.6,0,1,0.4,1,1C20,19.6,19.6,20,19,20z"
  }));
};
var uis_vector_square_default = UisVectorSquare;
