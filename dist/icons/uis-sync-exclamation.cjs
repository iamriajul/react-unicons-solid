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

// src/icons/uis-sync-exclamation.tsx
var uis_sync_exclamation_exports = {};
__export(uis_sync_exclamation_exports, {
  default: () => uis_sync_exclamation_default
});
module.exports = __toCommonJS(uis_sync_exclamation_exports);
var import_react = __toESM(require("react"), 1);
var UisSyncExclamation = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,13L12,13c0.6,0,1-0.4,1-1V9c0-0.6-0.4-1-1-1s-1,0.4-1,1v3C11,12.6,11.4,13,12,13z M11,15c0,0.5,0.5,1,1,1c0,0,0,0,0,0c0.5,0,1-0.5,1-1c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.3-0.7-0.4-1.1-0.2c-0.1,0-0.2,0.1-0.3,0.2C11.1,14.5,11,14.7,11,15C11,15,11,15,11,15z M17,3.3C13.1,1.1,8.3,1.8,5.1,4.7V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4.5c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.2,0.3,0.4,0.5,0.5c0,0,0,0,0,0C3.9,8.5,4,8.5,4.1,8.5h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2C7.7,4.9,9.8,4,12,4c4.4,0,8,3.6,8,8v0c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1C22,8.4,20.1,5.1,17,3.3z M19.9,15.5h-4.5c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.4C16.3,19.1,14.2,20,12,20c-4.4,0-8-3.6-8-8c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,5.5,4.5,10,10,10c2.6,0,5-1,6.9-2.8V21c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-4.5C20.9,15.9,20.4,15.5,19.9,15.5z"
  }));
};
var uis_sync_exclamation_default = UisSyncExclamation;
