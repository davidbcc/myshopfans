"use strict";
var User = (function () {
    function User(firstname, lastname, address, username, displayname, roles, userurl, phone, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.username = username;
        this.displayname = displayname;
        this.roles = roles;
        this.userurl = userurl;
        this.phone = phone;
        this.password = password;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.model.js.map