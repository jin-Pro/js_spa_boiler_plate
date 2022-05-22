/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Common/Component.js":
/*!*********************************!*\
  !*** ./src/Common/Component.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _Request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request.js */ \"./src/Common/Request.js\");\n\n\nclass Component {\n  $target;\n  $state;\n\n  constructor({ $target, $state, type, fn, url, method }) {\n    this.$target = $target;\n    this.init({ $state, type, fn, url, method });\n  }\n\n  async init({ $state, type, fn, url, method }) {\n    await this.setUp({ $state, url, method });\n    this.render();\n    this.setEvent({ type, fn });\n    this.mount();\n  }\n\n  async setUp({ $state, url, method }) {\n    const data = $state ? $state : await (0,_Request_js__WEBPACK_IMPORTED_MODULE_0__.request)(url, method);\n    this.$state = data;\n  }\n\n  setState(newState) {\n    this.$state = newState;\n    this.render();\n  }\n\n  setEvent({ type, fn }) {\n    this.$target.addEventListener(type, fn);\n  }\n\n  mount() {\n    // ... custome\n  }\n\n  template() {\n    // ... custome\n    return ``;\n  }\n\n  render() {\n    this.$target.innerHTML = this.template();\n  }\n}\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Common/Component.js?");

/***/ }),

/***/ "./src/Common/Constant.js":
/*!********************************!*\
  !*** ./src/Common/Constant.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ROUTE_EVENT_NAME\": () => (/* binding */ ROUTE_EVENT_NAME)\n/* harmony export */ });\nconst ROUTE_EVENT_NAME = \"route\";\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Common/Constant.js?");

/***/ }),

/***/ "./src/Common/Request.js":
/*!*******************************!*\
  !*** ./src/Common/Request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"request\": () => (/* binding */ request)\n/* harmony export */ });\nconst cache = {};\n\nconst request = async (url, method = { method: \"GET\" }) => {\n  try {\n    if (!url) return [];\n    if (url in cache) return cache[url];\n\n    const res = await fetch(url, method);\n\n    if (res.ok) {\n      const data = await res.json();\n      cache[url] = data;\n      return data;\n    }\n\n    throw new Error(\"API 통신 에러\");\n  } catch (e) {\n    alert(e);\n  }\n};\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Common/Request.js?");

/***/ }),

/***/ "./src/Common/Route.js":
/*!*****************************!*\
  !*** ./src/Common/Route.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAP_CONTAINER\": () => (/* binding */ MAP_CONTAINER),\n/* harmony export */   \"Route\": () => (/* binding */ Route),\n/* harmony export */   \"routeChange\": () => (/* binding */ routeChange)\n/* harmony export */ });\n/* harmony import */ var _Component_Detail_Detail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component/Detail/Detail.js */ \"./src/Component/Detail/Detail.js\");\n/* harmony import */ var _Component_Main_Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Component/Main/Main.js */ \"./src/Component/Main/Main.js\");\n/* harmony import */ var _Constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constant.js */ \"./src/Common/Constant.js\");\n\n\n\n\nconst Route = (routing) => {\n  window.addEventListener(\"popstate\", routing);\n  window.addEventListener(_Constant_js__WEBPACK_IMPORTED_MODULE_2__.ROUTE_EVENT_NAME, routing);\n};\n\nconst MAP_CONTAINER = {\n  \"/\": {\n    html: `<div class=\"MainPage\"></div>`,\n    className: \".MainPage\",\n    page: ($target) => new _Component_Main_Main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ $target }),\n  },\n  \"/detail\": {\n    html: `<div class=\"DetailPage\"></div>`,\n    className: \".DetailPage\",\n    page: ($target) => new _Component_Detail_Detail_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ $target }),\n  },\n};\n\nconst routeChange = (url) => {\n  history.pushState(null, null, url);\n  window.dispatchEvent(new CustomEvent(_Constant_js__WEBPACK_IMPORTED_MODULE_2__.ROUTE_EVENT_NAME));\n};\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Common/Route.js?");

