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
require('rxjs/add/operator/toPromise');
var ColonistsService = (function () {
    function ColonistsService(http) {
        this.http = http;
        this.colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ColonistsService.prototype.getColonists = function () {
        var x = this.http.get(this.colonistsUrl);
        //console.log(x);
        var y = x.toPromise();
        //console.log(y);
        var z = y.then(function (response) { return response.json(); }).catch(this.handleError);
        //console.log(z instanceof Promise);
        return z;
    };
    ColonistsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ColonistsService.prototype.newColonist = function (colonist) {
        return this.http
            .post(this.colonistsUrl, JSON.stringify({ colonist: colonist }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().colonist; })
            .catch(this.handleError);
    };
    ColonistsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ColonistsService);
    return ColonistsService;
}());
exports.ColonistsService = ColonistsService;
//# sourceMappingURL=colonists.service.js.map