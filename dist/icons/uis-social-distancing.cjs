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

// src/icons/uis-social-distancing.tsx
var uis_social_distancing_exports = {};
__export(uis_social_distancing_exports, {
  default: () => uis_social_distancing_default
});
module.exports = __toCommonJS(uis_social_distancing_exports);
var import_react = __toESM(require("react"), 1);
var UisSocialDistancing = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M21.2,17.3l-2-2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.3,0.3h-2.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.6l-0.3,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l2-2l0,0c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4C21.4,17.5,21.3,17.4,21.2,17.3z M8.5,17H5.9l0.3-0.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2,2c0,0,0,0,0,0l0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3l2,2C5,20.9,5.2,21,5.5,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L5.9,19h2.6c0.6,0,1-0.4,1-1S9.1,17,8.5,17z M18,9.2c1.4,0,2.6-1.2,2.6-2.6S19.4,4,18,4c-1.4,0-2.6,1.2-2.6,2.6C15.4,8,16.6,9.2,18,9.2z M22.7,12.9c-2.1-2.6-5.9-3-8.5-0.9c-0.3,0.3-0.7,0.6-0.9,0.9c-0.4,0.6-0.4,1.4,0.2,1.8c0.2,0.2,0.5,0.3,0.8,0.3h1.9c0.1-0.3,0.3-0.5,0.5-0.8c1-1,2.6-1,3.5,0L21,15h0.6c0.7,0,1.3-0.6,1.3-1.3C23,13.4,22.9,13.1,22.7,12.9z M2.2,11.9c-0.3,0.3-0.7,0.6-0.9,0.9c-0.4,0.6-0.4,1.4,0.2,1.8C1.7,14.9,2,15,2.3,15H3l0.8-0.8c1-1,2.6-1,3.5,0c0.2,0.2,0.4,0.5,0.5,0.8h1.9c0.7,0,1.3-0.6,1.3-1.3c0-0.3-0.1-0.6-0.3-0.8C8.6,10.3,4.8,9.9,2.2,11.9z M6,9.2c1.4,0,2.6-1.2,2.6-2.6S7.4,4,6,4C4.6,4,3.4,5.2,3.4,6.6C3.4,8,4.6,9.2,6,9.2z"
  }));
};
var uis_social_distancing_default = UisSocialDistancing;
