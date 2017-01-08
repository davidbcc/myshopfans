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
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var editUserProfileService_component_1 = require('./editUserProfileService.component');
var EditUserProfileComponent = (function () {
    function EditUserProfileComponent(_router, _routerParams, _localService, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this.toastr = toastr;
        this.pageTitle = 'User Profile';
    }
    EditUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = sessionStorage.getItem("token");
        this.userId = sessionStorage.getItem("userId");
        if (token == null) {
            this._router.navigate(['Login']);
        }
        else {
            this._localService.getUserProfileByUserId(this.userId).subscribe(function (user) { return _this.User = user; }, function (error) { return _this.errorMessage = error; });
            this.User = {
                firstname: this._routerParams.get('firstname'),
                lastname: this._routerParams.get('lastname'),
                displayname: this._routerParams.get('displayname'),
                phone: this._routerParams.get('phone'),
                address: this._routerParams.get('address'),
                userurl: this._routerParams.get('userurl')
            };
        }
    };
    EditUserProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this._localService.UpdateUsertXhrPost(this.User, this.userId).subscribe(function (user) { return _this.User = user; }, function (error) { return _this.errorMessage = error; });
        if (this.errorMessage == undefined) {
            this.toastr.success("User Profile updated successfully.", "User Profile");
        }
        else {
            this.toastr.error("User Profile failed update with error:" + this.errorMessage, "User Profile");
        }
        this._router.navigate(['/Landing']);
    };
    EditUserProfileComponent = __decorate([
        core_1.Component({
            selector: 'email-form',
            templateUrl: 'app/userProfile/editUserProfile.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/userProfile/userProfile.css'],
            providers: [ng2_toastr_1.ToastsManager, editUserProfileService_component_1.EditUserProfileServiceComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, editUserProfileService_component_1.EditUserProfileServiceComponent, ng2_toastr_1.ToastsManager])
    ], EditUserProfileComponent);
    return EditUserProfileComponent;
}());
exports.EditUserProfileComponent = EditUserProfileComponent;
//# sourceMappingURL=editUserProfile.component.js.map