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

// src/icons/uis-rocket.tsx
var uis_rocket_exports = {};
__export(uis_rocket_exports, {
  default: () => uis_rocket_default
});
module.exports = __toCommonJS(uis_rocket_exports);
var import_react = __toESM(require("react"), 1);
var UisRocket = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M22.6,2.1c-0.1-0.3-0.4-0.6-0.7-0.7C17.7,0.3,13.4,1.6,10.5,5L9.4,6.3L6.7,5.7C5.4,5.2,4,5.8,3.4,7l-2.2,3.9c-0.2,0.3-0.2,0.6,0,0.9c0.1,0.3,0.4,0.5,0.7,0.6l3.1,0.7c-0.3,0.8-0.4,1.6-0.6,2.4c0,0.3,0.1,0.6,0.3,0.8l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0.1,0,0.1,0c0.9-0.1,1.7-0.2,2.5-0.5l0.6,3c0.1,0.3,0.3,0.6,0.6,0.7c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1l3.9-2.2c1.1-0.6,1.7-2,1.4-3.3l-0.7-2.8l1.2-1.1C22.3,10.7,23.7,6.2,22.6,2.1z M7.3,8.8c-0.6,0.8-1.2,1.6-1.6,2.4l-2.1-0.5L5.1,8c0.2-0.4,0.6-0.5,1.1-0.4L7.9,8L7.3,8.8z M16,18.9l-2.7,1.5l-0.4-2c0.9-0.4,1.7-1,2.4-1.6l0.7-0.7l0.4,1.7C16.6,18.3,16.3,18.8,16,18.9z M16.7,8.8c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C18.2,8.1,17.6,8.8,16.7,8.8z"
  }));
};
var uis_rocket_default = UisRocket;
