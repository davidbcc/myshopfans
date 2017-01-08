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
var router_1 = require('@angular/router');
var pageService_component_1 = require('./pageService.component');
var PageListComponent = (function () {
    function PageListComponent(_pageService) {
        this._pageService = _pageService;
        this.pageTitle = 'Page Content List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    PageListComponent.prototype.ngOnInit = function () {
        this._pageService.getPages()
            .toPromise()
            .then(function (Shop) { return Shop; });
    };
    PageListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/pageList.component.html',
            styleUrls: ['app/pages/pageList.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [pageService_component_1.PageServiceComponent]
        }), 
        __metadata('design:paramtypes', [pageService_component_1.PageServiceComponent])
    ], PageListComponent);
    return PageListComponent;
}());
exports.PageListComponent = PageListComponent;
//# sourceMappingURL=pageList.component.js.map