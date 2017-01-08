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
require('rxjs/Rx'); // Load all features
var login_component_1 = require('./login/login.component');
var landing_component_1 = require('./home/landing.component');
var shopPage_component_1 = require('./shops/shopPage.component');
var createShop_component_1 = require('./shops/createShop.component');
var register_component_1 = require('./registration/register.component');
var updateShop_component_1 = require('./shops/updateShop.component');
var createCoupon_component_1 = require('./coupon/createCoupon.component');
var updateCoupon_component_1 = require('./coupon/updateCoupon.component');
var couponList_component_1 = require('./coupon/couponList.component');
var sendEmail_component_1 = require('./emailSubs/sendEmail.component');
var plan_component_1 = require('./plans/plan.component');
var editUserProfile_component_1 = require('./userProfile/editUserProfile.component');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent(_router, toastr) {
        this._router = _router;
        this.toastr = toastr;
        this.pageTitle = "MyShop";
    }
    AppComponent.prototype.isAuthenticated = function () {
        var isAuthenticated;
        if (sessionStorage.getItem("token")) {
            isAuthenticated = true;
        }
        else {
            isAuthenticated = false;
        }
        return isAuthenticated;
    };
    AppComponent.prototype.getDisplayname = function () {
        return sessionStorage.getItem("displayname");
    };
    AppComponent.prototype.OnLogout = function () {
        sessionStorage.removeItem('displayname');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        this._router.navigate(['Landing']);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.DisplayName = this.getDisplayname();
    };
    AppComponent.prototype.showSuccess = function () {
        this.toastr.success('You are awesome!', 'Success!');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            template: "<nav  class=\"\">\n        <div class=\"container\">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class=\"navbar-header page-scroll\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span> Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand\" href=\"#page-top\">{{pageTitle}}</a>\n                \n            </div>\n           <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                 <ul class=\"nav navbar-nav navbar-right\">\n               <a class=\"navbar-brand\"  *ngIf=\"isAuthenticated()\" >\u3088\u3046\u3053\u305D {{DisplayName}}!</a>\n                 <li><a [routerLink]=\"['Landing']\">Home</a></li>\n                      <li class=\"dropdown\">\n                        <a href=\"#\" *ngIf=\"isAuthenticated()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Account<b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                         <li><a [routerLink]=\"['EditUserProfile']\" *ngIf=\"isAuthenticated()\">User Profile</a></li>\n                   \n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" *ngIf=\"isAuthenticated()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings<b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                         <li><a [routerLink]=\"['CreateShop']\" *ngIf=\"isAuthenticated()\">Create Shop</a></li>\n                           <li><a [routerLink]=\"['UpdateShop']\" *ngIf=\"isAuthenticated()\">Update Shop</a></li>\n                           <li><a [routerLink]=\"['CouponList']\" *ngIf=\"isAuthenticated()\">Coupons</a></li>\n                           <li><a [routerLink]=\"['SendEmail']\" *ngIf=\"isAuthenticated()\">Send Email</a></li>\n                        </ul>\n                    </li>\n                   \n                     <li><a [routerLink]=\"['Login']\" *ngIf=\"!isAuthenticated()\" >Login</a></li>\n                    \n                     \n                         <li><a role=\"button\" (click)=\"OnLogout()\" *ngIf=\"isAuthenticated()\" >Sign Out</a></li>\n                          <li><a [routerLink]=\"['Subscribe']\" *ngIf=\"!isAuthenticated()\">Subscribe</a></li>\n                </ul>\n            </div>\n          \n        </div>\n</nav>\n<!-- This is the outlet for Angular components -->\n          <div class=\"container\">\n            <router-outlet></router-outlet>\n         <modal-confirm></modal-confirm>\n        </div>\n    \n          <!-- Footer -->\n    <footer class=\"text-center\">\n        <div class=\"footer-above\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"footer-col col-md-4\">\n                        <h3>Location</h3>\n                        <p>Japan /\n                            <br>Malaysia </p>\n                    </div>\n                    <div class=\"footer-col col-md-4\">\n                        <h3>Around the Web</h3>\n                        <ul class=\"list-inline\">\n                            <li>\n                                <a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-facebook\"></i></a>\n                            </li>\n                     \n                            <li>\n                                <a href=\"#\" class=\"btn-social btn-outline\"><i class=\"fa fa-fw fa-twitter\"></i></a>\n                            </li>\n                         \n                        </ul>\n                    </div>\n                    <div class=\"footer-col col-md-4\">\n                        <h3>{{pageTitle}}</h3>\n                        <p>{{pageTitle}} is a site to allows you to manage your own page as easy as button click. <a href=\"http://www.bit-numbers.com\">BitNumbers</a>.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"footer-below\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        Copyright &copy; www.bit-numbers.com 2016\n                    </div>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n    ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            styleUrls: ['styles.css'],
            providers: [
                http_1.HTTP_PROVIDERS,
                router_deprecated_1.ROUTER_PROVIDERS, ng2_toastr_1.ToastsManager]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/landing', name: 'Landing', component: landing_component_1.LandingComponent, useAsDefault: true },
            //{ path: '/pages/:id', name: 'PageDetail', component: PageDetailComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
            //{ path: '/pages', name: 'CreatePage', component: CreatePageComponent },
            { path: '/createShop', name: 'CreateShop', component: createShop_component_1.CreateShopComponent },
            { path: '/shops/:shopname', name: 'Shop', component: shopPage_component_1.ShopComponent },
            { path: '/registration', name: 'Register', component: register_component_1.RegisterComponent },
            { path: '/updateShop', name: 'UpdateShop', component: updateShop_component_1.UpdateShopComponent },
            { path: '/createCoupon', name: 'CreateCoupon', component: createCoupon_component_1.CreateCouponComponent },
            { path: '/couponList', name: 'CouponList', component: couponList_component_1.couponListComponent },
            { path: '/updateCoupon', name: 'UpdateCoupon', component: updateCoupon_component_1.UpdateCouponComponent },
            { path: '/sendEmail', name: 'SendEmail', component: sendEmail_component_1.SendEmailComponent },
            { path: '/editUserProfile', name: 'EditUserProfile', component: editUserProfile_component_1.EditUserProfileComponent },
            { path: '/plans', name: 'Subscribe', component: plan_component_1.PlansComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, ng2_toastr_1.ToastsManager])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map