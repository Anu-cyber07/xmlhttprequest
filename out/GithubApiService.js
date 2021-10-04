"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
var Repo_1 = require("./Repo");
var User_1 = require("./User");
var XML = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XML();
var options = {
    headers: {
        'User-agent': 'request'
    },
    JSON: true
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserinfo = function (userName, cb) {
        xhr.open('GET', 'https://api.github.com/users/' + userName, options, function (error, response, body) {
            var user = new User_1.User(JSON.parse(body));
            cb(user);
        });
    };
    GithubApiService.prototype.getUserdetails = function (userName, cb) {
        xhr.open('GET', 'https://api.github.com/users/' + userName + '/repos', options, function (error, response, body) {
            var repos = body.map(function (repo) { return new Repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
