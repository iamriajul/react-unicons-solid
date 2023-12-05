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

// src/icons/uis-user-md.tsx
var uis_user_md_exports = {};
__export(uis_user_md_exports, {
  default: () => uis_user_md_default
});
module.exports = __toCommonJS(uis_user_md_exports);
var import_react = __toESM(require("react"), 1);
var UisUserMd = (_a) => {
  var _b = _a, { color = "currentColor", size = 24 } = _b, props = __objRest(_b, ["color", "size"]);
  return import_react.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, props), import_react.default.createElement("path", {
    d: "M15.9,13.2L15.9,13.2c-0.1,0-0.1-0.1-0.2-0.1C17.2,12,18,10.3,18,8.4c0-0.2,0-0.4,0-0.6c0,0,0-0.1,0-0.1l0.3-2.4c0.2-1.6-0.9-3-2.4-3.3L15,1.8C13,1.5,11,1.5,9,1.8L8.2,2C6.6,2.3,5.5,3.7,5.7,5.3L6,7.7c0,0,0,0.1,0,0.1C6,8,6,8.2,6,8.4c0,1.8,0.8,3.6,2.3,4.7c-0.1,0-0.1,0.1-0.2,0.1l0,0c-3.3,1.4-5.6,4.5-6,8.1c-0.1,0.5,0.3,1,0.9,1.1c0.6,0.1,17.5,0,18,0c0,0,0.1,0,0.1,0c0.5-0.1,0.9-0.6,0.9-1.1C21.5,17.7,19.2,14.6,15.9,13.2z M12,16.3l-1.7-1.7c1.1-0.2,2.2-0.2,3.3,0L12,16.3z M12,12.4c-2.2,0-3.9-1.7-4-3.9h8C15.9,10.7,14.2,12.4,12,12.4z"
  }));
};
var uis_user_md_default = UisUserMd;
