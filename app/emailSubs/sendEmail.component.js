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
var tiny_editor_1 = require('../../app/sharedComponents/tinymce/tiny-editor');
var router_deprecated_1 = require('@angular/router-deprecated');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var common_1 = require('@angular/common');
var sendEmaiService_component_1 = require('./sendEmaiService.component');
var shopPageService_component_1 = require('../shops/shopPageService.component');
var SendEmailComponent = (function () {
    function SendEmailComponent(_router, _routerParams, _location, _localService, _localShopService, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._location = _location;
        this._localService = _localService;
        this._localShopService = _localShopService;
        this.toastr = toastr;
        this.tinyModel = "Default";
    }
    SendEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        this.Email = {
            receipient: this._routerParams.get('receipient'),
            subject: this._routerParams.get('subject'),
            content: this._routerParams.get('content')
        };
        this._localShopService.getShopByUserId(this.userId).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
    };
    SendEmailComponent.prototype.OnCancel = function () {
        this._location.back();
    };
    SendEmailComponent.prototype.onSubmit = function (e, f) {
        var _this = this;
        this._localService.sendEmail(this.Email, f.form.find('content').value, this.Shop._id).subscribe(function (email) { return _this.Email = email; }, function (error) { return _this.errorMessage = error; });
        console.log(this.errorMessage);
        if (this.errorMessage == undefined) {
            this.toastr.success("Emails send successfully.", "Email");
        }
        else {
            this.toastr.error("Emails failed!! with this error:" + this.errorMessage, "Email");
        }
        this._router.navigate(['/Landing']);
    };
    SendEmailComponent = __decorate([
        core_1.Component({
            selector: 'email-form',
            templateUrl: 'app/emailSubs/sendEmail.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, tiny_editor_1.TinyEditor],
            styleUrls: ['app/login/login.css'],
            providers: [ng2_toastr_1.ToastsManager, sendEmaiService_component_1.EmailServiceComponent, shopPageService_component_1.GetShopServiceComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, common_1.Location, sendEmaiService_component_1.EmailServiceComponent, shopPageService_component_1.GetShopServiceComponent, ng2_toastr_1.ToastsManager])
    ], SendEmailComponent);
    return SendEmailComponent;
}());
exports.SendEmailComponent = SendEmailComponent;
//# sourceMappingURL=sendEmail.component.js.map