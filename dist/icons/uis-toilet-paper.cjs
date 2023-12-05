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

// src/icons/uis-toilet-paper.tsx
var uis_toilet_paper_exports = {};
__export(uis_toilet_paper_exports, {
  default: () => uis_toilet_paper_default
});
module.exports = __toCommonJS(uis_toilet_paper_exports);
var import_react = __toESM(require("react"), 1);
var UisToiletPaper = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22.3,20.4c-1.2-1.4-1.8-3.1-1.8-4.9V8c0-3.3-2.2-6-5-6h-9c-2.8,0-5,2.7-5,6s2.2,6,5,6h3v1.5c0,2.3,0.8,4.5,2.2,6.2c0.2,0.2,0.5,0.3,0.8,0.3h9c0.6,0,1-0.4,1-1C22.5,20.8,22.4,20.5,22.3,20.4z M6.5,9.2C5.9,9.2,5.4,8.6,5.5,8c-0.1-0.6,0.4-1.2,1-1.2c0.6,0.1,1.1,0.6,1,1.2C7.6,8.6,7.1,9.2,6.5,9.2z M13,20c-1-1.3-1.5-2.9-1.5-4.6v-7c0,0,0-0.1,0-0.1c0-0.1,0-0.3,0-0.4c0-1.4-0.4-2.8-1.3-4h5.3c1.7,0,3,1.8,3,4v7.5c0,1.6,0.4,3.2,1.1,4.6H13z"
  }));
};
var uis_toilet_paper_default = UisToiletPaper;