/***/ }),

/***/ "./src/Component/Detail/Detail.js":
/*!****************************************!*\
  !*** ./src/Component/Detail/Detail.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detail)\n/* harmony export */ });\n/* harmony import */ var _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common/Component.js */ \"./src/Common/Component.js\");\n/* harmony import */ var _Common_Route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Route.js */ \"./src/Common/Route.js\");\n/* harmony import */ var _Item_Item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item/Item.js */ \"./src/Component/Detail/Item/Item.js\");\n\n\n\n\nclass Detail extends _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(args) {\n    super(args);\n  }\n\n  template() {\n    return `<div class=\"detailBody\">This is DetailPage</div>`;\n  }\n\n  mount() {\n    const $nextTarget = this.$target.querySelector(\".detailBody\");\n    new _Item_Item_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      $target: $nextTarget,\n      $state: \"detail~~\",\n      type: \"click\",\n      fn: () => (0,_Common_Route_js__WEBPACK_IMPORTED_MODULE_1__.routeChange)(\"/\"),\n    });\n  }\n}\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Component/Detail/Detail.js?");

/***/ }),

/***/ "./src/Component/Detail/Item/Item.js":
/*!*******************************************!*\
  !*** ./src/Component/Detail/Item/Item.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Common/Component.js */ \"./src/Common/Component.js\");\n\n\nclass Item extends _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(args) {\n    super(args);\n  }\n\n  template() {\n    return `<div>${this.$state}</div>`;\n  }\n\n  render() {\n    this.$target.innerHTML += this.template();\n  }\n}\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Component/Detail/Item/Item.js?");

/***/ }),

/***/ "./src/Component/Main/Item/Item.js":
/*!*****************************************!*\
  !*** ./src/Component/Main/Item/Item.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Common/Component.js */ \"./src/Common/Component.js\");\n\n\nclass Item extends _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(args) {\n    super(args);\n  }\n\n  template() {\n    return `<div>${this.$state}</div>`;\n  }\n\n  render() {\n    this.$target.innerHTML += this.template();\n  }\n}\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Component/Main/Item/Item.js?");

/***/ }),

/***/ "./src/Component/Main/Main.js":
/*!************************************!*\
  !*** ./src/Component/Main/Main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Common/Component.js */ \"./src/Common/Component.js\");\n/* harmony import */ var _Common_Route_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Common/Route.js */ \"./src/Common/Route.js\");\n/* harmony import */ var _Item_Item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item/Item.js */ \"./src/Component/Main/Item/Item.js\");\n\n\n\n\nclass Main extends _Common_Component_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(args) {\n    super(args);\n  }\n\n  template() {\n    return `<div class=\"mainBody\">This is MainPage</div>`;\n  }\n\n  mount() {\n    const $nextTarget = this.$target.querySelector(\".mainBody\");\n    new _Item_Item_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      $target: $nextTarget,\n      $state: \"hihi\",\n      type: \"click\",\n      fn: () => (0,_Common_Route_js__WEBPACK_IMPORTED_MODULE_1__.routeChange)(\"/detail\"),\n    });\n  }\n}\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/Component/Main/Main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common_Route_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common/Route.js */ \"./src/Common/Route.js\");\n\n\n(() => {\n  const $target = document.querySelector(\"#root\");\n\n  const route = () => {\n    const { pathname } = location;\n\n    const { html, className, page } = _Common_Route_js__WEBPACK_IMPORTED_MODULE_0__.MAP_CONTAINER[pathname];\n    $target.innerHTML = html;\n    const $nextTarget = $target.querySelector(className);\n    page($nextTarget);\n  };\n\n  (0,_Common_Route_js__WEBPACK_IMPORTED_MODULE_0__.Route)(route);\n  (0,_Common_Route_js__WEBPACK_IMPORTED_MODULE_0__.routeChange)();\n})();\n\n\n//# sourceURL=webpack://js_spa_boiler_plate/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;