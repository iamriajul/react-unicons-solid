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

// src/icons/uis-border-top.tsx
var uis_border_top_exports = {};
__export(uis_border_top_exports, {
  default: () => uis_border_top_default
});
module.exports = __toCommonJS(uis_border_top_exports);
var import_react = __toESM(require("react"), 1);
var UisBorderTop = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M4,4.5h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4c-0.6,0-1,0.4-1,1S3.4,4.5,4,4.5z M12,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,6.5,12,6.5z M12,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,10.5,12,10.5z M12,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,14.5,12,14.5z M12,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S12.6,18.5,12,18.5z M20,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,6.5,20,6.5z M20,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,10.5,20,10.5z M20,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,14.5,20,14.5z M20,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S20.6,18.5,20,18.5z M16,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,18.5,16,18.5z M8,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,18.5,8,18.5z M16,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S16.6,10.5,16,10.5z M8,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S8.6,10.5,8,10.5z M4,6.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,6.5,4,6.5z M4,10.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,10.5,4,10.5z M4,14.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,14.5,4,14.5z M4,18.5c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S4.6,18.5,4,18.5z"
  }));
};
var uis_border_top_default = UisBorderTop;
