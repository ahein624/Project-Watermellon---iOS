webpackJsonp([16],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageModule", function() { return VendorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendors__ = __webpack_require__(859);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VendorsPageModule = (function () {
    function VendorsPageModule() {
    }
    VendorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendors__["a" /* VendorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vendors__["a" /* VendorsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], VendorsPageModule);
    return VendorsPageModule;
}());

//# sourceMappingURL=vendors.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VendorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// Leaving this existing code incase we need to come back and reference it.
var VendorsPage = (function () {
    function VendorsPage(navCtrl, navParams, sanitize) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitize = sanitize;
        this.params = {};
        this.url = sanitize.bypassSecurityTrustResourceUrl("https://westmorelandfair.com/_app/vendors/");
    }
    VendorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VendorsPage');
    };
    VendorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendors',template:/*ion-inline-start:"/Users/andrewhein/Documents/dev/Project-Watermellon/src/pages/vendors/vendors.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="skin skin-wcf skin-brown">\n  <ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>Vendors</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="no-scroll">\n    <iframe height="100%" width="100%" [src]="url" frameborder="0"></iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/andrewhein/Documents/dev/Project-Watermellon/src/pages/vendors/vendors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], VendorsPage);
    return VendorsPage;
}());

//# sourceMappingURL=vendors.js.map

/***/ })

});
//# sourceMappingURL=16.js.map