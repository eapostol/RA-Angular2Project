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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AliensService = (function () {
    function AliensService(http) {
        this.http = http;
        this.aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens'; // URL to web api
    }
    AliensService.prototype.getAliens = function () {
        var x = this.http.get(this.aliensUrl);
        //console.log(x);
        var y = x.toPromise();
        //console.log(y);
        var z = y.then(function (response) { return response.json(); }).catch(this.handleError);
        console.log(z);
        return z;
    };
    AliensService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AliensService;
}());
AliensService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AliensService);
exports.AliensService = AliensService;
//# sourceMappingURL=aliens.service.js.map