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
;
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var EditUserProfileServiceComponent = (function () {
    function EditUserProfileServiceComponent(_http) {
        this._http = _http;
        this._apiUserUrl = 'https://shopfansserver.herokuapp.com/api/user/';
        this._apiUserupdateUrl = 'https://shopfansserver.herokuapp.com/api/userUpdate/';
    }
    /** Get User Profile by Id from Server */
    /** If the API is post method , the http method has to be post as well */
    EditUserProfileServiceComponent.prototype.getUserProfileByUserId = function (userId) {
        this._apiUserUrl = this._apiUserUrl + userId;
        return this._http.post(this._apiUserUrl, null)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditUserProfileServiceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || { "User Profile": body.data };
    };
    EditUserProfileServiceComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    /**Post data to server  using XMLHttpRequest */
    EditUserProfileServiceComponent.prototype.UpdateUsertXhrPost = function (user, userId) {
        // return new Promise((resolve, reject) => {
        //     var formData: any = new FormData();
        //     var xhr = new XMLHttpRequest();
        //     formData.append("firstname", user.firstname);
        //     formData.append("lastname", user.lastname);
        //     formData.append("displayname", user.displayname);
        //     formData.append("address", user.address);
        //     formData.append("userurl", user.userurl);
        //     formData.append("phone", user.phone);
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState == 4) {
        //             if (xhr.status == 200) {
        //                 resolve(JSON.parse(xhr.response));
        //             } else {
        //                 reject(xhr.response);
        //             }
        //         }
        //     }
        //     xhr.open("POST", this._apiUserupdateUrl + userId, true);
        //     xhr.send(formData);
        // }
        // );
        this._apiUserupdateUrl = this._apiUserupdateUrl + userId;
        return this._http.post(this._apiUserupdateUrl, user)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditUserProfileServiceComponent = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EditUserProfileServiceComponent);
    return EditUserProfileServiceComponent;
}());
exports.EditUserProfileServiceComponent = EditUserProfileServiceComponent;
//# sourceMappingURL=editUserProfileService.component.js.map