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
var CreateShopServiceComponent = (function () {
    function CreateShopServiceComponent(_http) {
        this._http = _http;
        this._apiShopsUrl = 'https://shopfansserver.herokuapp.com/api/upload';
        this._apiFormDataPostingUrl = 'https://shopfansserver.herokuapp.com/api/upload';
        this.percent = "0";
    }
    /** Get data from Server */
    CreateShopServiceComponent.prototype.getPages = function () {
        return this._http.get(this._apiShopsUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    /** post data to server */
    CreateShopServiceComponent.prototype.createShop = function (shop, filesToUpload) {
        var body = JSON.stringify(shop);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, method: "post" });
        return this._http.post(this._apiShopsUrl, body, options)
            .map(function (res) { return res.json; })
            .catch(this.handleError);
    };
    CreateShopServiceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CreateShopServiceComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    /**Post data to server with Image  upload using XMLHttpRequest */
    CreateShopServiceComponent.prototype.FormDataImageXhrPost = function (params, files, shop, description) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("shopname", shop.shopname);
            // formData.append("productname", shop.productname);
            formData.append("address", shop.address);
            formData.append("description", description);
            formData.append("phone", shop.phone);
            formData.append("userId", shop.userId);
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
            xhr.open("POST", _this._apiFormDataPostingUrl, true);
            xhr.send(formData);
        });
    };
    CreateShopServiceComponent.prototype.progressFunction = function (evt) {
        if (evt.lengthComputable) {
            //percent changed but I couldn't see change in html.
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
            //log works correctly.
            console.log("PERCENT : ", this.percent);
            //log works correctly.
            console.log(Math.round(evt.loaded / evt.total * 100) + "%");
        }
    };
    CreateShopServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateShopServiceComponent);
    return CreateShopServiceComponent;
}());
exports.CreateShopServiceComponent = CreateShopServiceComponent;
//# sourceMappingURL=createShopService.component.js.map