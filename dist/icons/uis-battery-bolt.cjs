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

// src/icons/uis-battery-bolt.tsx
var uis_battery_bolt_exports = {};
__export(uis_battery_bolt_exports, {
  default: () => uis_battery_bolt_default
});
module.exports = __toCommonJS(uis_battery_bolt_exports);
var import_react = __toESM(require("react"), 1);
var UisBatteryBolt = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M17,7H4C2.9,7,2,7.9,2,9v6c0,1.1,0.9,2,2,2h6.7c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5l1.4-2.5H8l0,0l0,0c-0.1,0-0.2,0-0.3-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0.1-0.3,0.1-0.4c0,0,0,0,0-0.1l2.3-4c0.3-0.5,0.9-0.6,1.4-0.4c0.5,0.3,0.6,0.9,0.4,1.4c0,0,0,0,0,0L9.7,11H13c0,0,0,0,0.1,0c0.1,0,0.3,0.1,0.4,0.1c0,0,0,0,0.1,0c0,0,0.1,0.1,0.1,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0.1l-2.3,4C11.4,16.8,11,17,10.7,17H17c1.1,0,2-0.9,2-2V9C19,7.9,18.1,7,17,7z M21,10c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2C22,10.4,21.6,10,21,10z"
  }));
};
var uis_battery_bolt_default = UisBatteryBolt;
