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
var updateShopService_component_1 = require('./updateShopService.component');
var authenticationService_component_1 = require('../../app/authentication/authenticationService.component');
var shopPageService_component_1 = require('./shopPageService.component');
var common_1 = require('@angular/common');
var tiny_editor_1 = require('../../app/sharedComponents/tinymce/tiny-editor');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var UpdateShopComponent = (function () {
    function UpdateShopComponent(_router, _routerParams, _localService, _localAuthService, _localGetShopService, _location, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this._localAuthService = _localAuthService;
        this._localGetShopService = _localGetShopService;
        this._location = _location;
        this.toastr = toastr;
        this.pageTitle = 'Content Update';
        this.imageWidth = 60;
        this.imageMargin = 6;
        this.filesToUpload = []; // Initialize the images instance object.
    }
    UpdateShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        else {
        }
        //console.log("UserId:" + this.userId);
        this._localGetShopService.getShopByUserId(this.userId).subscribe(function (shop) { return _this.Shop = shop; }, function (error) { return _this.errorMessage = error; });
        this.Shop = {
            shopname: this._routerParams.get('shopname'),
            description: this._routerParams.get('description'),
            address: this._routerParams.get('address'),
            images: this._routerParams.get('image'),
            phone: this._routerParams.get('phone'),
            userId: this.userId
        };
    };
    UpdateShopComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    /**
       * Check if file has valid extension
       * @param file
       */
    UpdateShopComponent.prototype.isValidExtension = function (file) {
        var allowedExtensions = ".png";
        var extension = file.name.split('.').pop();
        return allowedExtensions.indexOf(extension) !== -1;
    };
    // This is for picture upload function
    UpdateShopComponent.prototype.OnXhrSubmit = function (e, f) {
        var _this = this;
        // // This to call the normal data posting with image files posting.
        this._localService.UpdateContentXhrPost([], this.filesToUpload, this.Shop, f.form.find('description').value).then(function (result) {
            console.log(result);
            _this._router.navigate(['/Landing']);
        }, function (error) {
            _this.errorMessage = error;
            console.error(error);
        });
        if (this.errorMessage == undefined) {
            this.toastr.success("Shop profile updated successfully.", "Shop profile");
        }
        else {
            this.toastr.error("Shop profile failed update with error:" + this.errorMessage, "Shop profile");
        }
        //this._router.navigate(['/Landing']);
    };
    UpdateShopComponent.prototype.OnCancel = function () {
        this._location.back();
    };
    UpdateShopComponent = __decorate([
        core_1.Component({
            selector: 'update-shop',
            templateUrl: 'app/shops/updateShop.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, tiny_editor_1.TinyEditor],
            styleUrls: ['app/shops/createShop.css'],
            providers: [updateShopService_component_1.UpdateShopServiceComponent, authenticationService_component_1.authenticationServiceComponent, ng2_toastr_1.ToastsManager, shopPageService_component_1.GetShopServiceComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, updateShopService_component_1.UpdateShopServiceComponent, authenticationService_component_1.authenticationServiceComponent, shopPageService_component_1.GetShopServiceComponent, common_1.Location, ng2_toastr_1.ToastsManager])
    ], UpdateShopComponent);
    return UpdateShopComponent;
}());
exports.UpdateShopComponent = UpdateShopComponent;
//# sourceMappingURL=updateShop.component.js.map