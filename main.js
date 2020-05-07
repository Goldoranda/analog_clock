(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analogclock/analogclock.component.html":
/*!********************************************************!*\
  !*** ./src/app/analogclock/analogclock.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wall\">\n  <div class=\"clock\">\n    <div class=\"num num1\"><div>1</div></div>\n    <div class=\"num num2\"><div>2</div></div>\n    <div class=\"num num3\"><div>3</div></div>\n    <div class=\"num num4\"><div>4</div></div>\n    <div class=\"num num5\"><div>5</div></div>\n    <div class=\"num num6\"><div>6</div></div>\n    <div class=\"num num7\"><div>7</div></div>\n    <div class=\"num num8\"><div>8</div></div>\n    <div class=\"num num9\"><div>9</div></div>\n    <div class=\"num num10\"><div>10</div></div>\n    <div class=\"num num11\"><div>11</div></div>\n    <div class=\"num num12\"><div>12</div></div>\n    <div class=\"hr-hand\" #hrHand></div>\n    <div class=\"min-hand\" #minHand></div>\n    <div class=\"sec-hand\" #secHand></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/analogclock/analogclock.component.scss":
/*!********************************************************!*\
  !*** ./src/app/analogclock/analogclock.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0; }\n\n.wall {\n  background-color: #cc4a4a;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background: url(\"/analog_clock/assets/images/cute_lion.png\") no-repeat center 224px, #cc4a4a;\n  background-size: 427px; }\n\n.clock {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin-top: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 50%;\n  border: 16px solid #fff;\n  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px white; }\n\n.clock::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #848484;\n  border: 2px solid #fff;\n  z-index: 100000;\n  border-radius: 50%; }\n\n.sec-hand {\n  width: 2px;\n  height: 50%;\n  background: #ff6767;\n  transform-origin: 50% 80%;\n  position: absolute;\n  top: 10%;\n  left: calc(50% - 1px);\n  border-radius: 100% 100% 0 0; }\n\n.min-hand {\n  width: 3px;\n  height: 40%;\n  background: #d6d6d6;\n  transform-origin: 50% 80%;\n  position: absolute;\n  top: 18%;\n  left: 50%;\n  border-radius: 100% 100% 0 0; }\n\n.hr-hand {\n  width: 3px;\n  height: 40%;\n  background: #848484;\n  transform-origin: 50% 80%;\n  position: absolute;\n  top: 18%;\n  left: 50%;\n  border-radius: 100% 100% 0 0; }\n\n.num {\n  height: 100%;\n  position: absolute;\n  left: calc(50% - 0.5em); }\n\n.num div {\n  width: 1em;\n  line-height: 2em;\n  color: #858383;\n  text-align: center;\n  vertical-align: middle; }\n\n.num1 {\n  transform: rotate(30deg); }\n\n.num1 div {\n  transform: rotate(-30deg); }\n\n.num2 {\n  transform: rotate(60deg); }\n\n.num2 div {\n  transform: rotate(-60deg); }\n\n.num3 {\n  transform: rotate(90deg); }\n\n.num3 div {\n  transform: rotate(-90deg); }\n\n.num4 {\n  transform: rotate(120deg); }\n\n.num4 div {\n  transform: rotate(-120deg); }\n\n.num5 {\n  transform: rotate(150deg); }\n\n.num5 div {\n  transform: rotate(-150deg); }\n\n.num6 {\n  transform: rotate(180deg); }\n\n.num6 div {\n  transform: rotate(-180deg); }\n\n.num7 {\n  transform: rotate(210deg); }\n\n.num7 div {\n  transform: rotate(-210deg); }\n\n.num8 {\n  transform: rotate(240deg); }\n\n.num8 div {\n  transform: rotate(-240deg); }\n\n.num9 {\n  transform: rotate(270deg); }\n\n.num9 div {\n  transform: rotate(-270deg); }\n\n.num10 {\n  transform: rotate(300deg); }\n\n.num10 div {\n  transform: rotate(-300deg); }\n\n.num11 {\n  transform: rotate(330deg); }\n\n.num11 div {\n  transform: rotate(-330deg); }\n\n.num12 {\n  transform: rotate(0deg); }\n\n.num12 div {\n  transform: rotate(0deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbG9nY2xvY2svRzpcXGNsb2NrL3NyY1xcYXBwXFxhbmFsb2djbG9ja1xcYW5hbG9nY2xvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBSyxTQUFRO0VBQUUsVUFBUyxFQUFBOztBQUN4QjtFQUNBLHlCQUF3QjtFQUN4QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsdUJBQXNCO0VBQ3RCLHNHQUFxRztFQUNyRyxzQkFBcUIsRUFBQTs7QUFFckI7RUFDQSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLHVCQUFzQjtFQUN0Qiw4RkFFOEMsRUFBQTs7QUFFOUM7RUFDQSxXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixlQUFjO0VBQ2Qsa0JBQWlCLEVBQUE7O0FBR2pCO0VBQ0EsVUFBUztFQUNULFdBQVU7RUFDVixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1AscUJBQW9CO0VBQ3BCLDRCQUEyQixFQUFBOztBQUczQjtFQUNBLFVBQVM7RUFDVCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFNBQVE7RUFDUiw0QkFBMkIsRUFBQTs7QUFFM0I7RUFDQSxVQUFTO0VBQ1QsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxTQUFRO0VBQ1IsNEJBQTJCLEVBQUE7O0FBRzNCO0VBQ0EsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFBQTs7QUFHdEI7RUFDQSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixjQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsc0JBQXFCLEVBQUE7O0FBR3JCO0VBQ0ksd0JBQXVCLEVBQUE7O0FBRXZCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0Esd0JBQXVCLEVBQUE7O0FBRXZCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0Esd0JBQXVCLEVBQUE7O0FBRXZCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EseUJBQXdCLEVBQUE7O0FBRXhCO0VBQ0EsMEJBQXlCLEVBQUE7O0FBRXpCO0VBQ0EsdUJBQXNCLEVBQUE7O0FBRXRCO0VBQ0EsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbmFsb2djbG9jay9hbmFsb2djbG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7bWFyZ2luOjA7IHBhZGRpbmc6MDt9XHJcbi53YWxse1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNjYzRhNGE7XHJcbndpZHRoOjEwMHZ3O1xyXG5oZWlnaHQ6MTAwdmg7XHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuYmFja2dyb3VuZDp1cmwoXCIvYW5hbG9nX2Nsb2NrLmdpdGh1Yi5pby9hc3NldHMvaW1hZ2VzL2N1dGVfbGlvbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAyMjRweCwgI2NjNGE0YTtcclxuYmFja2dyb3VuZC1zaXplOjQyN3B4O1xyXG59XHJcbi5jbG9ja3tcclxucG9zaXRpb246cmVsYXRpdmU7IFxyXG53aWR0aDoyMDBweDtcclxuaGVpZ2h0OjIwMHB4O1xyXG5tYXJnaW4tdG9wOjI1cHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuYWxpZ24taXRlbXM6Y2VudGVyO1xyXG5iYWNrZ3JvdW5kOiNmZmY7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG5ib3JkZXI6MTZweCBzb2xpZCAjZmZmO1xyXG5ib3gtc2hhZG93Omluc2V0IDAgMCAzMHB4IHJnYmEoMCwwLDAsMC4xKSxcclxuICAgICAgICAgICAgICAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDAgNHB4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbn1cclxuLmNsb2NrOjpiZWZvcmV7XHJcbmNvbnRlbnQ6XCJcIjtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbndpZHRoOjEwcHg7XHJcbmhlaWdodDoxMHB4O1xyXG5iYWNrZ3JvdW5kOiM4NDg0ODQ7XHJcbmJvcmRlcjoycHggc29saWQgI2ZmZjtcclxuei1pbmRleDoxMDAwMDA7XHJcbmJvcmRlci1yYWRpdXM6NTAlO1xyXG59XHJcblxyXG4uc2VjLWhhbmR7XHJcbndpZHRoOjJweDtcclxuaGVpZ2h0OjUwJTtcclxuYmFja2dyb3VuZDojZmY2NzY3O1xyXG50cmFuc2Zvcm0tb3JpZ2luOjUwJSA4MCU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTAlO1xyXG5sZWZ0OmNhbGMoNTAlIC0gMXB4KTtcclxuYm9yZGVyLXJhZGl1czoxMDAlIDEwMCUgMCAwO1xyXG59XHJcblxyXG4ubWluLWhhbmR7XHJcbndpZHRoOjNweDtcclxuaGVpZ2h0OjQwJTtcclxuYmFja2dyb3VuZDojZDZkNmQ2O1xyXG50cmFuc2Zvcm0tb3JpZ2luOjUwJSA4MCU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6MTglO1xyXG5sZWZ0OjUwJTtcclxuYm9yZGVyLXJhZGl1czoxMDAlIDEwMCUgMCAwO1xyXG59XHJcbi5oci1oYW5ke1xyXG53aWR0aDozcHg7XHJcbmhlaWdodDo0MCU7XHJcbmJhY2tncm91bmQ6Izg0ODQ4NDtcclxudHJhbnNmb3JtLW9yaWdpbjo1MCUgODAlO1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxudG9wOjE4JTtcclxubGVmdDo1MCU7XHJcbmJvcmRlci1yYWRpdXM6MTAwJSAxMDAlIDAgMDtcclxufVxyXG5cclxuLm51bXtcclxuaGVpZ2h0OjEwMCU7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG5sZWZ0OmNhbGMoNTAlIC0gMC41ZW0pO1xyXG59XHJcblxyXG4ubnVtIGRpdntcclxud2lkdGg6MWVtO1xyXG5saW5lLWhlaWdodDoyZW07XHJcbmNvbG9yOnJnYigxMzMsMTMxLDEzMSk7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuXHJcbi5udW0xe1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgzMGRlZyk7XHJcbiAgICB9XHJcbiAgICAubnVtMSBkaXZ7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKC0zMGRlZyk7XHJcbiAgICB9XHJcbiAgICAubnVtMntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTIgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTN7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW0zIGRpdntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW00e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTQgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMTIwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW01e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTUgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMTUwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW02e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTYgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW03e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgyMTBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTcgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMjEwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW04e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTggZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMjQwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW05e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTkgZGl2e1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMjcwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW0xMHtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMzAwZGVnKTtcclxuICAgIH1cclxuICAgIC5udW0xMCBkaXZ7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKC0zMDBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTExe1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTExIGRpdntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoLTMzMGRlZyk7XHJcbiAgICB9XHJcbiAgICAubnVtMTJ7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgLm51bTEyIGRpdntcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoLTBkZWcpO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/analogclock/analogclock.component.ts":
/*!******************************************************!*\
  !*** ./src/app/analogclock/analogclock.component.ts ***!
  \******************************************************/
/*! exports provided: AnalogclockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogclockComponent", function() { return AnalogclockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnalogclockComponent = /** @class */ (function () {
    function AnalogclockComponent() {
    }
    AnalogclockComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            var date = new Date();
            _this.updateClock(date);
        }, 1000);
    };
    AnalogclockComponent.prototype.updateClock = function (date) {
        this.secHand.nativeElement.style.transform = 'rotate(' +
            date.getSeconds() * 6 + 'deg)';
        this.minHand.nativeElement.style.transform = 'rotate(' +
            date.getMinutes() * 6 + 'deg)';
        this.hrHand.nativeElement.style.transform = 'rotate(' +
            (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hrHand'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnalogclockComponent.prototype, "hrHand", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('minHand'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnalogclockComponent.prototype, "minHand", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secHand'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AnalogclockComponent.prototype, "secHand", void 0);
    AnalogclockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analogclock',
            template: __webpack_require__(/*! ./analogclock.component.html */ "./src/app/analogclock/analogclock.component.html"),
            styles: [__webpack_require__(/*! ./analogclock.component.scss */ "./src/app/analogclock/analogclock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnalogclockComponent);
    return AnalogclockComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-analogclock></app-analogclock>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'clock';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _analogclock_analogclock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analogclock/analogclock.component */ "./src/app/analogclock/analogclock.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _analogclock_analogclock_component__WEBPACK_IMPORTED_MODULE_4__["AnalogclockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\clock\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
