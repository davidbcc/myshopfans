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
var createShopService_component_1 = require('./createShopService.component');
var authenticationService_component_1 = require('../../app/authentication/authenticationService.component');
var common_1 = require('@angular/common');
var tiny_editor_1 = require('../../app/sharedComponents/tinymce/tiny-editor');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var common_2 = require('@angular/common');
var URL = 'https://shopfansserver.herokuapp.com/api/';
var CreateShopComponent = (function () {
    function CreateShopComponent(_router, _routerParams, _localService, _localAuthService, _location, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this._localAuthService = _localAuthService;
        this._location = _location;
        this.toastr = toastr;
        this.pageTitle = 'Create Shop';
        // public uploader: FileUploader = new FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.filesToUpload = []; // Initialize the images instance object.
    }
    CreateShopComponent.prototype.onSubmit = function (e, f) {
        var _this = this;
        this._localService.FormDataImageXhrPost([], this.filesToUpload, this.NewShop, f.form.find('description').value).then(function (result) {
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
    };
    CreateShopComponent.prototype.ngOnInit = function () {
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        this.NewShop = {
            shopname: this._routerParams.get('shopname'), description: this._routerParams.get('description'),
            productname: this._routerParams.get('productname'), address: this._routerParams.get('address'),
            images: this._routerParams.get('images'),
            phone: this._routerParams.get('phone'),
            userId: this.userId,
            coupons: null
        };
    };
    CreateShopComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    CreateShopComponent.prototype.OnCancel = function () {
        this._location.back();
    };
    CreateShopComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    CreateShopComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    CreateShopComponent = __decorate([
        core_1.Component({
            selector: 'create-shop',
            templateUrl: 'app/shops/createShop.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, tiny_editor_1.TinyEditor,
                common_2.NgClass, common_2.NgStyle, common_2.CORE_DIRECTIVES, common_2.FORM_DIRECTIVES],
            styleUrls: ['app/shops/createShop.css'],
            providers: [createShopService_component_1.CreateShopServiceComponent, authenticationService_component_1.authenticationServiceComponent, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, createShopService_component_1.CreateShopServiceComponent, authenticationService_component_1.authenticationServiceComponent, common_1.Location, ng2_toastr_1.ToastsManager])
    ], CreateShopComponent);
    return CreateShopComponent;
}());
exports.CreateShopComponent = CreateShopComponent;
//# sourceMappingURL=createShop.component.js.map