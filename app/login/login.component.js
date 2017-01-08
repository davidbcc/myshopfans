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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var LoginComponent = (function () {
    function LoginComponent(_router, _routerParams, _http, toastr) {
        this._router = _router;
        this._routerParams = _routerParams;
        this._http = _http;
        this.toastr = toastr;
        this.pageTitle = 'Login';
        this.registerlink = 'Not a Member yet?';
        this._apiUserLoginUrl = 'https://shopfansserver.herokuapp.com/login';
    }
    /**Login method, storing the token into cookies upon authenticated. */
    LoginComponent.prototype.OnLogin = function () {
        var _this = this;
        var body = JSON.stringify({ username: this.User.username, password: this.User.password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/Json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        this._http.post(this._apiUserLoginUrl, body, options)
            .subscribe(function (response) {
            // localStorage.setItem('token', response.json().token);
            // localStorage.setItem('displayname', response.json().user.displayname);
            // localStorage.setItem('userId', response.json().user._id);
            sessionStorage.setItem('userId', response.json().user._id);
            sessionStorage.setItem('displayname', response.json().user.displayname);
            sessionStorage.setItem('token', response.json().token);
            _this._router.navigate(['/Landing']);
        }, function (error) {
            _this.toastr.error(error.text(), "Login Service Error!");
            console.log(error.text());
        });
    };
    /**Registration */
    LoginComponent.prototype.signup = function (event) {
        this._router.navigate(['/Register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.User = {
            username: this._routerParams.get('username'),
            password: this._routerParams.get('password')
        };
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/login/login.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/login/login.css'],
            providers: [ng2_toastr_1.ToastsManager]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, router_deprecated_1.RouteParams, http_1.Http, ng2_toastr_1.ToastsManager])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map