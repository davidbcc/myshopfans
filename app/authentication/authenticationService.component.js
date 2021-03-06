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
var Observable_1 = require('rxjs/Observable');
var authenticationServiceComponent = (function () {
    function authenticationServiceComponent(_http) {
        this._http = _http;
        this._apiUserAuthenticateUrl = 'https://shopfansserver.herokuapp.com/api/user/authenticate';
    }
    authenticationServiceComponent.prototype.authenticate = function (token) {
        if (token != null) {
            var body = JSON.stringify({});
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Authorization', 'Bearer ' + token);
            var options = new http_1.RequestOptions({ headers: headers, method: "post" });
            // console.log(localStorage.getItem("token"));
            return this._http.post(this._apiUserAuthenticateUrl, body, options)
                .map(function (res) { return res.json; })
                .catch(this.handleError);
        }
    };
    authenticationServiceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    authenticationServiceComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    authenticationServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], authenticationServiceComponent);
    return authenticationServiceComponent;
}());
exports.authenticationServiceComponent = authenticationServiceComponent;
//# sourceMappingURL=authenticationService.component.js.map