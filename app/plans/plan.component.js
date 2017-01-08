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
// import {NgGrid} from '../../app/sharedComponents/angular2-grid/dist/directives/NgGrid';
// import {NgGridItem} from '../../app/sharedComponents/angular2-grid/dist/directives/NgGridItem';
var angular2_grid_1 = require('angular2-grid');
var PlansComponent = (function () {
    function PlansComponent() {
        this.pageTitle = 'Subscribe Plans';
    }
    // This is the Stripe check-out handling.
    PlansComponent.prototype.openCheckout2900 = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_dAArt6L3RUHZupMegxmdrYkV',
            locale: 'auto',
            token: function (token) {
                console.log('token:' + token);
            }
        });
        handler.open({
            name: 'My Shop',
            description: '2900 Plan',
            amount: 290000
        });
    };
    PlansComponent.prototype.openCheckout4900 = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_dAArt6L3RUHZupMegxmdrYkV',
            locale: 'auto',
            token: function (token) {
                console.log('token:' + token);
            }
        });
        handler.open({
            name: 'My Shop',
            description: '4900 Plan',
            amount: 490000
        });
    };
    PlansComponent.prototype.openCheckout5900 = function () {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_dAArt6L3RUHZupMegxmdrYkV',
            locale: 'auto',
            token: function (token) {
                console.log('token:' + token);
            }
        });
        handler.open({
            name: 'My Shop',
            description: '5900 Plan',
            amount: 590000
        });
    };
    PlansComponent = __decorate([
        core_1.Component({
            selector: 'Plans',
            templateUrl: 'app/plans/plan.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, angular2_grid_1.NgGrid, angular2_grid_1.NgGridItem],
            styleUrls: ['app/plans/planForm.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PlansComponent);
    return PlansComponent;
}());
exports.PlansComponent = PlansComponent;
//# sourceMappingURL=plan.component.js.map