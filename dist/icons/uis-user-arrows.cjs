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

// src/icons/uis-user-arrows.tsx
var uis_user_arrows_exports = {};
__export(uis_user_arrows_exports, {
  default: () => uis_user_arrows_default
});
module.exports = __toCommonJS(uis_user_arrows_exports);
var import_react = __toESM(require("react"), 1);
var UisUserArrows = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M6.6,6.9C6.6,7,6.7,7.1,6.8,7.2l2,2C9,9.4,9.2,9.5,9.5,9.5c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.9,7.5h4.2l-0.3,0.3c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l2-2l0,0c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.3l-2-2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l0.3,0.3H9.9l0.3-0.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-2,2c0,0,0,0,0,0l0,0c0,0,0,0,0,0C6.7,5.9,6.6,6,6.6,6.1c0,0.1-0.1,0.2-0.1,0.4c0,0,0,0,0,0c0,0,0,0,0,0C6.5,6.6,6.5,6.8,6.6,6.9z M6,14.7c1.4,0,2.6-1.2,2.6-2.6c0-1.4-1.2-2.6-2.6-2.6c-1.4,0-2.6,1.2-2.6,2.6C3.4,13.5,4.6,14.7,6,14.7z M9.8,17.4c-2.6-2.1-6.4-1.7-8.5,0.9C1.1,18.6,1,18.9,1,19.2c0,0.7,0.6,1.3,1.3,1.3h7.4c0.5,0,1-0.3,1.2-0.7c0.2-0.4,0.2-1-0.2-1.4C10.4,18,10.1,17.7,9.8,17.4z M15.4,12.1c0,1.4,1.2,2.6,2.6,2.6s2.6-1.2,2.6-2.6c0-1.4-1.2-2.6-2.6-2.6C16.6,9.5,15.4,10.7,15.4,12.1z M22.7,18.4c-0.3-0.3-0.6-0.7-0.9-0.9c-2.6-2.1-6.4-1.7-8.5,0.9c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.7,0.6,1.3,1.3,1.3h7.4c0.5,0,1-0.3,1.2-0.7C23.1,19.3,23,18.8,22.7,18.4z"
  }));
};
var uis_user_arrows_default = UisUserArrows;
