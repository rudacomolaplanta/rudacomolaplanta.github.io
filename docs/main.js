(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\dev\Personal\rudacomolaplanta.github.io\project\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Pk0d":
/*!***********************************!*\
  !*** ./src/app/files/config.json ***!
  \***********************************/
/*! exports provided: titulo1, presentacion, p1, p1auth, lklink, InLink, ghlink, pais, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"titulo1\":\"Andrés Ruda\",\"presentacion\":\"Full stack dev\",\"p1\":\"Hay muy pocos seres humanos que reciben la verdad, completa y sorprendente, por la iluminación instantánea. La mayoría de ellos se adquieren fragmento a fragmento, a pequeña escala, por los acontecimientos sucesivos, celularmente, como un mosaico laborioso.\",\"p1auth\":\"Anaïs Nin\",\"lklink\":\"https://www.linkedin.com/in/carloarm/?locale=en_US\",\"InLink\":\"https://www.instagram.com/rudacomolaplanta/\",\"ghlink\":\"https://github.com/rudacomolaplanta/\",\"pais\":\"Chile\"}");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _files_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/config.json */ "Pk0d");
var _files_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./files/config.json */ "Pk0d", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'personal';
        this.data = _files_config_json__WEBPACK_IMPORTED_MODULE_0__; //Cargamos todos los atributos del json 
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 106, vars: 7, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Instagram", "target", "_blank", "rel", "noopener", "title", "Location", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "#333", 1, "lk-logo"], ["d", "M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"], ["role", "main", 1, "content", "typew"], [1, "vspace"], ["viewBox", "0 0 256 361", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "preserveAspectRatio", "xMidYMid", 1, "logo"], ["d", "M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z", "fill", "#E44D26"], ["d", "M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z", "fill", "#F16529"], ["d", "M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z", "fill", "#EBEBEB"], ["d", "M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z", "fill", "#EBEBEB"], ["d", "M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z", "fill", "#000000"], ["d", "M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z", "fill", "#000000"], ["d", "M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z", "fill", "#000000"], ["d", "M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z", "fill", "#000000"], ["d", "M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z", "fill", "#FFFFFF"], ["d", "M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z", "fill", "#FFFFFF"], ["d", "M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z", "fill", "#264DE4"], ["d", "M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z", "fill", "#2965F1"], ["d", "M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z", "fill", "#EBEBEB"], ["d", "M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z", "fill", "#EBEBEB"], ["d", "M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z", "fill", "#EBEBEB"], ["d", "M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z", "fill", "#000000"], ["d", "M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z", "fill", "#000000"], ["d", "M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z", "fill", "#000000"], ["d", "M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z", "fill", "#FFFFFF"], ["xmlns", "http://www.w3.org/2000/svg", "aria-label", "JavaScript", "role", "img", "viewBox", "0 0 512 512", 1, "logo"], ["width", "512", "height", "512", "rx", "15%", "fill", "#f7df1e"], ["d", "m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"], ["alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==", 1, "logo"], ["enable-background", "new 0 0 504 504", "id", "Layer_1", "version", "1.1", "viewBox", "0 0 504 504", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "logo"], ["d", "M458.5,258.3c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8  c-58.5-9.2-75.6-27.1-114.9-58.8c-33.3-31.7-88.9-77.3-85.8-141.9c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8  c58.5,9.2,75.6,27.1,114.9,58.8C406,148.1,461.6,193.7,458.5,258.3z", "fill", "#3765AF"], ["id", "Layer_2_1_"], ["d", "M179.3,235.2c7.9,0,12.8,1.3,15.4,4.3c2.6,2.6,2.9,7.9,1.6,14.4c-1.3,7.2-3.9,12.4-8.2,15.4     c-3.9,2.9-10.1,4.6-18.3,4.6h-12.4l7.5-39.3C164.9,235.2,179.3,235.2,179.3,235.2z M129.6,313.7h20.3l4.6-24.9h17.7     c7.9,0,13.7-0.7,19-2.3c4.9-1.6,9.5-4.3,13.4-8.2c3.3-2.9,6.2-6.9,8.5-10.5c2-3.6,3.6-8.2,4.3-12.4c2-11.1,0.7-19.6-4.6-25.8     c-5.2-6.2-13.7-9.2-25.5-9.2h-39.3L129.6,313.7z", "fill", "#FFFFFF"], ["d", "M237.9,195.6h20.3l-4.6,24.9h18c11.1,0,19.3,2,23.2,6.2c4.3,3.9,5.9,10.5,3.6,19.3l-8.5,43.5h-20.6     l8.2-41.2c1-4.6,0.7-7.9-1-9.5c-1.6-1.6-4.9-2.6-10.1-2.6h-16l-10.5,53.3h-20.3L237.9,195.6z", "fill", "#FFFFFF"], ["d", "M343.2,235.2c7.9,0,12.8,1.3,15.4,4.3c2.6,2.6,2.9,7.9,1.6,14.4c-1.3,7.2-3.9,12.4-8.2,15.4     c-3.9,2.9-10.1,4.6-18.3,4.6h-12.4l7.5-39.3C329.2,235.2,343.2,235.2,343.2,235.2z M293.8,313.7h20.3l4.6-24.9h17.7     c7.9,0,13.7-0.7,19-2.3c4.9-1.6,9.5-4.3,13.4-8.2c3.3-2.9,6.2-6.9,8.5-10.5c2-3.6,3.6-8.2,4.3-12.4c2-11.1,0.7-19.6-4.6-25.8     c-5.2-6.2-13.7-9.2-25.5-9.2h-39.3L293.8,313.7z", "fill", "#FFFFFF"], ["viewBox", "0 0 256 346", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "preserveAspectRatio", "xMidYMid", 1, "logo"], ["d", "M82.5539491,267.472524 C82.5539491,267.472524 69.35552,275.147869 91.9468218,277.745105 C119.315549,280.867375 133.303389,280.419607 163.463913,274.711273 C163.463913,274.711273 171.393396,279.683258 182.467491,283.989644 C114.855564,312.966982 29.4483782,282.311215 82.5539491,267.472524", "fill", "#5382A1"], ["d", "M74.2921309,229.658996 C74.2921309,229.658996 59.4888145,240.616727 82.0968727,242.955171 C111.333004,245.971316 134.421411,246.218007 174.373236,238.524975 C174.373236,238.524975 179.899113,244.127185 188.588218,247.190807 C106.841367,271.094691 15.79008,249.075898 74.2921309,229.658996", "fill", "#5382A1"], ["d", "M143.941818,165.514705 C160.601367,184.695156 139.564684,201.955142 139.564684,201.955142 C139.564684,201.955142 181.866124,180.117876 162.438982,152.772422 C144.294633,127.271098 130.380335,114.600495 205.706705,70.9138618 C205.706705,70.9138618 87.4691491,100.44416 143.941818,165.514705", "fill", "#E76F00"], ["d", "M233.364015,295.441687 C233.364015,295.441687 243.131113,303.489396 222.60736,309.715316 C183.580858,321.537862 60.1748945,325.107898 25.8932364,310.186356 C13.5698618,304.825251 36.67968,297.385425 43.9491491,295.824291 C51.5304727,294.180305 55.8629236,294.486575 55.8629236,294.486575 C42.15808,284.832116 -32.7195927,313.443607 17.8287709,321.637469 C155.681513,343.993251 269.121164,311.570618 233.364015,295.441687", "fill", "#5382A1"], ["d", "M88.9008873,190.479825 C88.9008873,190.479825 26.1287564,205.389265 66.6717091,210.803433 C83.7901964,213.095331 117.915462,212.576815 149.702284,209.913484 C175.680233,207.722124 201.765236,203.062924 201.765236,203.062924 C201.765236,203.062924 192.605091,206.985775 185.977949,211.510924 C122.233949,228.275665 -0.907636364,220.476509 34.5432436,203.328233 C64.5241018,188.83584 88.9008873,190.479825 88.9008873,190.479825", "fill", "#5382A1"], ["d", "M201.506444,253.422313 C266.305164,219.7504 236.344785,187.392 215.432844,191.751447 C210.307258,192.818269 208.021876,193.742662 208.021876,193.742662 C208.021876,193.742662 209.924655,190.761891 213.558924,189.471651 C254.929455,174.927127 286.746065,232.368873 200.204102,255.11936 C200.204102,255.120291 201.206691,254.223825 201.506444,253.422313", "fill", "#5382A1"], ["d", "M162.438982,0.371432727 C162.438982,0.371432727 198.325527,36.27008 128.402153,91.4720582 C72.3307055,135.753542 115.616116,161.001658 128.37888,189.848669 C95.6490473,160.318371 71.6297309,134.322735 87.7437673,110.128407 C111.395375,74.6132945 176.918342,57.3942691 162.438982,0.371432727", "fill", "#E76F00"], ["d", "M95.2683055,344.665367 C157.466996,348.646865 252.980131,342.45632 255.24224,313.025629 C255.24224,313.025629 250.893964,324.182575 203.838371,333.042967 C150.750487,343.033484 85.2740655,341.867055 46.4393309,335.464262 C46.4402618,335.463331 54.3892945,342.043927 95.2683055,344.665367", "fill", "#5382A1"], ["viewBox", "0 0 256 255", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "preserveAspectRatio", "xMidYMid", 1, "logo"], ["x1", "12.9593594%", "y1", "12.0393928%", "x2", "79.6388325%", "y2", "78.2008538%", "id", "linearGradient-1"], ["stop-color", "#387EB8", "offset", "0%"], ["stop-color", "#366994", "offset", "100%"], ["x1", "19.127525%", "y1", "20.5791813%", "x2", "90.7415328%", "y2", "88.4290372%", "id", "linearGradient-2"], ["stop-color", "#FFE052", "offset", "0%"], ["stop-color", "#FFC331", "offset", "100%"], ["d", "M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z", "fill", "url(#linearGradient-1)"], ["d", "M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z", "fill", "url(#linearGradient-2)"], ["d", "M452.2,251.6c-9.2,58.5-27.1,75.6-58.8,114.9c-31.7,33.3-77.3,88.9-141.9,85.8  c-58.5-9.2-75.6-27.1-114.9-58.8c-33.3-31.7-88.9-77.3-85.8-141.9c9.2-58.5,27.1-75.6,58.8-114.9c31.7-33.3,77.3-88.9,141.9-85.8  c58.5,9.2,75.6,27.1,114.9,58.8C399.7,141.4,455.3,187,452.2,251.6z", "fill", "#3765AF"], ["d", "M104.1,302.9h9.8v-38.8l15.4,33.8c1.7,4.1,4.2,5.6,9.1,5.6s7.1-1.5,9-5.6l15.2-33.8v38.8h9.8v-38.8  c0-3.7-1.5-5.6-4.7-6.6c-7.4-2.2-12.5-0.3-14.7,4.7l-15,33.4l-14.5-33.4c-2.2-5.1-7.3-6.9-14.7-4.7c-3,1-4.6,2.9-4.6,6.6  L104.1,302.9L104.1,302.9z", "fill", "#FFFFFF"], ["d", "M180.4,271.3h9.8v21.3c0,1.2,0.3,3.9,5.7,4.1c2.9,0,21.3,0,21.4,0v-25.5h9.8c0,0,0,34.8,0,35  c0,8.6-10.6,10.5-15.5,10.5h-31.1V310h31.1c6.2-0.7,5.6-3.9,5.6-4.9v-2.5h-20.9c-9.8,0-16-4.4-16-9.3  C180.4,292.9,180.6,271.5,180.4,271.3L180.4,271.3z", "fill", "#FFFFFF"], ["d", "M392.2,246.7c-6.1-0.2-10.6,0.5-14.7,2c-1.2,0.5-2.9,0.5-3,1.9c0.7,0.7,0.7,1.5,1.2,2.4  c0.8,1.5,2.5,3.5,3.9,4.6c1.5,1.2,3.2,2.4,4.9,3.5c2.9,1.9,6.2,2.9,9.1,4.7c1.7,1,3.4,2.4,4.9,3.5c0.8,0.7,1.4,1.5,2.4,2v-0.2  c-0.5-0.7-0.7-1.7-1.2-2.4c-0.7-0.7-1.5-1.4-2.2-2.2c-2.2-2.9-4.9-5.6-7.8-7.6c-2.4-1.7-7.8-3.9-8.6-6.8c0,0,0,0-0.2-0.2  c1.7-0.2,3.5-0.7,5.2-1.2c2.5-0.7,4.9-0.5,7.6-1.2c1.2-0.3,2.4-0.7,3.5-1c0-0.2,0-0.5,0-0.7c-1.4-1.4-2.4-3.2-3.7-4.4  c-3.9-3.4-8.1-6.6-12.5-9.3c-2.4-1.5-5.4-2.5-7.8-3.7c-0.8-0.5-2.4-0.7-2.9-1.4c-1.4-1.7-2-3.9-3-5.7c-2.2-4.2-4.2-8.8-6.2-13.2  c-1.4-2.9-2.2-5.9-3.9-8.6c-7.8-12.8-16.2-20.6-29.2-28.2c-2.9-1.5-6.1-2.2-9.6-3c-1.9,0-3.7-0.2-5.6-0.3c-1.2-0.5-2.4-2-3.5-2.7  c-4.2-2.7-15.4-8.6-18.6-0.8c-2,4.9,3,9.8,4.7,12.2c1.4,1.7,2.9,3.7,3.9,5.6c0.5,1.4,0.7,2.7,1.2,4.1c1.2,3.4,2.4,6.9,3.9,10.1  c0.8,1.5,1.7,3.2,2.9,4.7c0.7,0.8,1.7,1.2,1.9,2.5c-1,1.5-1.2,3.7-1.7,5.6c-2.7,8.4-1.7,19.1,2.2,25.3c1.2,1.9,4.1,6.1,7.9,4.4  c3.4-1.4,2.7-5.6,3.5-9.5c0.2-0.8,0-1.5,0.5-2v0.2c1,2,2,4.2,3,6.2c2.4,3.7,6.4,7.6,9.8,10.1c1.9,1.4,3.2,3.7,5.6,4.6v-0.2  c0,0,0,0-0.2,0c-0.5-0.7-1.2-1-1.7-1.5c-1.4-1.4-2.9-3-3.9-4.6c-3.2-4.2-5.9-9-8.4-13.7c-1.2-2.4-2.2-4.9-3.2-7.3  c-0.5-0.8-0.5-2.2-1.2-2.7c-1.2,1.7-2.9,3-3.5,5.1c-1.4,3.2-1.5,7.3-2,11.3c-0.3,0-0.2,0-0.3,0.2c-2.4-0.7-3.2-3-4.2-5.2  c-2.2-5.4-2.7-14-0.7-20.1c0.5-1.5,2.9-6.6,1.9-8.1c-0.5-1.4-2-2.2-2.9-3.4c-1-1.4-2-3.2-2.7-4.9c-1.9-4.2-2.7-9-4.7-13.2  c-0.8-2-2.5-4.1-3.7-5.7c-1.4-2-3-3.5-4.2-5.9c-0.3-0.8-0.8-2.2-0.3-3c0.2-0.7,0.5-0.8,1-1c1-0.8,3.7,0.2,4.7,0.7  c2.9,1.2,5.1,2.2,7.4,3.7c1,0.7,2.2,2.2,3.5,2.5c0.5,0,1,0,1.5,0c2.4,0.5,5.1,0.2,7.4,0.8c4.1,1.4,7.6,3.2,10.8,5.2  c9.8,6.2,18.1,15.2,23.5,25.8c0.8,1.7,1.4,3.4,2,5.1c1.5,3.7,3.5,7.4,5.1,11.1c1.5,3.5,3,7.1,5.4,10.1c1.2,1.5,5.6,2.4,7.8,3.2  c1.5,0.7,3.9,1.4,5.2,2c2.5,1.5,5.1,3.4,7.6,5.1C388.1,243.3,391.9,245.2,392.2,246.7L392.2,246.7z", "fill", "#FFFFFF"], ["d", "M315.3,181.1c-1.4,0-2.2,0.2-3,0.3c0,0,0,0,0,0.2c0,0,0,0,0.2,0c0.7,1.2,1.7,2,2.4,3  c0.7,1.2,1.2,2.4,1.7,3.5l0.2-0.2c1-0.7,1.5-2,1.5-3.7c-0.5-0.5-0.5-1-0.8-1.5C316.9,182.2,315.9,181.8,315.3,181.1L315.3,181.1z", "fill", "#FFFFFF"], ["d", "M234.8,302.9h28.4c3.4,0,6.4-0.7,9.1-1.9c4.2-2,6.2-4.6,6.2-8.1v-7.3c0-2.9-2.4-5.4-6.9-7.3  c-2.4-0.8-5.4-1.4-8.4-1.4h-11.8c-4.1,0-5.9-1.2-6.4-3.9c0-0.3,0-0.7,0-0.8V268c0-0.2,0-0.5,0-0.8c0.5-2,1.5-2.5,5.1-2.9  c0.3,0,0.7,0,0.8,0h28v-6.6h-27.5c-4.1,0-6.1,0.2-7.9,0.8c-5.7,1.9-8.4,4.7-8.4,9.8v5.7c0,4.4,4.9,8.3,13.3,9.1c0.8,0,1.9,0,2.9,0  h10.1c0.3,0,0.7,0,1,0c3,0.3,4.4,0.8,5.4,2c0.7,0.7,0.7,1.2,0.7,1.9v5.7c0,0.7-0.5,1.5-1.4,2.4c-0.8,0.8-2.4,1.4-4.2,1.4  c-0.3,0-0.7,0-1,0h-27.2v6.4H234.8z", "fill", "#FFFFFF"], ["d", "M339.8,291.6c0,6.8,5.1,10.5,15.2,11.1c1,0,1.9,0.2,2.9,0.2h25.7v-6.6h-25.8c-5.7,0-7.9-1.4-7.9-4.9v-33.9  h-10V291.6L339.8,291.6z", "fill", "#FFFFFF"], ["d", "M284.8,291.9v-23.3c0-5.9,4.2-9.6,12.5-10.6c0.8,0,1.9-0.2,2.7-0.2h18.7c1,0,1.9,0,2.9,0.2  c8.3,1.2,12.3,4.7,12.3,10.6v23.3c0,4.9-1.7,7.4-5.7,9.1l9.6,8.8h-11.3l-7.8-7.1l-7.9,0.5h-10.5c-1.7,0-3.7-0.2-5.7-0.7  C287.8,300.5,284.8,297.3,284.8,291.9L284.8,291.9z M295.4,291.3c0,0.3,0.2,0.7,0.2,1c0.5,2.7,3,4.2,6.9,4.2h9l-8.1-7.4h11.3  l7.1,6.4c1.4-0.7,2.2-1.9,2.5-3.2c0-0.3,0-0.7,0-1v-22.5c0-0.3,0-0.7,0-0.8c-0.5-2.5-3-4.1-6.9-4.1h-14.7c-4.4,0-7.3,1.9-7.3,4.9  V291.3L295.4,291.3z", "fill", "#FFFFFF"], ["aria-label", "Instagram", "target", "_blank", "rel", "noopener", "title", "Instagram", 3, "href"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["aria-label", "Linkedin", "target", "_blank", "rel", "noopener", "title", "Linkedin", 3, "href"], ["height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#333", 1, "lk-logo"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["aria-label", "Github", "target", "_blank", "rel", "noopener", "title", "Github", 3, "href"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "linearGradient", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "stop", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "stop", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "linearGradient", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "stop", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "stop", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "svg", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.InLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.titulo1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.presentacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.InLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.lklink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.ghlink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n\r\n  *[_ngcontent-%COMP%]{\r\n    font-family: 'Courier Prime', monospace;\r\n  }\r\n\r\n  body[_ngcontent-%COMP%]{\r\n      height: 100%;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 8px 0;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  section[_ngcontent-%COMP%]{\r\n      margin: 15px 0 15px 0;\r\n  }\r\n\r\n  .quote[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n      margin: 20px 0 10px;\r\n  }\r\n\r\n  .auth[_ngcontent-%COMP%]{\r\n      font-weight: 600;\r\n  }\r\n\r\n  .spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: transparent;\r\n    font-weight: 600;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .vspace[_ngcontent-%COMP%]{\r\n    height: 5vh;\r\n  }\r\n\r\n  .typew[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    overflow: hidden; \r\n    border-right: .15em solid orange; \r\n    white-space: nowrap; \r\n    margin: 0 auto; \r\n    letter-spacing: .15em; \r\n    animation: blink-caret .75s step-end infinite;\r\n  }\r\n\r\n  \r\n\r\n  @keyframes blink-caret {\r\n    from { border-color: transparent }\r\n    50% { border-color: orange; }\r\n  }\r\n\r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]{\r\n    margin: 0 16px;\r\n    height: 50px;\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .lk-logo[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  .lk-logo[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n  .content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 82px auto 32px;\r\n    padding: 0 16px;\r\n    max-width: 960px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    width: auto;\r\n  }\r\n\r\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 8px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: #888;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    margin-top: 16px;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    background-color: #fafafa;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .card.card-small[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 168px;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n  }\r\n\r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n    fill: rgb(105, 103, 103);\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%] {\r\n    background-color: #1976d2;\r\n    color: white;\r\n    font-weight: 600;\r\n    border: none;\r\n    width: auto;\r\n    min-width: 30%;\r\n    position: relative;\r\n  }\r\n\r\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 60px;\r\n  }\r\n\r\n  svg#rocket[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    position: absolute;\r\n    left: -10px;\r\n    top: -24px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 95px);\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 180px;\r\n    z-index: -10;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n    color: #1976d2;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover {\r\n    color: #125699;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]::before {\r\n    content: \"\\2022 \\2022 \\2022\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 2rem;\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 40px;\r\n    border-radius: 40px;\r\n    margin: 8px;\r\n    background-color: white;\r\n    border: 1px solid #eeeeee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 1s ease-out;\r\n  }\r\n\r\n  .circle-link[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-0.25rem);\r\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    line-height: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%] {\r\n    color: #24292e;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 3px 10px;\r\n    border: 1px solid rgba(27,31,35,.2);\r\n    border-radius: 3px;\r\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n    margin-left: 4px;\r\n    font-weight: 600;\r\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n    border-color: rgba(27,31,35,.35);\r\n    background-position: -.5em;\r\n  }\r\n\r\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    height: 16px;\r\n    width: 16px;\r\n    margin-right: 4px;\r\n  }\r\n\r\n  svg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: -160px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: 1920px;\r\n  }\r\n\r\n  \r\n\r\n  @media screen and (max-width: 767px) {\r\n\r\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n      height: 16px;\r\n      margin: 8px 0;\r\n    }\r\n\r\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      margin-left: 72px;\r\n    }\r\n\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      right: 120px;\r\n      transform: rotate(-5deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 575px) {\r\n    svg#rocket-smoke[_ngcontent-%COMP%] {\r\n      display: none;\r\n      visibility: hidden;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,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Q0UsYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgKntcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBQcmltZScsIG1vbm9zcGFjZTtcclxuICB9XHJcblxyXG4gIGJvZHl7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb257XHJcbiAgICAgIG1hcmdpbjogMTVweCAwIDE1cHggMDtcclxuICB9XHJcblxyXG4gIC5xdW90ZXtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDIwcHggMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmF1dGh7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICAudnNwYWNle1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgfVxyXG5cclxuICAudHlwZXcgaDJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXHJcbiAgICBib3JkZXItcmlnaHQ6IC4xNWVtIHNvbGlkIG9yYW5nZTsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIEtlZXBzIHRoZSBjb250ZW50IG9uIGEgc2luZ2xlIGxpbmUgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBHaXZlcyB0aGF0IHNjcm9sbGluZyBlZmZlY3QgYXMgdGhlIHR5cGluZyBoYXBwZW5zICovXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjE1ZW07IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cclxuICAgIGFuaW1hdGlvbjogYmxpbmstY2FyZXQgLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xyXG4gIEBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xyXG4gICAgZnJvbSB7IGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgfVxyXG4gICAgNTAlIHsgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cclxuICB9XHJcblxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAubG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAubGstbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC5say1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgICAudGVybWluYWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map