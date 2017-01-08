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
var UpdateShopServiceComponent = (function () {
    function UpdateShopServiceComponent(_http) {
        this._http = _http;
        this._apiFormDataPostingUrl = 'https://shopfansserver.herokuapp.com/api/content/edit/';
        this.percent = "0";
    }
    /**Post data to server with Image  upload using XMLHttpRequest */
    UpdateShopServiceComponent.prototype.UpdateContentXhrPost = function (params, files, shop, description) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            console.log("id:" + shop._id);
            formData.append("shopname", shop.shopname);
            //formData.append("productname", shop.productname);
            formData.append("address", shop.address);
            formData.append("description", description);
            formData.append("phone", shop.phone);
            formData.append("userId", shop.userId);
            formData.append("images", shop.images);
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
            xhr.open("POST", _this._apiFormDataPostingUrl + shop._id, true);
            xhr.send(formData);
        });
    };
    UpdateShopServiceComponent.prototype.progressFunction = function (evt) {
        if (evt.lengthComputable) {
            //percent changed but I couldn't see change in html.
            this.percent = Math.round(evt.loaded / evt.total * 100) + "%";
            //log works correctly.
            console.log("PERCENT : ", this.percent);
            //log works correctly.
            console.log(Math.round(evt.loaded / evt.total * 100) + "%");
        }
    };
    UpdateShopServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UpdateShopServiceComponent);
    return UpdateShopServiceComponent;
}());
exports.UpdateShopServiceComponent = UpdateShopServiceComponent;
//# sourceMappingURL=updateShopService.component.js.map