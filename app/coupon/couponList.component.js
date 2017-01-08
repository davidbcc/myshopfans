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
var router_deprecated_1 = require('@angular/router-deprecated');
var couponListService_component_1 = require('./couponListService.component');
var authenticationService_component_1 = require('../../app/authentication/authenticationService.component');
var couponListComponent = (function () {
    function couponListComponent(_router, _routerParams, _localService, _localAuthService) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this._localAuthService = _localAuthService;
        this.imageWidth = 50;
        this.imageMargin = 3;
        this.pageTitle = 'Coupons';
    }
    couponListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        else {
            this._localService.getShopByUserId(this.userId).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
        }
    };
    couponListComponent = __decorate([
        core_1.Component({
            selector: 'create-Couponform',
            templateUrl: 'app/coupon/couponList.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/coupon/createCoupon.css'],
            providers: [couponListService_component_1.CouponListServiceComponent, authenticationService_component_1.authenticationServiceComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, couponListService_component_1.CouponListServiceComponent, authenticationService_component_1.authenticationServiceComponent])
    ], couponListComponent);
    return couponListComponent;
}());
exports.couponListComponent = couponListComponent;
//# sourceMappingURL=couponList.component.js.map