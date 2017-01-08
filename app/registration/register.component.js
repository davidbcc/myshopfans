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
//import { ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';
var router_deprecated_1 = require('@angular/router-deprecated');
var registerService_component_1 = require('./registerService.component');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var RegisterComponent = (function () {
    function RegisterComponent(_router, _routerParams, _localService, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._localService = _localService;
        this.toastr = toastr;
        this.pageTitle = 'Registration';
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        // This to call the normal data posting without image files posting.
        this._localService.createUser(this.User).
            subscribe(function (data) { return _this.postDataString = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) {
            _this.toastr.error(error, "Registration Service Error!");
            console.log(error);
        });
        this.Email = {
            receipient: this.User.username, subject: "Registration Successfully",
            content: "Congratulation!" + this.User.displayname + " , you have successfully registered with ShopFans"
        };
        // Send Registration email
        this._localService.sendRegistrationEmail(this.Email).
            subscribe(function (data) { return _this.postDataString = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) {
            _this.toastr.error(error, "Registration Service Error!");
            console.log(error);
        });
        this._router.navigate(['/Landing']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.User = {
            firstname: this._routerParams.get('firstname'), lastname: this._routerParams.get('lastname'),
            password: this._routerParams.get('password'), username: this._routerParams.get('username'),
            displayname: this._routerParams.get('displayname'),
            roles: this._routerParams.get('roles'),
            userurl: this._routerParams.get('userurl'),
            phone: this._routerParams.get('phone'),
            address: this._routerParams.get('address')
        };
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'create-shop',
            templateUrl: 'app/registration/register.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/registration/register.css'],
            providers: [registerService_component_1.RegisterServiceComponent, ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, registerService_component_1.RegisterServiceComponent, ng2_toastr_1.ToastsManager])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map