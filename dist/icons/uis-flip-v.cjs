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

// src/icons/uis-flip-v.tsx
var uis_flip_v_exports = {};
__export(uis_flip_v_exports, {
  default: () => uis_flip_v_default
});
module.exports = __toCommonJS(uis_flip_v_exports);
var import_react = __toESM(require("react"), 1);
var UisFlipV = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M12,2c-0.6,0-1,0.4-1,1v18c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V3C13,2.4,12.6,2,12,2z M21.7,11.3l-5-5C16.5,6.1,16.3,6,16,6c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l5-5C22.1,12.3,22.1,11.7,21.7,11.3z M3.8,9.8l-1.1,1.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0-0.2,0.1-0.3,0.2c-0.4,0.4-0.4,1,0,1.4l1.1,1.1c0.2,0.2,0.4,0.3,0.7,0.3h0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L4.4,12l0.8-0.8c0.4-0.4,0.4-1,0-1.4S4.2,9.4,3.8,9.8z M7.6,15.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l1.1,1.1C7.4,17.8,7.7,18,7.9,18l0,0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.6,15.2z M7.3,6.3L6.6,7C6.4,7.1,6.3,7.4,6.3,7.7c0,0.6,0.4,1,1,1c0.2,0,0.3,0,0.5-0.1c0.1,0,0.1,0,0.2,0c0.6,0,1-0.4,1-1V7c0-0.3-0.1-0.5-0.3-0.7C8.3,5.9,7.7,5.9,7.3,6.3z M8,10.6c-0.6,0-1,0.4-1,1v1.5c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-1.5C9,11,8.6,10.6,8,10.6z"
  }));
};
var uis_flip_v_default = UisFlipV;
