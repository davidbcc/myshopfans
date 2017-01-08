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
var forms_1 = require('@angular/forms');
var checkOutComponent = (function () {
    function checkOutComponent() {
    }
    /** This the function to call Stripe API to create a new token and post */
    checkOutComponent.prototype.getToken = function () {
        var _this = this;
        this.message = 'Loading...';
        window.Stripe.card.createToken({
            number: this.cardNumber,
            exp_month: this.expiryMonth,
            exp_year: this.expiryYear,
            cvc: this.cvc
        }, function (status, response) {
            if (status === 200) {
                _this.message = "Success! Card token " + response.card.id + ".";
            }
            else {
                _this.message = response.error.message;
            }
        });
    };
    checkOutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkout-form',
            templateUrl: 'checkOutcomponent.html',
            styleUrls: ['checkOutcomponent.css'],
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], checkOutComponent);
    return checkOutComponent;
}());
exports.checkOutComponent = checkOutComponent;
//# sourceMappingURL=checkOutcomponent.js.map