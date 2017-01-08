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
var updateCouponService_component_1 = require('./updateCouponService.component');
require('rxjs/Rx');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var common_1 = require('@angular/common');
var tiny_editor_1 = require('../../app/sharedComponents/tinymce/tiny-editor');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
//import {authenticationServiceComponent} from '../../app/authentication/authenticationService.component'
var UpdateCouponComponent = (function () {
    function UpdateCouponComponent(_router, _routerParams, _localService, _location, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this._location = _location;
        this.toastr = toastr;
        this.pageTitle = 'Edit Coupon';
        this.filesToUpload = [];
    }
    UpdateCouponComponent.prototype.OnCancel = function () {
        this._location.back();
    };
    UpdateCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        else {
            var couponId = this._routerParams.get('cId');
            var shopId = this._routerParams.get('sId');
            console.log("CId:" + this._routerParams.get('cId'));
            console.log("SId:" + this._routerParams.get('sId'));
            this._localService.getCouponByShopIdCouponId(shopId, couponId).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
        }
        this.UpdateCoupon = {
            title: this._routerParams.get('title'),
            description: this._routerParams.get('description'),
            expiredDate: this._routerParams.get('expireddate'),
            image: this._routerParams.get('image'),
            id: this._routerParams.get('id')
        };
    };
    UpdateCouponComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    // This is for picture upload function
    UpdateCouponComponent.prototype.OnXhrUpdateCouponSubmit = function (e, f) {
        var _this = this;
        this._localService.UpdateCouponXhrPost([], this.filesToUpload, this.Shop, f.form.find('description').value).then(function (result) {
            console.log(result);
            _this._router.navigate(['/CouponList']);
        }, function (error) {
            _this.errorMessage = error;
            console.error(error);
        });
        if (this.errorMessage == undefined) {
            this.toastr.success("Coupon updated successfully.", "Coupon");
        }
        else {
            this.toastr.error("Coupon failed!! with this error:" + this.errorMessage, "Coupon");
        }
    };
    UpdateCouponComponent.prototype.RemoveCouponSubmit = function () {
        var _this = this;
        this._localService.removeCouponByShopIdCouponId(this.Shop).subscribe(function (shop) { return _this.message = shop; }, function (error) { return _this.errorMessage = error; });
        if (this.errorMessage == undefined) {
            this.toastr.success("Coupon deleted successfully.", "Coupon");
        }
        else {
            this.toastr.error("Coupon failed!! with this error:" + this.errorMessage, "Coupon");
        }
        this._router.navigate(['/CouponList']);
    };
    UpdateCouponComponent.prototype.ModelTest = function () {
        try {
            this.RemoveCouponSubmit();
        }
        catch (error) {
            console.log(error);
        }
    };
    UpdateCouponComponent = __decorate([
        core_1.Component({
            selector: 'update-Couponform',
            templateUrl: 'app/coupon/updateCoupon.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES, tiny_editor_1.TinyEditor],
            styleUrls: ['app/coupon/createCoupon.css'],
            providers: [updateCouponService_component_1.UpdateCouponServiceComponent, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, updateCouponService_component_1.UpdateCouponServiceComponent, common_1.Location, ng2_toastr_1.ToastsManager])
    ], UpdateCouponComponent);
    return UpdateCouponComponent;
}());
exports.UpdateCouponComponent = UpdateCouponComponent;
//# sourceMappingURL=updateCoupon.component.js.map