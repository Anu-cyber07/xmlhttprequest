"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.fullName;
        this.repoCount = userResponse.repoCount;
        this.followerCount = userResponse.followerCount;
        //this.repos=userResponse.repos;
    }
    return User;
}());
exports.User = User;
