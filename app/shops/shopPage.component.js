"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';
var router_deprecated_1 = require('@angular/router-deprecated');
var shopPageService_component_1 = require('./shopPageService.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var ShopComponent = (function () {
    function ShopComponent(_router, _routerParams, _localService) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this.pageTitle = 'Shop Template';
        this.imageWidth = 800;
        this.imageHeight = 600;
        this.showImage = false;
        this.imageWidthCoupon = 80;
        this.imageMarginCoupon = 5;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._shopName = this._routerParams.get('shopname');
        this._localService.getShopByName(this._shopName).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
    };
    ShopComponent.prototype.EmailSubscriveTest = function () {
        try {
            console.log("email send");
        }
        catch (error) {
            console.log(error);
        }
    };
    ShopComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/shops/shopPage.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [shopPageService_component_1.GetShopServiceComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, shopPageService_component_1.GetShopServiceComponent])
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
//# sourceMappingURL=shopPage.component.js.map