"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repo) {
        this.name = repo.name;
        this.description = repo.description;
        this.url = repo.url;
        this.size = repo.size;
        this.forkCount = repo.forkCount;
    }
    return Repo;
}());
exports.Repo = Repo;
