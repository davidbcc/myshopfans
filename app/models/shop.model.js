"use strict";
var Shop = (function () {
    function Shop(shopname, description, address, images, phone, userId) {
        this.shopname = shopname;
        this.description = description;
        this.address = address;
        this.images = images;
        this.phone = phone;
        this.userId = userId;
    }
    return Shop;
}());
exports.Shop = Shop;
//# sourceMappingURL=shop.model.js.map