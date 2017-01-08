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
var CreateCouponServiceComponent = (function () {
    function CreateCouponServiceComponent(_http) {
        this._http = _http;
        this._apiCreateCouponUrl = 'https://shopfansserver.herokuapp.com/api/createCoupon/';
        this._apigetShopByUserIdUrl = 'https://shopfansserver.herokuapp.com/api/shops/getShop/';
        this.percent = "0";
    }
    /** Get Shop by UserId from Server */
    CreateCouponServiceComponent.prototype.getShopByUserId = function (userId) {
        this._apigetShopByUserIdUrl = this._apigetShopByUserIdUrl + userId;
        return this._http.get(this._apigetShopByUserIdUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CreateCouponServiceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CreateCouponServiceComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    /**Post data to server with Image  upload using XMLHttpRequest, to Create New Coupon */
    CreateCouponServiceComponent.prototype.FormDataCreateCouponXhrPost = function (params, files, coupon, shopId, description) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("title", coupon.title);
            formData.append("description", description);
            formData.append("image", coupon.image);
            formData.append("expireddate", coupon.expiredDate);
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
                console.log("file to upload :" + files[i].name);
            }
            xhr.upload.addEventListener("progress", function (evt) { return _this.progressFunction(evt); }, false);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", _this._apiCreateCouponUrl + shopId, true);
            xhr.send(formData);
        });
    };
    CreateCouponServiceComponent.prototype.progressFunction = function (evt) {
        if (evt.lengthComputable) {
            //percent changed but I couldn't see change in html.
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
            //log works correctly.
            console.log("PERCENT : ", this.percent);
            //log works correctly.
            console.log(Math.round(evt.loaded / evt.total * 100) + "%");
        }
    };
    CreateCouponServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateCouponServiceComponent);
    return CreateCouponServiceComponent;
}());
exports.CreateCouponServiceComponent = CreateCouponServiceComponent;
//# sourceMappingURL=createCouponService.component.js.map