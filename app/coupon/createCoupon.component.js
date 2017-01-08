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
var createCouponService_component_1 = require('./createCouponService.component');
var common_1 = require('@angular/common');
var shopPageService_component_1 = require('../../app/shops/shopPageService.component');
var tiny_editor_1 = require('../../app/sharedComponents/tinymce/tiny-editor');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
//import {authenticationServiceComponent} from '../../app/authentication/authenticationService.component'
var CreateCouponComponent = (function () {
    function CreateCouponComponent(_router, _routerParams, _localService, _location, _localShopService, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this._location = _location;
        this._localShopService = _localShopService;
        this.toastr = toastr;
        this.pageTitle = 'Create Coupon';
        this.filesToUpload = [];
    }
    CreateCouponComponent.prototype.onSubmit = function (e, f) {
        var _this = this;
        this._localService.FormDataCreateCouponXhrPost([], this.filesToUpload, this.NewCoupon, this.Shop._id, f.form.find('description').value).then(function (result) {
            console.log(result);
            _this._router.navigate(['/CouponList']);
        }, function (error) {
            _this.errorMessage = error;
            console.error(error);
        });
        if (this.errorMessage == undefined) {
            this.toastr.success("Coupon created successfully.", "Coupon");
        }
        else {
            this.toastr.error("Coupon failed!! with this error:" + this.errorMessage, "Coupon");
        }
    };
    CreateCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        this.NewCoupon = {
            title: this._routerParams.get('title'),
            description: this._routerParams.get('description'),
            expiredDate: this._routerParams.get('expireddate'),
            image: this._routerParams.get('image')
        };
        this._localShopService.getShopByUserId(this.userId).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
    };
    //TODO: Hard coded need to be removed.
    // // This is for picture upload function
    // OnXhrNewCouponSubmit() {
    //   // This to call the normal data posting with image files posting.
    //   this._localService.FormDataCreateCouponXhrPost([], this.filesToUpload, this.NewCoupon, '579e10f327939f1c0047e90e').then((result) => {
    //     console.log(result);
    //     this._router.navigate(['/CouponList']);
    //   }, (error) => {
    //     console.error(error);
    //   });
    // }
    CreateCouponComponent.prototype.OnCancel = function () {
        this._location.back();
    };
    CreateCouponComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateCouponComponent = __decorate([
        core_1.Component({
            selector: 'create-Couponform',
            templateUrl: 'app/coupon/createCoupon.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, tiny_editor_1.TinyEditor],
            styleUrls: ['app/coupon/createCoupon.css'],
            providers: [createCouponService_component_1.CreateCouponServiceComponent, shopPageService_component_1.GetShopServiceComponent, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, createCouponService_component_1.CreateCouponServiceComponent, common_1.Location, shopPageService_component_1.GetShopServiceComponent, ng2_toastr_1.ToastsManager])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());
exports.CreateCouponComponent = CreateCouponComponent;
//# sourceMappingURL=createCoupon.component.js.map