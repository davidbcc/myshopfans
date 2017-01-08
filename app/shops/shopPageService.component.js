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
var GetShopServiceComponent = (function () {
    function GetShopServiceComponent(_http) {
        this._http = _http;
        this._apiShopsUrl = 'https://shopfansserver.herokuapp.com/api/shops/';
        this._apigetShopByUserIdUrl = 'https://shopfansserver.herokuapp.com/api/shops/getShop/';
    }
    /** Get Shop by shop name from Server */
    GetShopServiceComponent.prototype.getShopByName = function (shopname) {
        this._apiShopsUrl = this._apiShopsUrl + shopname;
        return this._http.get(this._apiShopsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /** Get Shop by UserId from Server */
    GetShopServiceComponent.prototype.getShopByUserId = function (userId) {
        this._apigetShopByUserIdUrl = this._apigetShopByUserIdUrl + userId;
        return this._http.get(this._apigetShopByUserIdUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GetShopServiceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || { "Shop": body.data };
    };
    GetShopServiceComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    GetShopServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GetShopServiceComponent);
    return GetShopServiceComponent;
}());
exports.GetShopServiceComponent = GetShopServiceComponent;
//# sourceMappingURL=shopPageService.component.js.map