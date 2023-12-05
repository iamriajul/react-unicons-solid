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

// src/icons/uis-dialpad.tsx
var uis_dialpad_exports = {};
__export(uis_dialpad_exports, {
  default: () => uis_dialpad_default
});
module.exports = __toCommonJS(uis_dialpad_exports);
var import_react = __toESM(require("react"), 1);
var UisDialpad = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M14,9.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C14.8,9.6,14.4,9.2,14,9.2z M14,16.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C14.8,16.6,14.4,16.2,14,16.2z M7,2.2H3C2.6,2.2,2.2,2.6,2.2,3v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C7.8,2.6,7.4,2.2,7,2.2z M7,9.2H3c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C7.8,9.6,7.4,9.2,7,9.2z M21,2.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C21.8,2.6,21.4,2.2,21,2.2z M14,2.2h-4C9.6,2.2,9.2,2.6,9.2,3v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8V3C14.8,2.6,14.4,2.2,14,2.2z M21,9.2h-4c-0.4,0-0.8,0.3-0.8,0.8v4c0,0.4,0.3,0.8,0.8,0.8h4c0.4,0,0.8-0.3,0.8-0.8v-4C21.8,9.6,21.4,9.2,21,9.2z"
  }));
};
var uis_dialpad_default = UisDialpad;
